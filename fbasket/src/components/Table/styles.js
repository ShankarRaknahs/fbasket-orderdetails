import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
  button: {
    textTransform: "none",
  },
  modalPaper: {
    position: "absolute",
    width: "100%",
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: 10,
  },
  moreWidth: {
    width: 500,
  },
}));
