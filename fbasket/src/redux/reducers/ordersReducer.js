import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ORDERS:
      return { ...state, orders: payload };
    default:
      return state;
  }
};
