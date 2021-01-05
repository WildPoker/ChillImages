import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  Appbar: {
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px",
  },
  Appbar2: {
    backgroundColor: "#7c9473",
    boxShadow: "0px 4px 2px -2px gray",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ffac41",
  },
  Button: {
    color: "#e8eae6",
    fontSize: "3vh",
    margin: "0 3vh 0 3vh",
  },
  Button2: {
    color: "#222831",
    fontSize: "3vh",
    margin: "0 3vh 0 3vh",
  },
  HomeText: {
    fontFamily: "Redressed, cursive",
    fontSize: "10vw",
    textAlign: "center",
    color: "white",
    textShadow: "5px 5px #7c9473",
  },
  Typography: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "Xanh Mono, monospace",
  },
  about: {
    fontSize: "25px",
    marginBottom: "200px",
    fontFamily: "Roboto, sans-serif",
  },
}));

export default useStyles;
