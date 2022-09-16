import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {DATA} from '../assets/Data';
import {IProducts} from '../models/IProducts';

const useHome = () => {
  const [products, setProducts] = useState<IProducts[]>(DATA);
  const dispatch = useDispatch();

  const selectProduct = () => {
    dispatch();
  };

  useEffect(() => {}, []);

  return {
    products,
    selectProduct,
  };
};

export default useHome;
