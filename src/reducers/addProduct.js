import { ADD_PRODUCT } from "../actions/actionTypes";

export default (
  state = {
    order: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        order: state.order.concat([action.event]),
      };
    default: return state;
  }
}