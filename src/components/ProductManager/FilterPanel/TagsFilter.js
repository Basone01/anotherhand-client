import React from 'react';
import { withStore } from '../../../store';

const TagsFilter = ({ Product }) => {
	return (
		<div className="field has-text-left">
			<label className="label">Tags</label>

			<div className="select" style={{marginBottom:'0.5rem'}}>
				<select
					defaultValue={null}
					onChange={(e) => {
						if (e.target.value) Product.tagsFilter.value.push(e.target.value);
					}}
				>
					<option value={null}>Tags</option>
					{Product.remainingTags.map((tag) => (
						<option key={tag} value={tag}>
							{tag}
						</option>
					))}
				</select>
			</div>
			{Product.tagsFilter.value.length > 0 && (
				<div className="box tags " style={{padding:"0.5em 1em"}}>
					{Product.tagsFilter.value.map((tag) => (
						<span key={tag} className="tag has-addons is-marginless">
							{tag}
							<button
								className="delete is-small"
								onClick={(e) => {
									Product.tagsFilter.value = Product.tagsFilter.value.filter((t) => t !== tag);
								}}
							/>
						</span>
					))}
				</div>
			)}
		</div>
	);
};

export default withStore(TagsFilter, 'Product');
