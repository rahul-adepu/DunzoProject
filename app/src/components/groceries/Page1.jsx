import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page1.css';
import { fetchStores } from '../../services/api';
import PaginationPart from './Paginationpart';
// import PaginationPart from '../Pagination';

function Page1() {
    const [stores, setStores] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const getStores = async () => {
            try {
                const { stores, totalPages } = await fetchStores(currentPage, 4);
                setStores(stores);
                setTotalPages(totalPages);
            } catch (error) {
                console.error("Error fetching stores:", error.message);
            }
        };
        getStores();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div id="mainpage">
                {stores.map((items) => (
                    <div id="store-card" key={items._id}>
                        <div id="page1">
                            <img id="sizing" src={items.img} alt="" />
                            <div id="store-info">
                                <h3>{items.store}</h3>
                                <h5>{items.place}</h5>
                                <p>{items.distance}</p>
                            </div>
                            <button onClick={() => navigate(`/stores/${items._id}`)} id="view-products-btn">
                                View Products
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <PaginationPart
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Page1;
