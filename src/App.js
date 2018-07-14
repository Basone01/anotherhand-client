import React, { Component } from 'react';
import Header from './components/layout/Header';
import ContentLayout from './components/layout/ContentLayout';
import Messenger from './components/Messenger/index';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductManager from './components/ProductManager';
class App extends Component {
	render() {
		return (
			<div
				className="flex"
				style={{
					height: '100vh',
					minWidth: 420
				}}
			>
				<Header />
				<ContentLayout>
					<Switch>
						<Route
							path="/"
							exact
							component={() => <div className="container has-text-centered">Overview</div>}
						/>
						<Route path="/messenger" exact component={Messenger} />
						<Route
							path="/order"
							exact
							component={() => <div className="container has-text-centered">Order</div>}
						/>
						<Route
							path="/product"
							exact
							component={ProductManager}
						/>
						<Redirect to="/messenger" />
					</Switch>
				</ContentLayout>
			</div>
		);
	}
}

export default App;
