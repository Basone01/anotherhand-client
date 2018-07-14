import { initalizeSocket } from '../lib/socket';
import AppStateStore from './AppState';
import ProductStore from './Product';
import MessengerStore from './Messenger';
import ShopStore from './Shop';
import { observer, inject } from 'mobx-react';

class RootStore {
	AppStateStore = null;
	ProductStore = null;
	ShopStore = null;
	socket = null;
	constructor() {
		this.AppStateStore = new AppStateStore(this);
		this.ProductStore = new ProductStore(this);
		this.MessengerStore = new MessengerStore(this);
		this.ShopStore = new ShopStore(this);
		this.initApp();
		window.store = this
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

export default new RootStore();

export const withStore = (component, ...store) => inject(...store)(observer(component));
