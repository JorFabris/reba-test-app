import {IProducts} from './IProducts';

export interface IResponseProducts {
  ok: boolean;
  data: IProducts[];
}

export interface IResponseDetailsProduct {
  ok: boolean;
  data: IProducts;
}
