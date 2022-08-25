import {createContext, useState} from 'react';
import PRODUCTS from '../shop-data.json'

// actual value to be accessed
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products] = useState(PRODUCTS);
    const value = {products};

    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}