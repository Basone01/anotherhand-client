import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withStore } from '../../../store';
import ProductList from './ProductList';
import FilterPanel from './FilterPanel';
import AddIcon from 'react-icons/lib/md/add-circle-outline';
import CheckIcon from 'react-icons/lib/fa/check';

const ProductViewer = ({ Product, history }) => {
	return (
		<Fragment>
			<div
				className="columns is-mobile is-marginless is-paddingless is-radiusless box has-text-centered has-text-weight-semibold"
				style={{ flexShrink: 0 }}
			>
				<div
					className="column is-hidden-mobile box is-marginless is-radiusless is-one-fifth"
					style={{ minWidth: 240 }}
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
				<div
					className="column box is-marginless is-radiusless is-narrow-mobile is-inline-flex"
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						userSelect: 'none'
					}}
					onClick={(e) => (Product.displayMarked = !Product.displayMarked)}
				>
					{Product.displayMarked && <CheckIcon />}
					<span>Marked</span>
				</div>
				<div
					className="column box is-marginless is-radiusless is-narrow-mobile is-inline-flex"
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						cursor: 'pointer',
						userSelect: 'none'
					}}
					onClick={(e) => history.push('/product/add')}
				>
					<AddIcon />
					<span>Add</span>
				</div>
			</div>
			<div
				className="columns is-marginless is-paddingless is-radiusless box has-text-centered flex-grow"
				style={{ flexBasis: 0, minHeight: 0 }}
			>
				<FilterPanel />
				<ProductList />
			</div>
		</Fragment>
	);
};

export default withStore(withRouter(ProductViewer), 'Product');
