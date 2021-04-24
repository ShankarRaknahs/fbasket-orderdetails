import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "../../config/theme.config";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    borderRight: `0.1px solid ${COLOR.BORDER}`,
    padding: 20,
    paddingTop: 60,
  },
  button: {
    marginBottom: 10,
    textTransform: "none",
    fontWeight: "bold",
  },
}));
