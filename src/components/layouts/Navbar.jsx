import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import { useAuth } from '../../context/useAuth';

function Navbar() {
    const { cartItems } = useCart();
    const { user, isAuthenticated, logout } = useAuth();

    const cartCount = cartItems.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    function handleLogout() {
        logout();
    }

    return (
        <nav>
            <div>
                <Link to="/">PTR Shop</Link>
            </div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>

                <Link to="/cart">
                    Cart ({cartCount})
                </Link>

                {isAuthenticated ? (
                    <>
                        <span>
                            Hi, {user?.username}
                        </span>

                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;