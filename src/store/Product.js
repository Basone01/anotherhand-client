import { observable, action, decorate } from 'mobx';
import { getAllProducts } from '../lib/api';
class Product {
	products = [];
	constructor() {
		this.getAllProducts();
	}

	getAllProducts = () => {
		getAllProducts().then((products) => {
			this.products = products;
		});
	};
}
decorate(Product, {
	products: observable,
	getAllProducts: action
});

export default new Product();
