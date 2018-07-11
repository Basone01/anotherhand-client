import { observable, action, decorate } from 'mobx';
import { getAllProducts } from '../lib/api';
class Product {
	rootStore;
	products = [];

	constructor(rootStore) {
		this.rootStore=rootStore;
	}

	getAllProducts = async () => {
		console.log('Fetching products');
		try {
			await getAllProducts().then((products) => {
				this.products = products;
			});
			console.log('Fetch products done');
		} catch (error) {
			console.log('Fetch products failed');
		}
	};
}
decorate(Product, {
	products: observable,
	getAllProducts: action
});

export default Product;
