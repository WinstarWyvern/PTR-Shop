import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';

function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useCart();

    const total = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div>
                    <h2>Your cart is empty</h2>

                    <Link to="/products">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.product.id}>
                            <h2>{item.product.title}</h2>

                            <p>${item.product.price}</p>

                            <button
                                onClick={() =>
                                    decreaseQuantity(item.product.id)
                                }
                            >
                                -
                            </button>

                            <span>{item.quantity}</span>

                            <button
                                onClick={() =>
                                    increaseQuantity(item.product.id)
                                }
                            >
                                +
                            </button>

                            <button
                                onClick={() =>
                                    removeFromCart(item.product.id)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <h2>Total: ${total}</h2>

                    <Link to="/checkout">
                        Checkout
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;