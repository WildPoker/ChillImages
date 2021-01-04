import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "90%",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    padding: " 0 4px",
  },
  column: {
    flex: "50%",
    padding: "0 4px",
  },
  columnImg: {
    marginTop: "8px",
    verticalAlign: "middle",
  },
}));

export default useStyles;
