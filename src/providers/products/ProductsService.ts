import {Connector, PRODUCTS} from './ProductsConfig';

const TIMEOUT = 60000;

export const GetProducts = () => {
  return new Promise(async (resolve, reject) => {
    const ENDPOINT = PRODUCTS;
    try {
      const RESPONSE = await Connector.GET(ENDPOINT, {
        timeout: TIMEOUT,
      });
      resolve(RESPONSE.data);
    } catch (error) {
      console.log('ERROR login', error);
      reject(error);
    }
  });
};
