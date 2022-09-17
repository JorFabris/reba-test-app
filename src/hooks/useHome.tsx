/* eslint-disable no-return-assign */
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actSelectProduct } from '../actions/ProductsActions';
import { DATA } from '../assets/Data';
import { IProducts } from '../models/IProducts';
import { DETAILS_SCREEN } from '../navigation/Routes';
import LocalStorage from '../providers/LocalStorage';

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

const useHome = ({ navigation }: IProps) => {
  const [products, setProducts] = useState<IProducts[]>(DATA);
  const dispatch = useDispatch();
  const localStorage = new LocalStorage();

  const selectProduct = (product: IProducts) => {
    dispatch(actSelectProduct(product));
    navigation.push(DETAILS_SCREEN);
  };

  useEffect(() => {
    const getLocalProducts = async () => {
      const stringFavorites = await localStorage.GET('favorites');
      if (stringFavorites === 'ERROR') {
        console.log('ERROR IF');
        return;
      }
      if (stringFavorites === 'NO DATA') {
        console.log('NO DATA IF');
      }
      const formatFavorites = JSON.parse(stringFavorites);
      console.log('formatFavorites', formatFavorites);
      products.map( (prod: IProducts) => {
        formatFavorites.forEach((fProd: IProducts) => fProd.id === prod.id ? prod.favorite = true : prod);
      });
    };
    getLocalProducts();
  });

  return {
    products,
    selectProduct,
  };
};

export default useHome;
