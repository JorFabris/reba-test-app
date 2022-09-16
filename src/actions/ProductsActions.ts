import {IProducts} from '../models/IProducts';
import {ACT_SELECTED_PRODUCT} from './ActionsTypes';

export const actSelectProduct = (product: IProducts) => {
  return {
    type: ACT_SELECTED_PRODUCT,
    payload: product,
  };
};
