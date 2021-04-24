import { Grid, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./styles";

const ModifyOrder = ({ productId }) => {
  const products = useSelector((state) => state.allProducts.products);
  const selectedOrders = products.filter(
    (product) => product.product_id === productId
  );

  const classes = useStyles();

  return (
    <Grid container justify="center" direction="column" spacing={0}>
      <Typography variant="h5">Product Id: {productId}</Typography>

      {selectedOrders.map((selectedOrder) => {
        return (
          <div key={selectedOrder.id} className={classes.margin}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography variant="h6">
                Order Id: {selectedOrder.orderId}
              </Typography>
              <TextField
                select
                label="Order Status"
                value={selectedOrder.order_status}
                variant="outlined"
                onChange={() => {}}
              >
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="Done"> Done </MenuItem>
              </TextField>

              <Typography variant="h3">{selectedOrder.quantity}</Typography>
            </Grid>
          </div>
        );
      })}
    </Grid>
  );
};

export default ModifyOrder;
