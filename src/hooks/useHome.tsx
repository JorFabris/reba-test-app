import { StackNavigationProp } from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {actSelectProduct} from '../actions/ProductsActions';
import {DATA} from '../assets/Data';
import {IProducts} from '../models/IProducts';
import { DETAILS_SCREEN } from '../navigation/Routes';

interface IProps{
  navigation: StackNavigationProp<any, any>;
}

const useHome = ({navigation}: IProps) => {
  const [products, setProducts] = useState<IProducts[]>(DATA);
  const dispatch = useDispatch();

  const selectProduct = (product: IProducts) => {
    dispatch(actSelectProduct(product));
    navigation.push(DETAILS_SCREEN);
  };

  useEffect(() => {}, []);

  return {
    products,
    selectProduct,
  };
};

export default useHome;
