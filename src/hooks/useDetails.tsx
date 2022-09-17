import { useSelector } from 'react-redux';
import { IProducts } from '../models/IProducts';
import LocalStorage from '../providers/LocalStorage';



const useDetails = () => {
    const selectProduct = useSelector((store: any) => store.products.selectedProduct) as IProducts;
    const localStorage = new LocalStorage();
    const saveFavorites = async (product: IProducts) => {
        const stringFavorites = await localStorage.GET('favorites');
        if (stringFavorites === 'ERROR'){
            return;
        }
        if (stringFavorites === 'NO DATA'){
            localStorage.SET('favorites', [product]);
        }
        const formatFavorites = JSON.parse(stringFavorites);
        console.log(formatFavorites);
        formatFavorites.push(product);
        await localStorage.SET('favorites', formatFavorites);
    };

    return {
        selectProduct,
        saveFavorites,
    };
};


export default useDetails;
