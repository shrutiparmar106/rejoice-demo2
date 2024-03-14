import {GET_PRODUCT_LIST} from './types';
export const addPlace = data => {
  return {
    type: GET_PRODUCT_LIST,
    payload: data,
  };
};
