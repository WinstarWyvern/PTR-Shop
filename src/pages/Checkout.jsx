import { useState } from 'react';
import { useCart } from '../context/useCart';
import { useAuth } from '../context/useAuth';
import { useOrder } from '../context/useOrder';

function Checkout() {
    const { cartItems, clearCart } = useCart();
    const { user } = useAuth();
    const { createOrder } = useOrder();

    const [formData, setFormData] = useState({
        name: `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim(),
        email: user?.email ?? '',
        phone: '',
        address: '',
        city: ''
    });

    const [orderId, setOrderId] = useState(null);

    const total = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (cartItems.length === 0) {
            return;
        }

        // Membuat order dan menyimpannya melalui OrderContext
        const newOrder = createOrder({
            userId: user.id,
            customer: { ...formData },
            items: cartItems.map((item) => ({
                product: item.product,
                quantity: item.quantity,
                subtotal: item.product.price * item.quantity
            })),
            total
        });

        setOrderId(newOrder.id);
        clearCart();
    }

    if (orderId) {
        return (
            <div>
                <h1>Order Successful!</h1>

                <p>Your order has been placed successfully.</p>
                <p>Order ID: {orderId}</p>

                <p>Thank you for shopping at PTR Shop!</p>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div>
                <h1>Checkout</h1>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Checkout</h1>

            <form onSubmit={handleSubmit}>
                <section>
                    <h2>Shipping Information</h2>

                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="address">Shipping Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </section>

                <section>
                    <h2>Order Summary</h2>

                    {cartItems.map((item) => (
                        <div key={item.product.id}>
                            <h3>{item.product.title}</h3>

                            <p>
                                ${item.product.price.toFixed(2)} ×{' '}
                                {item.quantity}
                            </p>

                            <p>
                                Subtotal: $
                                {(item.product.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}

                    <h2>Total: ${total.toFixed(2)}</h2>
                </section>

                <button type="submit">
                    Place Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;
