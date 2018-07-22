import { initalizeSocket } from '../lib/socket';
import AppStateStore from './AppState';
import ProductStore from './Product';
import MessengerStore from './Messenger';
import ShopStore from './Shop';
import OrderStore from './Order';
import { observer, inject } from 'mobx-react';
import { observable, decorate, computed } from 'mobx';

class RootStore {
	AppStateStore = null;
	ProductStore = null;
	MessengerStore = null;
	ShopStore = null;
	OrderStore = null;
	socket = null;
	isInitialized = false;
	constructor() {
		this.AppStateStore = new AppStateStore(this);
		this.ProductStore = new ProductStore(this);
		this.MessengerStore = new MessengerStore(this);
		this.ShopStore = new ShopStore(this);
		this.OrderStore = new OrderStore(this);
		this.initApp();
		window.store = this;
	}

	async initApp() {
		await this.ShopStore.getShopInformation();
		await this.ProductStore.getAllProducts();
		await this.MessengerStore.initFacebookAccessData({
			pageId: this.ShopStore.pageId,
			token: this.ShopStore.token
		});
		await this.MessengerStore.getMessages();
		await this.OrderStore.getAllOrders();
		this.initSocket();
		this.isInitialized = true;
	}

	initSocket() {
		this.socket = initalizeSocket();
		this.socket.on('msg', this.MessengerStore.onMessageRecieved);
		this.socket.on('order', this.OrderStore.onOrderRecieved);

		this.socket.emit('subscribe_shop_event', {
			fb_page_id: 1274274259365681
		});
	}
	get isLoading() {
		return (
			!this.isInitialized ||
			this.OrderStore.isLoading ||
			this.ShopStore.isLoading ||
			this.ProductStore.isLoading ||
			this.MessengerStore.isLoading
		);
	}
}

decorate(RootStore, {
	isLoading: computed,
	isInitialized: observable
});

export default new RootStore();

export const withStore = (component, ...store) => inject(...store)(observer(component));
