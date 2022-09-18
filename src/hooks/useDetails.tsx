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

  const saveFavorites = async (product: IProducts) => {
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
    console.log({formatFavorites});
    const findProduct = formatFavorites.find(
      (fProduct: IProducts) => fProduct.id === product.id,
    );
    if (findProduct) {
      showToast('This product is already in favorites.', 'error');
      return;
    }
    formatFavorites.push(product);
    const saveLocal = await localStorage.SET('favorites', formatFavorites);
    console.log({saveLocal});
    showToast('Product added to favorites.', 'success');
  };

  return {
    saveFavorites,
    selectedProduct,
    showLoading,
  };
};

export default useDetails;
