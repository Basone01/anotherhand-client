import { observable, action, decorate } from 'mobx';
import { getMessages } from '../lib/api';
class Messenger {
	conversations = [];

	async getMessages(pageId, token) {
		console.log('Fetching Messages');
		try {
			await getMessages(pageId, token).then((res) => {
				this.conversations.push(...res);
			});
			console.log('Fetch Messages done');
		} catch (error) {
			console.log('Fetch Messages failed');
		}
	}

	onMessageRecieved = (message) => {
		let exist = false;
		this.conversations.forEach((conversation) => {
			if (conversation.customer_id === message.customer_id) {
				exist = true;
				console.log('FOUND', message);
				const messaging = message.messaging || [];
				conversation.time = message.time;
				conversation.messaging.push(...messaging);
			}
		});
		if (!exist) {
			this.conversations.unshift(message);
		}
	};
}
decorate(Messenger, {
	onMessageRecieved: action,
	getMessages: action,
	conversations: observable
});

export default new Messenger();
