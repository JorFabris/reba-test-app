import {ACT_SELECTED_PRODUCT} from '../actions/ActionTypes';
const initialState = {
  selectedProduct: {},
};

interface IAction {
  type: String;
  payload: any;
}

export const productsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACT_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return {...state};
  }
};
