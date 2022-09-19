import {ACT_SELECTED_PRODUCT} from './ActionsTypes';

export const actSelectProduct = (id: number) => {
  return {
    type: ACT_SELECTED_PRODUCT,
    payload: id,
  };
};
