import { observable, action, decorate } from 'mobx';
import { getShopInformation } from '../lib/api';
class Shop {
	name = '';
	pageId = '';
	shopId = '';
	token = '';
	profilePic = '';

	async getShopInformation() {
		console.log('Fetching Shop Information');
		try {
			await getShopInformation().then((res) => {
				const { name, fb_page_id, _id, fb_page_token, picture } = res;
				this.name = name;
				this.pageId = fb_page_id;
				this.shopId = _id;
				this.token = fb_page_token;
				this.profilePic = picture;
			});
			console.log('Fetch Shop Information done');
		} catch (error) {
			console.log('Fetch Shop Information failed');
		}
	}
}
decorate(Shop, {
	getShopInformation: action,
	name:observable,
	profilePic:observable
});

export default new Shop();
