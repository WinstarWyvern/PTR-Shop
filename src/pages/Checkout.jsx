import { useCart } from '../context/useCart';

function Checkout() {
    const { cartItems } = useCart();

    const total = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    return (
        <div>
            <h1>Checkout</h1>

            {cartItems.map((item) => (
                <div key={item.product.id}>
                    <h2>{item.product.title}</h2>

                    <p>
                        ${item.product.price} × {item.quantity}
                    </p>
                </div>
            ))}

            <h2>Total: ${total}</h2>
        </div>
    );
}

export default Checkout;