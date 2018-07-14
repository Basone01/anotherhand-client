import React, { Fragment } from 'react';
import { withStore } from '../../../store';
import PriceFilter from './PriceFilter';
import NameFilter from './NameFilter';

const FilterPanel = ({ Product }) => {
	return (
		<div className="column box is-marginless is-radiusless is-one-fifth is-narrow">
			<NameFilter />
			<PriceFilter />
		</div>
	);
};

export default withStore(FilterPanel, 'Product');
