import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductViewer from './ProductViewer';
import ProductAddForm from './ProductAddForm';
export default class ProductManager extends Component {
	render() {
		return (
			<Switch>
				<Route path={`${this.props.match.path}`} exact component={ProductViewer} />
				<Route path={`${this.props.match.path}/add`} component={ProductAddForm} />
			</Switch>
		);
	}
}
