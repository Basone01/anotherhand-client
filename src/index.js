import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.min.css';
import './styles/helpers.css';
import { Provider } from 'mobx-react';
import RootStore from './store';
ReactDOM.render(
	<Provider
		Product={RootStore.ProductStore}
		AppState={RootStore.AppStateStore}
		Messenger={RootStore.MessengerStore}
		Shop={RootStore.ShopStore}
	>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
