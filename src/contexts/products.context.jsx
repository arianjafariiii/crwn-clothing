import { createContext, useState } from "react";

import PRODUCTS from '../shop_data.json'


export const Productcontext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);

    return(
        <Productcontext.Provider value={products}>{children}</Productcontext.Provider>
    )
}