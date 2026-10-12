import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';

function Checkout() {
    const { cartItems } = useCart();
    const { user, isAuthenticated } = useAuth();

    const total = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    return (
        <div>
            <h1>Checkout</h1>

            {isAuthenticated && (
                <div>
                    <h2>Customer Information</h2>
                    <p>Name: {user?.firstName} {user?.lastName}</p>
                    <p>Email: {user?.email}</p>
                </div>
            )}

            <h2>Order Summary</h2>

            {cartItems.map((item) => (
                <div key={item.product.id}>
                    <h3>{item.product.title}</h3>

                    <p>
                        ${item.product.price} × {item.quantity}
                    </p>
                </div>
            ))}

            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    );
}

export default Checkout;