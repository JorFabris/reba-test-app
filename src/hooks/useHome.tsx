import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {actSelectProduct} from '../actions/ProductsActions';
import {IProducts} from '../models/IProducts';
import {DETAILS_SCREEN} from '../navigation/Routes';
import LocalStorage from '../providers/LocalStorage';
import {GetProducts} from '../providers/products/ProductsService';

interface IProps {
  navigation: StackNavigationProp<any, any>;
}

const useHome = ({navigation}: IProps) => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const dispatch = useDispatch();
  const localStorage = new LocalStorage();
  const [showLoading, setShowLoading] = useState(true);

  const selectProduct = (product: IProducts) => {
    dispatch(actSelectProduct(product.id));
    navigation.push(DETAILS_SCREEN);
  };

  const getProducts = async () => {
    const response = await GetProducts();
    parseProducts(response.data);
  };

  const parseProducts = async (productsResponse: IProducts[]) => {
    setShowLoading(false);
    const stringFavorites = await localStorage.GET('favorites');

    if (stringFavorites === 'ERROR') {
      return;
    }
    if (stringFavorites === 'NODATA') {
      return;
    }
    const formatFavorites = JSON.parse(stringFavorites);

    productsResponse.map(prod => {
      formatFavorites.map((fProd: IProducts) => {
        if (prod.id === fProd.id){
          prod.favorite = true;
        }
      });
    });

    setProducts(productsResponse);
  };

const fetchData = () => {
  setShowLoading(true);
  getProducts();
};

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    showLoading,
    fetchData,
    selectProduct,
  };
};

export default useHome;
