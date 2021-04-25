import { Button, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "../Table/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";

const ModifyOrder = ({ productId }) => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedOrders = products.filter(
    (product) => product.product_id === productId
  );

  const [activeOrderToModify, setActiveOrderToModify] = useState({});

  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={1}>
      <Typography variant="h6">Product Id: {productId}</Typography>

      {selectedOrders.map((selectedOrder) => {
        return (
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            key={selectedOrder.id}
          >
            <Grid item xs={4}>
              <Typography variant="h6">
                Order Id: {selectedOrder.orderId}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <TextField
                select
                value={selectedOrder.status}
                onChange={({ target: { value } }) => {
                  setActiveOrderToModify({
                    orderId: selectedOrder.orderId,
                    order_status: value,
                  });
                }}
              >
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="Done"> Done </MenuItem>
              </TextField>
            </Grid>

            <IconButton color="primary" component="span">
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{selectedOrder.quantity}</Typography>
            <IconButton color="primary" component="span">
              <AddIcon onClick={() => {}} />
            </IconButton>
            <Button variant="outlined" color="primary">
              Update
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ModifyOrder;
