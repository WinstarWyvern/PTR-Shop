import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useEffect, useState } from 'react';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((product) => {
                setProduct(product);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>

            <img
                src={product.thumbnail}
                alt={product.title}
            />

            <p>{product.description}</p>

            <p>${product.price}</p>

            <p>Category: {product.category}</p>

            <p>Rating: {product.rating}</p>
        </div>
    );
}

export default ProductDetail;