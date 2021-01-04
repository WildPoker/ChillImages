import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Appbar from "./Appbar";
import About from "./About";
import GridImages from "./GridImages";
import CircleLoader from "react-spinners/CircleLoader";
import React, { useState, useEffect } from "react";
function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
                  marginTop: "100px",
                }}
              >
                <p className={classes.HomeText}>Chill Images</p>
              </Typography>
            </Container>
          </div>
          <About />
          <GridImages />
        </div>
      )}
    </div>
  );
}

export default App;
