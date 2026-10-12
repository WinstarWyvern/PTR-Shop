import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/productService';
import { useCart } from '../context/useCart';

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { addToCart } = useCart();

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            setError('');
            setProduct(null);

            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    function handleAddToCart() {
        addToCart(product);
    }

    if (loading) {
        return <div>Loading product...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <h1>Product Detail</h1>

            <p>Product ID: {id}</p>

            <h2>{product.title}</h2>

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