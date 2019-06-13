import { ADD_PRODUCT } from "./actionTypes";

export const addProductList = dispatch => (item) => {
    dispatch({
      type: ADD_PRODUCT,
      item,
    })
  }