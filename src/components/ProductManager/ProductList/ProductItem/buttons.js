import React from 'react';
import styled from 'styled-components';
import { withStore } from '../../../../store';
import CheckIcon from 'react-icons/lib/fa/check';
const ProductButtons = ({ product, Product }) => {
	const isMarked = Product.markedProductId.includes(product._id);
	return (
		<div className="column is-narrow is-desktop" style={{ width: '10em' }}>
			<a
				className={`button ${isMarked && 'is-success'}`}
				onClick={(e) => {
					if (isMarked) {
						Product.markedProductId = Product.markedProductId.filter((p) => p !== product._id);
					}
					else {
						Product.markedProductId.push(product._id);
					}
				}}
			>
				<span className="icon is-small">
					<CheckIcon />
				</span>
				<span>{isMarked ? 'Marked' : 'Mark'}</span>
			</a>
		</div>
	);
};

export default withStore(ProductButtons, 'Product');
