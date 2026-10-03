import { useCart } from '../context/useCart';

function Cart() {
    const { cartItems } = useCart();

    return (
        <div>
            <h1>Shopping Cart</h1>

            {cartItems.map((item) => (
                <div key={item.product.id}>
                    <h2>{item.product.title}</h2>
                    <p>Price: ${item.product.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;