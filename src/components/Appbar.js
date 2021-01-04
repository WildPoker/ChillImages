import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "react-responsive";
import useStyles from "./styles";

function Appbar() {
  const classes = useStyles();
  const isChanged = useMediaQuery({ query: "(max-width: 880px)" });
  return (
    <>
      <AppBar position="static" className={classes.Appbar}>
        <Toolbar>
          <div className="center">
            {isChanged ? (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <Box>
                  <Button color="inherit" className={classes.Button}>
                    Home
                  </Button>
                </Box>
                <Box>
                  <Button color="inherit" className={classes.Button}>
                    About
                  </Button>
                </Box>
                <Box>
                  <Button color="inherit" className={classes.Button}>
                    Images
                  </Button>
                </Box>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Appbar;
