import React from 'react';
import styled from 'styled-components';
import Sizes from './Sizes';
import Tags from './Tags';

const ProductItemWrapper = styled.div.attrs({
	className: 'columns is-mobile box is-radiusless has-text-weight-semibold'
})`
	align-items:center;
	padding:0.5em 1.5em;
`;

const ProductImage = styled.img`
	width: 72px;
	height: 72px;
	border-radius: 8px;
	object-fit: contain;
	object-position: center;
`;

const ProductItem = ({ product }) => {
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
			<div className="column is-narrow">฿ {product.price}</div>
		</ProductItemWrapper>
	);
};

export default ProductItem;
