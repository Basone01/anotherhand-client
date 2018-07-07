import { observable, action, decorate } from 'mobx';
import { getShopInformation } from '../lib/api';
class Shop {
	name = '';
	pageId = '';
	shopId = '';
	token = '';

	async getShopInformation() {
		console.log('Fetching Shop Information');
		try {
			await getShopInformation().then((res) => {
				const { name, fb_page_id, id, _id, fb_page_token } = res;
				this.name = name;
				this.pageId = fb_page_id;
				this.shopId = _id;
				this.token = fb_page_token;
			});
			console.log('Fetch Shop Information done');
		} catch (error) {
			console.log('Fetch Shop Information failed');
		}
	}
}
decorate(Shop, {
	getShopInformation: action
});

export default new Shop();
