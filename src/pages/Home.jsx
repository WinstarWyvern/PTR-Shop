import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(4)
            .then((products) => {
                setProducts(products);
            });
    }, [])

    return (
        <div>
            {/* Hero */}
            <section className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                            Welcome to our shop
                        </p>

                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Find the products you love
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Discover a wide range of products at great prices.
                            Browse our collection and find something for you.
                        </p>

                        <div className="mt-8">
                            <Link
                                to="/products"
                                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-0">
                        <div className="flex h-64 w-64 items-center justify-center rounded-full bg-blue-100">
                            <span className="text-6xl">🛍️</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Shop by Category
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Explore our popular product categories.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {/* categories */}
                </div>
            </section>

            {/* Featured Products */}
            <section className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                Featured Products
                            </h2>

                            <p className="mt-3 text-gray-600">
                                Check out some of our popular products.
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="hidden font-semibold text-blue-600 hover:text-blue-700 sm:block"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
                            >
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-5">
                                    <h3 className="font-semibold text-gray-900">
                                        {product.title}
                                    </h3>

                                    <p className="mt-2 text-lg font-bold text-blue-600">
                                        ${product.price}
                                    </p>

                                    <Link
                                        to={`/products/${product.id}`}
                                        className="mt-4 block text-sm font-medium text-gray-600 hover:text-blue-600"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;