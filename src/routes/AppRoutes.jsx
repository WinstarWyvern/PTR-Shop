import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopLayout from '../layouts/ShopLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ShopLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:id"
                        element={<ProductDetail />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;