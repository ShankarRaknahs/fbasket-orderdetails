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

export const selectedOrderReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ORDER:
      return { ...state, payload };

    case ActionTypes.REMOVE_SELECTED_ORDER:
      return {};
    default:
      return state;
  }
};
