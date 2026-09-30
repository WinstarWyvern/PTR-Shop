import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(12)
            .then((products) => {
                setProducts(products);
            });
    }, []);

    return (
        <div>
            <h1>Products</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Products;