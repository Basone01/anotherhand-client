import React from 'react';
import { withStore } from '../../../store';

const SizesFilter = ({ Product }) => {
	return (
		<div className="field has-text-left">
			<label className="label">Sizes</label>

			<div className="select" style={{marginBottom:'0.5rem'}}>
				<select
					defaultValue={null}
					onChange={(e) => {
						if (e.target.value) Product.sizesFilter.value.push(e.target.value);
					}}
				>
					<option value={null}>Sizes</option>
					{Product.remainingSizes.map((size) => (
						<option key={size} value={size}>
							{size}
						</option>
					))}
				</select>
			</div>
			{Product.sizesFilter.value.length > 0 && (
				<div className="box tags" style={{padding:"0.5em 1em"}}>
					{Product.sizesFilter.value.map((size) => (
						<span key={size} className="tag has-addons is-marginless">
							{size}
							<button
								className="delete is-small"
								onClick={(e) => {
									Product.sizesFilter.value = Product.sizesFilter.value.filter((t) => t !== size);
								}}
							/>
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default withStore(SizesFilter, 'Product');
