import {ACT_SELECTED_PRODUCT} from '../actions/ActionsTypes';
const initialState = {
  idProduct: null,
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
        idProduct: action.payload,
      };
    default:
      return {...state};
  }
};
