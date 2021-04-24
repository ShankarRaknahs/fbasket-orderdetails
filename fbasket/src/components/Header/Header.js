import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.container}>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {title}
      </Typography>
    </Grid>
  );
};

export default Header;
