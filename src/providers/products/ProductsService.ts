import {IResponseProducts} from '../../models/IResponseApi';
import {Connector, PRODUCTS} from './ProductsConfig';

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
