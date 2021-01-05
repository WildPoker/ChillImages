import { AppBar, Toolbar, Button, Box, Slide } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";
import useStyles from "./styles";
import { Link } from "react-scroll";
import React, { useState } from "react";

function Appbar() {
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);
  const [slide, setSlide] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 800) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Slide direction="down" in={slide}>
        <AppBar
          position={navbar ? "fixed" : "static"}
          className={navbar ? classes.Appbar2 : classes.Appbar}
        >
          <Toolbar>
            <div className="center" style={{ display: "flex" }}>
              <>
                <Box>
                  <Button
                    color="inherit"
                    className={navbar ? classes.Button2 : classes.Button}
                  >
                    <Link
                      activeClass="active"
                      to="Home"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Home
                    </Link>
                  </Button>
                </Box>
                <Box>
                  <Button
                    color="inherit"
                    className={navbar ? classes.Button2 : classes.Button}
                  >
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      About
                    </Link>
                  </Button>
                </Box>

                <Box>
                  <Button
                    color="inherit"
                    className={navbar ? classes.Button2 : classes.Button}
                  >
                    <Link
                      activeClass="active"
                      to="images"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      Images
                    </Link>
                  </Button>
                </Box>
              </>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
}

export default Appbar;
