/* eslint-disable no-return-assign */
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actSelectProduct} from '../actions/ProductsActions';
import {IProducts} from '../models/IProducts';
import {DETAILS_SCREEN} from '../navigation/Routes';
import LocalStorage from '../providers/LocalStorage';
import {GetProducts} from '../providers/products/ProductsService';
import {actShowLoading} from '../actions/AppActions';

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

const useHome = ({navigation}: IProps) => {
  const [products, setProducts] = useState<IProducts[]>();
  const dispatch = useDispatch();
  const localStorage = new LocalStorage();
  const showLoading = useSelector(
    (store: any) => store.app.selectedProduct,
  ) as boolean;

  const selectProduct = (product: IProducts) => {
    dispatch(actSelectProduct(product));
    navigation.push(DETAILS_SCREEN);
  };

  const getProducts = async () => {
    const data = await GetProducts();
    console.log(data);
    setProducts(data.data);
    getLocalProducts();
  };

  const getLocalProducts = async () => {
    dispatch(actShowLoading(false));
    const stringFavorites = await localStorage.GET('favorites');
    console.log(stringFavorites);

    if (stringFavorites === 'ERROR') {
      return;
    }
    if (stringFavorites === 'NODATA') {
      return;
    }
    const formatFavorites = JSON.parse(stringFavorites);
    console.log('formatFavorites', formatFavorites);
    products!.map((prod: IProducts) => {
      formatFavorites.forEach((fProd: IProducts) =>
        fProd.id === prod.id ? (prod.favorite = true) : prod,
      );
    });
  };

  useEffect(() => {
    dispatch(actShowLoading(true));
    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    showLoading,
    selectProduct,
  };
};

export default useHome;
