import { Container, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles";
import Appbar from "./Appbar";
import About from "./About";
import GridImages from "./GridImages";
import ImageTabs from "./ImageTabs";
import ImageGallery from "./ImageGallery";
import Bottom from "./Bottom";
import CircleLoader from "react-spinners/CircleLoader";
import React, { useState, useEffect } from "react";
function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function changeValue(newValue) {
    setValue(newValue);
  }
  return (
    <div className="App">
      {loading ? (
        <div className="Loader">
          <CircleLoader color={"#7C9473"} loading={loading} size={50} />
        </div>
      ) : (
        <div className="Main">
          <div className="Home">
            <Appbar />
            <Container maxWidth="sm">
              <Typography
                component="div"
                style={{
                  backgroundColor: "transparent",
                  height: "70vh",
                }}
              >
                <Grow in={true}>
                  <p className={classes.HomeText}>Chill Images</p>
                </Grow>
              </Typography>
            </Container>
          </div>

          <About />
          <ImageTabs newValue={changeValue} />
          <div>{value ? <GridImages /> : <ImageGallery />}</div>
          <Bottom />
        </div>
      )}
    </div>
  );
}

export default App;
