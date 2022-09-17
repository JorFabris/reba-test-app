import { useSelector } from 'react-redux';
import { IProducts } from '../models/IProducts';
import LocalStorage from '../providers/LocalStorage';
import Toast from 'react-native-toast-message';


const useDetails = () => {
    const selectProduct = useSelector((store: any) => store.products.selectedProduct) as IProducts;
    const localStorage = new LocalStorage();

    const showToast = (message: string, type: string) => {
        return Toast.show({
            autoHide: true,
            text1:message,
            type:type,
            visibilityTime: 4000,
        });
    };

    const saveFavorites = async (product: IProducts) => {
        const stringFavorites = await localStorage.GET('favorites');
        if (stringFavorites === 'ERROR'){
            console.log('ERROR IF');
            return;
        }
        if (stringFavorites === 'NO DATA'){
            console.log('NO DATA IF');
            localStorage.SET('favorites', [product]);
        }
        const formatFavorites = JSON.parse(stringFavorites);
        console.log({formatFavorites});
        const findProduct = formatFavorites.find( (fProduct: IProducts) => fProduct.id === product.id );
        if (findProduct){
            showToast('This product is already in favorites.', 'error');
            return;
        }
        formatFavorites.push(product);
        const saveLocal = await localStorage.SET('favorites', formatFavorites);
        console.log({saveLocal});
        showToast('Product added to favorites.', 'success');
    };

    return {
        selectProduct,
        saveFavorites,
    };
};


export default useDetails;
