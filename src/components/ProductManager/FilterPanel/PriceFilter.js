import React from 'react';
import { withStore } from '../../../store';

const PriceFilter = ({ Product }) => {
	return (
		<div className="field">
			<label className="label has-text-left">Price Range</label>
			<div className="field is-horizontal">
				<div className="field-body">
					<div className="field">
						<p className="control">
							<input
								className="input"
								type="number"
								value={Product.priceFilter.value.min || ''}
								placeholder="From"
								min={0}
								onChange={(e) => {
									Product.priceFilter.value.min = e.target.value;
								}}
							/>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<input
								className="input"
								type="number"
								value={Product.priceFilter.value.max || ''}
								placeholder="To"
								min={0}
								onChange={(e) => {
									Product.priceFilter.value.max = e.target.value;
								}}
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withStore(PriceFilter, 'Product');
