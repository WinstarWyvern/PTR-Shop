import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/productService';
import { useCart } from '../context/useCart';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart } = useCart();

    useEffect(() => {
        getProductById(id)
            .then((product) => {
                setProduct(product);
            });
    }, [id]);

    function handleAddToCart() {
        addToCart(product);
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Detail</h1>

            <p>Product ID: {id}</p>

            <h1>{product.title}</h1>

            <img
                src={product.thumbnail}
                alt={product.title}
            />

            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetail;