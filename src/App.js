import React, { Component } from 'react';
import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import Messenger from './components/Messenger/index';
import { Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<div
				className="flex"
				style={{
					minHeight: '100vh',
					minWidth: 420
				}}
			>
				<Header />
				<ContentLayout>
					<Switch>
						<Route path="/" exact component={() => <span>Overview</span>} />
						<Route path="/messenger" exact component={Messenger} />
						<Route path="/order" exact component={() => <span>Order</span>} />
						<Route path="/product" exact component={() => <span>Product</span>} />
						<Redirect to="/messenger" />
					</Switch>
				</ContentLayout>
			</div>
		);
	}
}

export default App;
