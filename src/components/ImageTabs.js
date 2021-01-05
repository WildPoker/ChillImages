import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewCarouselOutlinedIcon from "@material-ui/icons/ViewCarouselOutlined";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  Tabs: {
    margin: "25px 0 25px 0",
    textAlign: "center",
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "Xanh Mono, monospace",
  },
  TabSelection: {
    color: "black",
  },
});

function ImageTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.newValue(value);
  };
  const handleClick = (event) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="images">
      <div className={classes.Tabs}>
        <h1 style={{ marginBottom: "20px" }}>Images</h1>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "#295939" } }}
          textColor="inherit"
          aria-label="icon label tabs example"
          className={classes.Tabs}
          centered
          className={classes.TabSelection}
        >
          <Tab
            icon={<ViewCarouselOutlinedIcon />}
            label="SLIDESHOW"
            onClick={handleClick}
            disabled={loading}
          />
          <Tab
            icon={<PhotoLibraryOutlinedIcon />}
            label="GALLERY"
            onClick={handleClick}
            disabled={loading}
          />
        </Tabs>
      </div>
    </div>
  );
}

export default ImageTabs;
