import { makeStyles } from "@material-ui/core/styles";
import { COLOR } from "../../config/theme.config";

export const useStyles = makeStyles((theme) => ({
  container: {
    borderBottom: `0.1px solid ${COLOR.BORDER}`,
  },
  title: {
    padding: theme.spacing(2, 2, 0),
    color: `${COLOR.TITLE}`,
  },
}));
