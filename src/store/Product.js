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
	tagsFilter = { value: [], isActive: true };
	stockFilter = { value: 0, isActive: false };
	sizesFilter = { value: [], isActive: false };
	sortBy = { isDesc: false, field: '' };
	tags = [];
	sortOptions = [
		'name',
		'price',
		'date'
	];

	constructor(rootStore) {
		this.rootStore = rootStore;
		window.productStore = this;
	}

	getAllProducts = async () => {
		console.log('Fetching products');
		try {
			await getAllProducts().then((products) => {
				this.products = products;
				this.addNewTags(products);
			});
			console.log('Fetch products done');
		} catch (error) {
			console.log('Fetch products failed');
		}
	};

	addNewTags(products) {
		products.forEach((product) => {
			product.tags.forEach((tag) => {
				if (!this.tags.includes(tag)) {
					this.tags.push(tag);
				}
			});
		});
	}

	get filteredProducts() {
		let filteredProducts = this.products.slice().filter((product) => {
			if (!product.name.toLowerCase().includes(this.nameFilter.value.toLowerCase())) {
				return false;
			}
			if (
				this.tagsFilter.isActive &&
				this.tagsFilter.value.length > 0 &&
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
		if (this.sortBy.field === 'name' || this.sortBy.field === 'date') {
			filteredProducts.sort(
				(a, b) =>
					this.sortBy.isDesc ? -1 * a.name.localeCompare(b.name) : a.name.localeCompare(b.name)
			);
		}
		else if (this.sortBy.field === 'price') {
			filteredProducts.sort((a, b) => (this.sortBy.isDesc ? b.price - a.price : a.price - b.price));
		}
		window.products = filteredProducts;
		return filteredProducts;
	}

	get remainingTags() {
		return this.tags.filter((tag) => !this.tagsFilter.value.includes(tag));
	}
}
decorate(Product, {
	products: observable,
	tags: observable,
	getAllProducts: action,
	filteredProducts: computed,
	remainingTags: computed,
	priceFilter: observable,
	nameFilter: observable,
	tagsFilter: observable,
	stockFilter: observable,
	sizesFilter: observable,
	sortBy: observable,
	sortOptions: observable
});

export default Product;
