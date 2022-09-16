import {ACT_SHOW_LOADING} from './ActionsTypes';

export const actShowLoading = (show: boolean) => {
  return {
    type: ACT_SHOW_LOADING,
    payload: show,
  };
};
