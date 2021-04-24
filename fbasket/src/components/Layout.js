import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { useStyles } from "./styles";
import CONFIG from "../config/app.config";

const Layout = ({ tab, children }) => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" spacing={2}>
      <Grid item xs={2} className={classes.container}>
        <Header title={CONFIG.APP_TITLE} />
        <NavBar tab={tab} />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
