import React from 'react';
import { withStore } from '../../../store';

const NameFilter = ({Product}) => {
	return (
		<div className="field">
			<label className="label has-text-left">Name</label>
			<input
				className="input"
				type="text"
				value={Product.nameFilter.value}
				placeholder="Name"
				onChange={(e) => {
					Product.nameFilter.value = e.target.value;
				}}
			/>
		</div>
	);
};

export default withStore(NameFilter, 'Product');
