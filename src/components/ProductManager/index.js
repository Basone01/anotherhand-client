import React, { Fragment } from 'react';
import { withStore } from '../../store';
import ProductList from './ProductList';
import FilterPanel from './FilterPanel';

const ProductManager = ({ Product }) => {
	return (
		<Fragment>
			<div
				className="columns is-mobile is-marginless is-paddingless is-radiusless box has-text-centered has-text-weight-semibold"
				style={{ flexShrink: 0 }}
			>
				<div
					className="column is-hidden-mobile box is-marginless is-radiusless is-one-fifth"
					style={{ flex: '0 1 240px' }}
				>
					Filter
				</div>
				<div className="column columns box is-marginless is-radiusless is-mobile">
					<div className="column is-paddingless is-flex">
						<select
							className="has-text-weight-semibold"
							style={{
								flex: 1,
								alignSelf: 'stretch',
								border: 'none',
								cursor: 'pointer',
								color: '#4a4a4a',
								outline: 'none',
								fontSize: 16
							}}
							value={Product.sortBy.field}
							onChange={(e) => {
								Product.sortBy.field = e.target.value;
							}}
						>
							<option value={''}>Sort By</option>
							{Product.sortOptions.map((option) => (
								<option key={option} value={option}>
									{option[0].toUpperCase() + option.slice(1)}
								</option>
							))}
						</select>
					</div>
					<div
						className="column is-paddingless is-unselectable hoverable"
						onClick={(e) => {
							Product.sortBy.isDesc = !Product.sortBy.isDesc;
						}}
					>
						{Product.sortBy.isDesc ? 'DESC' : 'ASC'}
					</div>
				</div>
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
