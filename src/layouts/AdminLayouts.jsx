import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

function AdminLayout() {
    return (
        <div>
            <Sidebar />

            <div>
                <Navbar />

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;