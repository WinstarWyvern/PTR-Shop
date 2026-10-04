import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.product.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.product.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    product,
                    quantity: 1
                }
            ];
        });
    }

    function increaseQuantity(productId) {
        setCartItems((currentItems) => {
            return currentItems.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );
        });
    }

    function decreaseQuantity(productId) {
        setCartItems((currentItems) => {
            const item = currentItems.find(
                (item) => item.product.id === productId
            );

            if (item.quantity === 1) {
                return currentItems.filter(
                    (item) => item.product.id !== productId
                );
            }

            return currentItems.map((item) =>
                item.product.id === productId
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            );
        });
    }

    function removeFromCart(productId) {
        setCartItems((currentItems) => {
            return currentItems.filter((item) => item.product.id !== productId);
        });
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;