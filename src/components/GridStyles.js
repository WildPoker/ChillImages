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
  Container: {
    marginTop: "50px",
    backgroundColor: "transparent",
  },
  Typography: {
    backgroundColor: "transparent",
    height: "100%",
  },
  Carousel: {
    backgroundColor: "transparent !important",
  },
  imgGalleryRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  gridTile: {
    cursor: "pointer",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default useStyles;
