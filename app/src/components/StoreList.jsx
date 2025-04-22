import React, { useEffect, useState } from "react";
import { fetchStores } from "../services/api";
import { useNavigate } from "react-router-dom";

const StoreList = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getStores = async () => {
            try {
                const data = await fetchStores();
                setStores(data);
            } catch (error) {
                console.error("Error fetching stores:", error.message);
            }
        };
        getStores();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Stores</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {stores.map((store) => (
                    <div
                        key={store._id}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "10px",
                            textAlign: "center",
                            width: "200px",
                        }}
                    >
                        <img
                            src={store.img}
                            alt={store.store}
                            style={{ width: "100%", height: "150px", objectFit: "cover" }}
                        />
                        <h3>{store.store}</h3>
                        <p>{store.place}</p>
                        <p>{store.distance}</p>
                        <button
                            onClick={() => navigate(`/stores/${store._id}`)}
                            style={{
                                padding: "5px 10px",
                                border: "none",
                                borderRadius: "4px",
                                backgroundColor: "#4caf50",
                                color: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            View Products
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoreList;
