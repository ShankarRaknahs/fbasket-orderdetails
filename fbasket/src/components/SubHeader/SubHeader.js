import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

const SubHeader = ({ subTitle }) => {
  const classes = useStyles();

  return (
    <Grid container justify="flex-start" className={classes.container}>
      <Typography variant="h5" component="h6">
        {subTitle}
      </Typography>
    </Grid>
  );
};

export default SubHeader;
