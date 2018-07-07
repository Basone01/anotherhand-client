import { initalizeSocket } from '../lib/socket';
import AppState from './AppState';
import Product from './Product';
import Messenger from './Messenger';
import Shop from './Shop';

class RootStore {
	AppStateStore = null;
	ProductStore = null;
	ShopStore = null;
	socket = null;
	constructor(AppStateStore, ProductStore, MessengerStore, ShopStore) {
		this.AppStateStore = AppStateStore;
		this.ProductStore = ProductStore;
		this.MessengerStore = MessengerStore;
		this.ShopStore = ShopStore;
		this.initApp();
	}

	async initApp() {
		await this.ShopStore.getShopInformation();
		await this.ProductStore.getAllProducts();
		await this.MessengerStore.initFacebookAccessData({
			pageId: this.ShopStore.pageId,
			token: this.ShopStore.token
		});
		await this.MessengerStore.getMessages();
		this.initSocket();
	}

	initSocket() {
		this.socket = initalizeSocket();
		this.socket.on('msg', this.MessengerStore.onMessageRecieved);
		this.socket.emit('subscribe_shop_event', {
			fb_page_id: 1274274259365681
		});
	}
}

export default new RootStore(AppState, Product, Messenger, Shop);
