import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopLayout from '../layouts/ShopLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRoutes() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />

                        <Route element={<ShopLayout />}>
                            <Route path="/" element={<Home />} />

                            <Route
                                path="/products"
                                element={<Products />}
                            />

                            <Route
                                path="/products/:id"
                                element={<ProductDetail />}
                            />

                            <Route
                                path="/cart"
                                element={<Cart />}
                            />

                            <Route element={<ProtectedRoute />}>
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default AppRoutes;