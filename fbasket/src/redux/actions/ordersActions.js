import { ActionTypes } from "../constants/actionTypes";

export const setOrders = (orders) => {
  return {
    type: ActionTypes.SET_ORDERS,
    payload: orders,
  };
};
