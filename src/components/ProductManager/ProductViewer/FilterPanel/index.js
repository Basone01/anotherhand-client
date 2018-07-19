import React from 'react';
import { withStore } from '../../../../store/index';
import PriceFilter from './PriceFilter';
import NameFilter from './NameFilter';
import TagsFilter from './TagsFilter';
import SizesFilter from './SizesFilter';

const FilterPanel = ({ Product }) => {
	return (
		<div
			className="column box is-marginless is-radiusless is-one-fifth is-narrow"
			style={{ minWidth: 240 }}
		>
			<NameFilter />
			<PriceFilter />
			<TagsFilter />
			<SizesFilter />
		</div>
	);
};

export default withStore(FilterPanel, 'Product');
