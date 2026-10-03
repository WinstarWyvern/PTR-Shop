import { useCart } from '../context/useCart';

function Cart() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    return (
        <div>
            <h1>Shopping Cart</h1>

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
                </div>
            ))}
        </div>
    );
}

export default Cart;