import axios from 'axios';
const ENDPOINT = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API : '';
export const getAllProducts = () => axios.get(ENDPOINT + '/api/products').then((res) => res.data);
