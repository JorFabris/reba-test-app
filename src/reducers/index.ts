import {combineReducers} from 'redux';
import {productsReducer} from './ProductsReducer';

const rootReducers = combineReducers({
  products: productsReducer,
});

export default rootReducers;
