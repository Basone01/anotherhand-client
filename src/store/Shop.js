import { observable, action, decorate } from 'mobx';
import { getShopInformation, toggleAutoReply } from '../lib/api';
class Shop {
	rootStore;
	name = '';
	pageId = '';
	shopId = '';
	token = '';
	profilePic = '';
	autoReply = false;
	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	async getShopInformation() {
		console.log('Fetching Shop Information');
		try {
			await getShopInformation().then((res) => {
				const { name, fb_page_id, _id, fb_page_token, picture, autoReply } = res;
				this.name = name;
				this.pageId = fb_page_id;
				this.shopId = _id;
				this.token = fb_page_token;
				this.profilePic = picture;
				this.autoReply = autoReply;
			});
			console.log('Fetch Shop Information done');
		} catch (error) {
			console.log('Fetch Shop Information failed');
		}
	}

	toggleAutoReply = async () => {
		const { data: result } = await toggleAutoReply({ _id: this.shopId });
		console.log(result);
		if (result.success) {
			this.autoReply = result.autoReply;
		}
	};
}
decorate(Shop, {
	getShopInformation: action,
	toggleAutoReply: action,
	name: observable,
	profilePic: observable,
	autoReply: observable
});

export default Shop;
