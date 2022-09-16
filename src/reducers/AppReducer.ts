import {ACT_SHOW_LOADING} from '../actions/ActionsTypes';

const initialState = {
  showLoading: false,
};

interface IAction {
  type: String;
  payload: any;
}

export const appReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ACT_SHOW_LOADING:
      return {
        ...state,
        showLoading: action.payload,
      };
    default:
      return {...state};
  }
};
