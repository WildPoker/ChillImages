import React from "react";
import useStyles from "./GridStyles";
import { Typography, Container } from "@material-ui/core";
import imagesData from "../images/images";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/open-animation/open-animation.scss";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function GridImages() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.Container}>
        <Typography component="div" className={classes.Typography}>
          <AutoplaySlider
            className={classes.Carousel}
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={3000}
            animation="openAnimation"
            cssModule={AwesomeSliderStyles}
            mobileTouch={true}
            infinite={true}
            style={{
              height: "90%",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            {imagesData.map((tile) => (
              <div key={tile.id} data-src={tile.img} />
            ))}
          </AutoplaySlider>
        </Typography>
      </Container>
    </div>
  );
}

export default GridImages;
