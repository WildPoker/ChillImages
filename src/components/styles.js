import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  Appbar: {
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px",
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
    fontSize: "20px",
    margin: "0 20px 0 20px",
  },
  HomeText: {
    fontFamily: "Redressed, cursive",
    fontSize: "160px",
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
    fontFamily: "Roboto, sans-serif",
  },
}));

export default useStyles;
