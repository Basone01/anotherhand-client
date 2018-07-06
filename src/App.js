import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
class App extends Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh'
				}}
			>
				<Header />
				<Main style={{ flexGrow: 1 }} />
			</div>
		);
	}
}

export default App;
