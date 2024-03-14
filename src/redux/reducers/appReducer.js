import {GET_PRODUCT_LIST} from '../actions/types';
const initialState = {
  productList: [],
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    default:
      return state;
  }
};
export default appReducer;
