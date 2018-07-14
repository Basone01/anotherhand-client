import React, { Fragment } from 'react';
import { withStore } from '../../store';
import ProductList from './ProductList';
import FilterPanel from './FilterPanel';

const ProductManager = ({ Product }) => {
	return (
		<Fragment>
			<div className="columns is-marginless is-paddingless is-radiusless box has-text-centered">
				<div className="column box is-marginless is-radiusless is-one-fifth">Filter</div>
				<div className="column box is-marginless is-radiusless ">Sort</div>
				<div className="column box is-marginless is-radiusless ">Search</div>
				<div className="column box is-marginless is-radiusless ">Add Product</div>
			</div>
			<div
				className="columns is-marginless is-paddingless is-radiusless box has-text-centered flex-grow"
				style={{ flexBasis: 0 }}
			>
				<FilterPanel />
				<ProductList />
			</div>
		</Fragment>
	);
};

export default withStore(ProductManager, 'Product');
