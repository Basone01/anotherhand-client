import React, { Component } from 'react';
import Header from './components/Header';
import ContentLayout from './components/ContentLayout';
import Messenger from './components/Messenger/index';

class App extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					minWidth: 420
				}}
			>
				<Header />
				<ContentLayout>
					<Messenger />
				</ContentLayout>
			</div>
		);
	}
}

export default App;
