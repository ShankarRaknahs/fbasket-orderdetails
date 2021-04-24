import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";
import CONFIG from "../../config/app.config";

const NavBar = ({ tab }, props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      spacing={3}
      className={classes.container}
    >
      <Button
        color={tab === CONFIG.DASHBOARD_TAB ? "primary" : "inherit"}
        className={classes.button}
      >
        Dashboard
      </Button>
      <Button
        color={tab === CONFIG.PRODUCTS_TAB ? "primary" : "inherit"}
        href="/"
        className={classes.button}
      >
        Sold Products
      </Button>
      <Button
        color={tab === CONFIG.ORDERS_TAB ? "primary" : "inherit"}
        href="/orders"
        className={classes.button}
      >
        Orders
      </Button>
      <Button
        color={tab === CONFIG.CUSTOMERS_TAB ? "primary" : "inherit"}
        className={classes.button}
      >
        Customers
      </Button>
    </Grid>
  );
};

export default NavBar;
