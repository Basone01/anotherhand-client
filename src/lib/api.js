import axios from 'axios';
export const getAllProducts = () => axios.get('/api/products').then((res) => res.data);

export const getShopInformation = () =>
	axios.get('/api/shop/' + process.env.REACT_APP_DEV_SHOP_ID).then((res) => res.data);

export const getMessages = ({ pageId, token }) =>
	axios
		.post('/api/conversations/', {
			fb_page_id: pageId,
			fb_page_token: token
		})
		.then((res) => res.data);

export const getFacebookProfile = ({ pageId, token, customer_id }) =>
	axios
		.post('/api/conversation/profile', {
			fb_page_id: pageId,
			fb_page_token: token,
			customer_id: customer_id
		})
		.then((res) => res.data);

export const sendMessage = ({ customer_id, token, message }) =>
	axios.post('/api/conversation/send/message', {
		customer_id: customer_id,
		fb_page_token: token,
		message: message
	});

export const findProductByImage = ({ pageId, imgUrl }) =>
	axios
		.post('/api/products/finder', {
			fb_page_id: pageId,
			imgUrl: imgUrl
		})
		.then((res) => res.data);

export const sendProduct = ({ customer_id, token, products }) =>
	axios.post('/api/conversation/send/product', {
		customer_id: customer_id,
		fb_page_token: token,
		products: products
	});

export const toggleAutoReply = ({ _id }) =>
	axios.patch('/api/shop/autoreply', {
		_id
	});
