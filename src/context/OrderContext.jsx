import { createContext, useEffect, useState } from 'react';

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    // Simpan orders ke localStorage setiap kali orders berubah
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    // Membuat pesanan baru
    function createOrder(orderData) {
        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toISOString(),
            status: 'Processing',
            ...orderData
        };

        setOrders((currentOrders) => [
            newOrder,
            ...currentOrders
        ]);

        return newOrder;
    }

    return (
        <OrderContext.Provider
            value={{
                orders,
                createOrder
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContext;