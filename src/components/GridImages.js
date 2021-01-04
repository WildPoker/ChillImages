import React from "react";
import useStyles from "./GridStyles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
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
      {/* <GridList cellHeight={300} className={classes.gridList} cols={2}>
        {imagesData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList> */}

      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        animation="openAnimation"
        cssModule={AwesomeSliderStyles}
        mobileTouch={true}
        infinite={true}
      >
        {imagesData.map((tile) => (
          <div data-src={tile.img} />
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default GridImages;
