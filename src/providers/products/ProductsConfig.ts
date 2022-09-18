import {BASE_URL} from '../../config/Settings';
import {ApiConnector} from '../ApiConnector';

export const Connector = new ApiConnector();
export const PRODUCTS = `${BASE_URL()}/products/all`;
export const PRODUCT_DETAIL = `${BASE_URL()}/products/product`;
