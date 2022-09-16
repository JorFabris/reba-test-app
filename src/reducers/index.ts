import {combineReducers} from 'redux';
import {appReducer} from './AppReducer';
import {productsReducer} from './ProductsReducer';

const rootReducers = combineReducers({
  products: productsReducer,
  app: appReducer,
});

export default rootReducers;
