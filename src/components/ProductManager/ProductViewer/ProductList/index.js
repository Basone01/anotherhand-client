import React from 'react';
import ProductItem from './ProductItem';
import { withStore } from '../../../../store';

const ProductList = ({ Product }) => {
	return (
		<div
			className="column box is-marginless is-radiusless columns is-paddingless"
			style={{ flexBasis: 0,minHeight:0 }}
		>
			<div className="styled-scrollbar column is-marginless" style={{ overflowY: 'auto' }}>
				{Product.filteredProducts.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};

export default withStore(ProductList, 'Product');
