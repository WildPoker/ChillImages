import React, { useState } from "react";
import imagesData from "../images/images";
import {
  GridList,
  GridListTile,
  Container,
  Typography,
  Modal,
  Zoom,
} from "@material-ui/core";
import useStyles from "./GridStyles";

function ImageGallery() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [picName, setPicName] = useState("");
  const [modalStyle] = useState(getModalStyle);

  const handleClick = (e) => {
    setPicName(e.target.name);
    setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
      {imagesData.map((tile) => {
        if (tile.title === picName) {
          return (
            <Zoom in={open}>
              <img
                key={tile.id}
                src={tile.img}
                style={{
                  height: "80vh",
                  width: "80vw",
                  border: "solid 2px black",
                }}
              />
            </Zoom>
          );
        }
      })}
    </>
  );
  return (
    <>
      <Container maxWidth="lg" className={classes.Container}>
        <Typography component="div" className={classes.Typography}>
          <GridList cellHeight={200} className={classes.gridList} cols={2}>
            {imagesData.map((tile) => (
              <GridListTile
                key={tile.id}
                cols={tile.cols || 1}
                style={{
                  border: "solid 1px #374045",
                  borderRadius: "5px",
                }}
                className={classes.gridTile}
                onClick={handleClick}
              >
                <img key={tile.id} src={tile.img} name={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </Typography>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {body}
      </Modal>
    </>
  );
}

function getModalStyle() {
  const top = 40;

  return {
    top: `${top}%`,
    margin: "auto",
  };
}
export default ImageGallery;
