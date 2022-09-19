import {useSelector} from 'react-redux';
import {IProducts} from '../models/IProducts';
import LocalStorage from '../providers/LocalStorage';
import Toast from 'react-native-toast-message';
import {useState, useEffect} from 'react';
import {GetDetailsProduct} from '../providers/products/ProductsService';

const useDetails = () => {
  const idProduct = useSelector(
    (store: any) => store.products.idProduct,
  ) as Number;
  const localStorage = new LocalStorage();
  const [selectedProduct, setSelectedProduct] = useState<IProducts>();
  const [showLoading, setShowLoading] = useState(true);

  const showToast = (message: string, type: string) => {
    return Toast.show({
      autoHide: true,
      text1: message,
      type: type,
      visibilityTime: 4000,
    });
  };

  const getDetailsProduct = async () => {
    setShowLoading(false);
    const response = await GetDetailsProduct(idProduct);
    console.log(response);
    setSelectedProduct(response.data);
  };

  useEffect(() => {
    setShowLoading(true);
    getDetailsProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manageFavorites = async (product: IProducts) => {
    const stringFavorites = await localStorage.GET('favorites');
    console.log(stringFavorites);

    if (stringFavorites === 'ERROR') {
      console.log('ERROR IF');
      return;
    }
    if (stringFavorites === 'NO DATA') {
      console.log('NO DATA IF');
      localStorage.SET('favorites', [product]);
    }
    const formatFavorites = JSON.parse(stringFavorites);
    
    const findProduct = formatFavorites.find(
      (fProduct: IProducts) => fProduct.id === product.id,
    );
    if (findProduct) {
      const newFormatFavorites = formatFavorites.filter((item: IProducts) => item.id !== findProduct.id);
      await localStorage.SET('favorites', newFormatFavorites);
      showToast('Product remove from favorites.', 'success');
      return;
    }
    formatFavorites.push(product);
    await localStorage.SET('favorites', formatFavorites);
    showToast('Product added to favorites.', 'success');
  };

  return {
    manageFavorites,
    selectedProduct,
    showLoading,
  };
};

export default useDetails;
