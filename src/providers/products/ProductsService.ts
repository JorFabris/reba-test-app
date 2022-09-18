import {
  IResponseProducts,
  IResponseDetailsProduct,
} from '../../models/IResponseApi';
import {Connector, PRODUCTS, PRODUCT_DETAIL} from './ProductsConfig';

const TIMEOUT = 60000;

export const GetProducts = () => {
  return new Promise<IResponseProducts>(async (resolve, reject) => {
    const ENDPOINT = PRODUCTS;
    try {
      const RESPONSE = await Connector.GET(ENDPOINT, {
        timeout: TIMEOUT,
      });
      resolve(RESPONSE.data);
    } catch (error) {
      console.log('ERROR get products', error);
      reject(error);
    }
  });
};

export const GetDetailsProduct = (id: Number) => {
  return new Promise<IResponseDetailsProduct>(async (resolve, reject) => {
    const ENDPOINT = PRODUCT_DETAIL;
    try {
      const RESPONSE = await Connector.GET(ENDPOINT, {
        timeout: TIMEOUT,
        params: {
          idProduct: id,
        },
      });
      resolve(RESPONSE.data);
    } catch (error) {
      console.log('ERROR get products', error);
      reject(error);
    }
  });
};
