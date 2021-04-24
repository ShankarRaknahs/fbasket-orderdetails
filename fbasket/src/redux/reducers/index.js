import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { ordersReducer } from "./ordersReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  allOrders: ordersReducer,
});

export default reducers;
