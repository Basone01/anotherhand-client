import React from 'react';
import styled from 'styled-components';

const SizesWrapper = styled.div`
	margin-bottom: 0.5em;
	max-width: 24em;
`;

const SizeItemWrapper = styled.span.attrs({
	className: 'tags has-addons is-inline-block'
})`
    margin-right:0.5em;
    margin-bottom:0!important;
`;

const Size = styled.span.attrs({
	className: 'tag is-marginless is-light'
})``;

const Stock = styled.span.attrs({
	className: (props) => `tag is-marginless ${props.stock > 0 ? 'is-success' : 'is-danger'}`
})``;

const SizeItem = ({size}) => (
	<SizeItemWrapper>
		<Size>{size.size}</Size>
		<Stock stock={size.stock}>{size.stock}</Stock>
	</SizeItemWrapper>
);

const Sizes = ({ product }) => (
	<SizesWrapper>
		<span style={{ marginRight: '0.5em' }}>
			Sizes : {product.size_type && `(${product.size_type})`}
		</span>
		{product.sizes
			.slice()
			.sort((a, b) => a.size - b.size)
			.map((size) => <SizeItem key={size.size} size={size} />)}
	</SizesWrapper>
);

export default Sizes;
