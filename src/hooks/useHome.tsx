import { useEffect, useState } from "react";
import { DATA } from "../assets/Data";
import { IProducts } from "../models/IProducts";



const useHome = () => {
    const [products, setProducts] = useState<IProducts[]>(DATA);
    useEffect(() => {

    }, [])

    return {
        products
    }
}

export default useHome;