import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopLayout from '../layouts/ShopLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ShopLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;