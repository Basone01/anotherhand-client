import React, { Component } from 'react';
import Header from './components/layout/Header';
import ContentLayout from './components/layout/ContentLayout';
import Messenger from './components/Messenger/index';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductManager from './components/ProductManager';
import LoadingSpinner from './components/common/LoadingSpinner';
import OrderManager from './components/OrderManager';

class App extends Component {
	render() {
		return (
			<div
				className="flex"
				style={{
					height: '100vh',
					maxHeight: '100vh',
					minWidth: 320,
					flex: '0 0 100vh'
				}}
			>
				<LoadingSpinner />
				<Header />
				<ContentLayout>
					<Switch>
						<Route
							path="/"
							exact
							component={() => <div className="container has-text-centered">Overview</div>}
						/>
						<Route path="/messenger" component={Messenger} />
						<Route path="/order" component={OrderManager} />
						<Route path="/product" component={ProductManager} />
						<Redirect to="/messenger" />
					</Switch>
				</ContentLayout>
			</div>
		);
	}
}

export default App;
