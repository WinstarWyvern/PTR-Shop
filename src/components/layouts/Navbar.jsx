import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div>
                PTR Shop
            </div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;