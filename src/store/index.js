import { initalizeSocket } from '../lib/socket';
import AppState from './AppState';
import Product from './Product';
import Messenger from './Messenger';
class RootStore {
	AppStateStore = null;
	ProductStore = null;
	socket = null;
	constructor(AppStateStore, ProductStore, MessengerStore) {
		this.AppStateStore = AppStateStore;
		this.ProductStore = ProductStore;
		this.MessengerStore = MessengerStore;
		this.socket = initalizeSocket();
		this.socket.on('msg', this.MessengerStore.onMessageRecieved);
		this.socket.emit('subscribe_shop_event', {
			fb_page_id: 1274274259365681
		});
	}
}

export default new RootStore(AppState, Product, Messenger);
