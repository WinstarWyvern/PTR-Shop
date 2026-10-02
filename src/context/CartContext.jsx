import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((currentItems) => [
            ...currentItems,
            product
        ]);
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;