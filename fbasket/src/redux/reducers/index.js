import { combineReducers } from "redux";
import { ordersReducer, selectedOrderReducer } from "./ordersReducer";

const reducers = combineReducers({
  allOrders: ordersReducer,
  order: selectedOrderReducer,
});

export default reducers;
