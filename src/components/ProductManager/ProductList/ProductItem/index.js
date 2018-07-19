import React from 'react';
import styled from 'styled-components';
import Sizes from './Sizes';
import Tags from './Tags';
import Price from './Price';
import ProductButtons from './buttons';
import { withStore } from '../../../../store';

const ProductItemWrapper = styled.div.attrs({
	className: 'columns is-mobile box is-radiusless has-text-weight-semibold'
})`
	align-items:center;
	padding:0.5em 1.5em;
	@media screen and (max-width:480px){
		flex-direction:column;
	}
`;

const ProductImage = styled.img`
	width: 72px;
	height: 72px;
	border-radius: 8px;
	object-fit: contain;
	object-position: center;
`;

export const ProductItem = ({ product, Product }) => {
	const isMarked = Product && Product.markedProductId.includes(product._id);
	return (
		<ProductItemWrapper>
			<div className="column is-narrow box is-marginless">
				<ProductImage src={product.images[0]} alt={product.name} />
			</div>
			<div className="column has-text-left">
				<div className="is-size-6 has-text-weight-bold" style={{ marginBottom: '0.5rem' }}>
					{product.name}
				</div>
				{product.sizes.length ? (
					<Sizes product={product} />
				) : (
					<div style={{ marginBottom: '0.5rem' }}>
						Stock :{' '}
						<span className={`tag ${product.stock ? 'is-success' : 'is-danger'}`}>
							{product.stock}
						</span>
					</div>
				)}
				<Tags product={product} />
			</div>
			<div className="columns column is-narrow" style={{ alignItems: 'center' }}>
				<Price product={product} />
				{Product && (
					<ProductButtons
						isMarked={isMarked}
						product={product}
						onClick={(e) => {
							if (isMarked) {
								Product.markedProductId = Product.markedProductId.filter((p) => p !== product._id);
							}
							else {
								Product.markedProductId.push(product._id);
							}
						}}
					/>
				)}
			</div>
		</ProductItemWrapper>
	);
};

export default withStore(ProductItem, 'Product');
