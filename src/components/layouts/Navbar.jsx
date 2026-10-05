import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';

function Navbar() {
    const { cartItems } = useCart();

    const cartCount = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <nav>
            <div>
                PTR Shop
            </div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>

                <Link to="/cart">
                    Cart ({cartCount})
                </Link>

                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;