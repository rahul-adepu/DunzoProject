import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchGroceries = () => API.get('/groceries');
export const fetchMeat = () => API.get('/meat');

// Fetch stores with pagination
export const fetchStores = async (page = 1, limit = 4) => {
    const response = await API.get(`/groceries?page=${page}&limit=${limit}`);
    return response.data;
};

// Fetch store details by ID
export const fetchStoreDetails = async (storeId) => {
    const response = await API.get(`/groceries/${storeId}`);
    return response.data;
};

// Fetch products by store ID
export const fetchProductsByStore = async (storeId) => {
    const response = await API.get(`/products/${storeId}`);
    return response.data;
};
