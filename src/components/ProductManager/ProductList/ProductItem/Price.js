import React from 'react';

const Price = ({ product, className }) => {
	let price;
	if (product.sizes.length) {
		const priceList = product.sizes.map((size) => size.price);
		const min = Math.min(...priceList);
		const max = Math.max(...priceList);
		if (min === max) {
			price = max;
		}
		else {
			price = `${min}-${max}`;
		}
	}
	else {
		price = product.price;
	}
	return <div className={'column is-narrow ' + className}>฿ {price}</div>;
};

export default Price;
