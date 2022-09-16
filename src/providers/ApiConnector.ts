import axios, {AxiosRequestConfig} from 'axios';

export class ApiConnector {
  GET = (URL: string, options: AxiosRequestConfig) => {
    return axios.get(URL, options);
  };

  POST(URL: string, body: any, options: AxiosRequestConfig) {
    return axios.post(URL, body, options);
  }

  PUT = (URL: string, body: any, options: AxiosRequestConfig) => {
    return axios.put(URL, body, options);
  };

  DELETE = (URL: string, options: AxiosRequestConfig) => {
    return axios.delete(URL, options);
  };

  LOGGER = () => {};
}
