import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.min.css';
import { Provider } from 'mobx-react';
import RootStore from './store';
ReactDOM.render(
	<Provider
		Product={RootStore.ProductStore}
		AppState={RootStore.AppStateStore}
		Messenger={RootStore.MessengerStore}
	>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
