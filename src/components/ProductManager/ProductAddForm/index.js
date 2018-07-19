import React, { Component } from 'react';

export default class ProductAddForm extends Component {
	render() {
		return (
			<div className="container columns is-mobile is-centered">
				<div className="column is-10 columns is-multiline">
					<div className="field column is-full">
						<label className="label">Product Picture</label>
						<div className="control">
							<input className="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div className="field column is-half">
						<div className="field">
							<label className="label">Name</label>
							<div className="control">
								<input className="input" type="text" placeholder="Name" />
							</div>
						</div>
						<div className="field">
							<label className="label">Price</label>
							<div className="control">
								<input className="input" type="number" min={0} placeholder="Price" />
							</div>
						</div>
						<div className="field">
							<label className="label">Stock</label>
							<div className="control">
								<input className="input" type="number" min={0} placeholder="Stock" />
							</div>
						</div>
					</div>
					<div className="field column is-half is-flex" style={{ flexDirection: 'column' }}>
						<label className="label">Description</label>
						<div className="control is-flex" style={{ flex: 1, paddingBottom: 12 }}>
							<textarea
								className="textarea"
								style={{ height: '100%', resize: 'none' }}
								placeholder="Description"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
