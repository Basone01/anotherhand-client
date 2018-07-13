import React from 'react';

const Sizes = ({ product }) => (
	<div>
		<span style={{ marginRight: '0.5em' }}>
			Sizes : {product.size_type && `(${product.size_type})`}
		</span>
		{product.sizes.length > 0 ? (
			<span className="tags is-inline" style={{ alignItems: 'baseline' }}>
				{product.sizes.sort((a, b) => a.size - b.size).map((size) => (
					<span
						className="tag is-marginless"
						style={{
							marginRight: '0.5em',
							opacity: size.stock ? 1 : 0.5
						}}
					>
						{size.size}
					</span>
				))}
			</span>
		) : (
			<span style={{ opacity: 0.5 }}>n/a</span>
		)}
	</div>
);

const Tags = ({ product }) => (
	<div class="tags" style={{ alignItems: 'baseline' }}>
		<span style={{ marginRight: '0.5em' }}>Tags:</span>
		{product.tags.map((tag) => (
			<span key={tag} class="tag has-text-weight-normal  is-marginless">
				{tag}
			</span>
		))}
	</div>
);

const ProductItem = ({ product }) => {
	return (
		<div
			className="columns box is-radiusless has-text-weight-semibold"
			style={{ alignItems: 'center', padding: '0 1em' }}
		>
			<div className="column is-narrow">
				<img
					src={product.images[0]}
					alt={product.name}
					className="img-contain"
					style={{ width: 72, height: 72, borderRadius: 8 }}
				/>
			</div>
			<div className="column has-text-left">
				<div className="is-size-6 has-text-weight-bold">{product.name}</div>
				<div />
				<Sizes product={product} />
				<Tags product={product} />
			</div>
			<div className="column is-narrow">฿ {product.price}</div>
		</div>
	);
};

export default ProductItem;
