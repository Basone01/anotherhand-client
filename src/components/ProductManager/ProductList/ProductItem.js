import React from 'react';

const Sizes = ({ product }) => (
	<div style={{ marginBottom: '0.5em',maxWidth:'24em'}}>
		<span style={{ marginRight: '0.5em' }}>
			Sizes : {product.size_type && `(${product.size_type})`}
		</span>

		<span>
			{product.sizes.slice().sort((a, b) => a.size - b.size).map((size) => (
				<span
					key={size.size}
					className="tags has-addons is-inline"
					style={{
						marginRight: '0.5em'
					}}
				>
					<span className="tag is-marginless is-light">{size.size}</span>
					<span className={`tag is-marginless ${size.stock ? 'is-success' : 'is-danger'}`}>
						{size.stock}
					</span>
				</span>
			))}
		</span>
	</div>
);

const Tags = ({ product }) => (
	<div className="tags" style={{ alignItems: 'baseline' }}>
		<span style={{ marginRight: '0.5em', marginBottom: '0.5rem' }}>Tags:</span>
		{product.tags.map((tag) => (
			<span key={tag} className="tag has-text-weight-normal ">
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
			<div className="column is-narrow box is-marginless">
				<img
					src={product.images[0]}
					alt={product.name}
					className="img-contain"
					style={{ width: 72, height: 72, borderRadius: 8 }}
				/>
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
						<span className={`tag ${product.stock ? 'is-light' : 'is-danger'}`}>{product.stock}</span>
					</div>
				)}
				<Tags product={product} />
			</div>
			<div className="column is-narrow">฿ {product.price}</div>
		</div>
	);
};

export default ProductItem;
