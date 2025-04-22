import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByStore } from "../services/api";

const StoreDetails = () => {
    const { storeId } = useParams(); // Store ID from URL params
    const [availableProducts, setAvailableProducts] = useState([]);

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
        <div style={{ padding: "20px",marginTop:"90px" }}>
            <h1>Available Products</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {availableProducts.map((product) => (
                    <div
                        key={product._id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "10px",
                            textAlign: "center",
                            width: "200px",
                        }}
                    >
                        <img
                            src={product.url}
                            alt={product.name}
                            style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreDetails;
