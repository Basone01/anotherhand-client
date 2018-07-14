import React from 'react';
import { withStore } from '../../../store';
import PriceFilter from './PriceFilter';
import NameFilter from './NameFilter';
import TagsFilter from './TagsFilter';

const FilterPanel = ({ Product }) => {
	return (
		<div
			className="column box is-marginless is-radiusless is-one-fifth is-narrow"
			style={{ minWidth: 240 }}
		>
			<NameFilter />
			<PriceFilter />
			<TagsFilter />
		</div>
	);
};

export default withStore(FilterPanel, 'Product');
