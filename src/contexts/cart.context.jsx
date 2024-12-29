import { createContext, useEffect, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";
 

const addCartItem = (cartItems, productToAdd) => {

     const existCartItem = cartItems.find((item) => item.id === productToAdd.id);

     if(existCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem )
     }

     return [...cartItems, { ...productToAdd, quantity: 1}]

}

export const CartContext =  createContext({
    isCartOpen: false, 
    setIsCartOpen : () => {},
    CartItem: [],
    addItemToCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] =useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addItemToCart = (proctToAdd) => {
        setCartItems(addCartItem(cartItems, proctToAdd));
    }


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    const value = {isCartOpen, cartItems, addItemToCart, setIsCartOpen, cartCount};
    return <CartContext.Provider value = {value}> {children} </CartContext.Provider>; 
}