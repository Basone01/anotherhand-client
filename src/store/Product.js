import { observable, action, decorate, computed } from 'mobx';
import { getAllProducts } from '../lib/api';

const hasSizes = (product) => product.sizes.length > 0;
const getTotalStock = (product) => product.sizes.reduce((stock, size) => size.stock + stock, 0);
const isOutOfStock = (product) => {
	if (hasSizes(product)) {
		if (getTotalStock(product) < 1) {
			return true;
		}
	}
	else {
		if (product.stock < 1) {
			return true;
		}
	}
	return false;
};

class Product {
	rootStore;
	products = [];
	markedProductId = [];
	displayMarked = false;
	priceFilter = {
		value: {
			min: 0,
			max: 0
		},
		isActive: true
	};
	nameFilter = { value: '', isActive: true };
	tagsFilter = { value: [], isActive: true };
	stockFilter = { value: 0, isActive: false };
	sizesFilter = { value: [], isActive: true };
	sortBy = { isDesc: false, field: '' };
	tags = [];
	sizes = [];
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
				this.addNewSizes(products);
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
		this.tags.replace(this.tags.slice().sort());
	}

	addNewSizes(products) {
		products.forEach((product) => {
			product.sizes.forEach((size) => {
				if (!this.sizes.includes(size.size)) {
					this.sizes.push(size.size);
				}
			});
		});
		this.sizes.replace(this.sizes.slice().sort());
	}

	get markedProducts() {
		return this.products.slice().filter((p) => this.markedProductId.includes(p._id));
	}

	get filteredProducts() {
		if (this.displayMarked) {
			return this.markedProducts;
		}
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
				if (hasSizes(product)) {
					const isInPriceRange = product.sizes.reduce(
						(isInRange, size) =>
							isInRange ||
							(size.price >= this.priceFilter.value.min &&
								(size.price <= this.priceFilter.value.max || !this.priceFilter.value.max)),
						false
					);
					if (!isInPriceRange) {
						return false;
					}
				}
				else if (
					!(
						product.price >= this.priceFilter.value.min &&
						(product.price <= this.priceFilter.value.max || !this.priceFilter.value.max)
					)
				) {
					return false;
				}
			}
			if (this.stockFilter.isActive && isOutOfStock(product)) {
				return false;
			}
			return true;
		});
		if (this.sortBy.field === 'name' || this.sortBy.field === 'date') {
			filteredProducts.sort(
				(a, b) => (this.sortBy.isDesc ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name))
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
	get remainingSizes() {
		return this.sizes.filter((size) => !this.sizesFilter.value.includes(size));
	}
}
decorate(Product, {
	products: observable,
	sizes: observable,
	tags: observable,
	getAllProducts: action,
	filteredProducts: computed,
	markedProducts: computed,
	remainingTags: computed,
	remainingSizes: computed,
	priceFilter: observable,
	nameFilter: observable,
	sizesFilter: observable,
	tagsFilter: observable,
	stockFilter: observable,
	sizesFilter: observable,
	sortBy: observable,
	sortOptions: observable,
	markedProductId: observable,
	displayMarked: observable
});

export default Product;
