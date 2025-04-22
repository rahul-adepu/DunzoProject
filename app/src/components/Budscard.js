import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import './budscard.css'
import { useParams } from 'react-router-dom';
import { fetchProductsByStore } from '../services/api';


function Budscard() {
    const { storeId } = useParams(); // Store ID from URL params
    const [availableProducts, setAvailableProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
    };

    const handleShow = (value) => {
        setShowCart(value);
    };

    useEffect(() => {
        const getAvailableProducts = async () => {
            try {
                const data = await fetchProductsByStore(storeId);
                setAvailableProducts(data);
            } catch (error) {
                console.error("Error fetching available products:", error.message);
            }
        };
        getAvailableProducts();
    }, [storeId]);

    if (availableProducts.length === 0) {
        return <p>No available products for this store.</p>;
    }

    return (
        <div>
            <Header count={cart.length} handleShow={handleShow}></Header>

            {showCart ? (
                <div id='a2'> <CartList cart={cart}></CartList> </div>
            ) : (
                <div className='a3'> <ProductList product={availableProducts} addToCart={addToCart}></ProductList> </div>
            )}
        </div>
    );
}

export default Budscard;