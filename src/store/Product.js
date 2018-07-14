import { observable, action, decorate, computed } from 'mobx';
import { getAllProducts } from '../lib/api';
class Product {
	rootStore;
	products = [];
	priceFilter = {
		value: {
			from: 0,
			to: Infinity
		},
		isActive: true
	};
	nameFilter = { value: '', isActive: true };
	tagsFilter = { value: [], isActive: false };
	stockFilter = { value: 0, isActive: false };
	sizesFilter = { value: [], isActive: false };
	sortBy = { isDesc: false, field: 'id' };

	constructor(rootStore) {
		this.rootStore = rootStore;
		window.productStore = this;
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

	get filteredProducts() {
		const filteredProducts = this.products.slice().filter((product) => {
			if (!product.name.toLowerCase().includes(this.nameFilter.value.toLowerCase())) {
				return false;
			}
			if (
				this.tagsFilter.isActive &&
				!product.tags.some((tag) => this.tagsFilter.value.includes(tag))
			) {
				return false;
			}
			if (this.priceFilter.isActive) {
				if (product.sizes.length) {
					const isInPriceRange = product.sizes.reduce(
						(isInRange, size) =>
							isInRange ||
							(size.price >= this.priceFilter.value.from &&
								(size.price <= this.priceFilter.value.to || !this.priceFilter.value.to)),
						false
					);
					if (!isInPriceRange) {
						return false;
					}
				}
				else if (
					!(
						product.price >= this.priceFilter.value.from &&
						(product.price <= this.priceFilter.value.to || !this.priceFilter.value.to)
					)
				) {
					return false;
				}
			}
			if (this.stockFilter.isActive) {
				if (product.sizes.length) {
					if (product.sizes.reduce((stock, size) => size.stock + stock, 0) < 1) {
						return false;
					}
				}
				else {
					if (product.stock < 1) {
						return false;
					}
				}
			}
			return true;
		});
		window.products = filteredProducts;
		return filteredProducts;
	}
}
decorate(Product, {
	products: observable,
	getAllProducts: action,
	filteredProducts: computed,
	priceFilter: observable,
	nameFilter: observable,
	tagsFilter: observable,
	stockFilter: observable,
	sizesFilter: observable,
	sortBy: observable
});

export default Product;
