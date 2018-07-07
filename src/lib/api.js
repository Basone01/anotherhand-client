import axios from 'axios';
const ENDPOINT = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API : '';
export const getAllProducts = () => axios.get(ENDPOINT + '/api/products').then((res) => res.data);

export const getShopInformation = () =>
	axios.get(ENDPOINT + '/api/shop/' + process.env.REACT_APP_DEV_SHOP_ID).then((res) => res.data);

export const getMessages = ({ pageId, token }) =>
	axios
		.post(ENDPOINT + '/api/conversations/', {
			fb_page_id: pageId,
			fb_page_token: token
		})
		.then((res) => res.data);

export const getFacebookProfile = ({ pageId, token, customer_id }) =>
	axios
		.post(ENDPOINT + '/api/conversation/profile', {
			fb_page_id: pageId,
			fb_page_token: token,
			customer_id: customer_id
		})
		.then((res) => res.data);
