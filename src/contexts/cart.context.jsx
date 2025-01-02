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

const removeCartItem = (cartItems, productToRemove) => {
    const existCartItem = cartItems.find((item) => item.id === productToRemove.id);


    if(existCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }


    return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) =>  cartItem.id !== cartItemToClear.id);
    
}

export const CartContext =  createContext({
    isCartOpen: false, 
    setIsCartOpen : () => {},
    CartItem: [],
    addItemToCart: () => {},
    removeItemFromCard: () => {},
    clearItemFromCart: () => {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [cartItems, setCartItems] =useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addItemToCart = (proctToAdd) => {
        setCartItems(addCartItem(cartItems, proctToAdd));
    }

    const removeItemFromCard = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total = total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])
    const value = {isCartOpen, cartItems, clearItemFromCart , addItemToCart, removeItemFromCard, setIsCartOpen, cartCount};
    return <CartContext.Provider value = {value}> {children} </CartContext.Provider>; 
}