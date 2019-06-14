import { ADD_PRODUCT } from "./actionTypes";

export const addProductList = dispatch => (event) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: event
    })
  }
