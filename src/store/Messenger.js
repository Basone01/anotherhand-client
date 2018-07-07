import { observable, action, decorate, computed } from 'mobx';
import { getMessages, getFacebookProfile } from '../lib/api';
class Messenger {
	conversations = [];
	currentConversationID = null;
	token = '';
	pageId = '';

	initFacebookAccessData({ token, pageId }) {
		this.pageId = pageId;
		this.token = token;
	}

	async getMessages() {
		console.log('Fetching Messages');
		try {
			await getMessages({
				pageId: this.pageId,
				token: this.token
			}).then((res) => {
				this.conversations.replace(res);
			});
			this.sortConversationByTime();

			console.log('Fetch Messages done');
		} catch (error) {
			console.log('Fetch Messages failed');
		}
	}

	sortConversationByTime() {
		this.conversations.replace(this.conversations.slice().sort((a, b) => b.time - a.time));
	}

	onMessageRecieved = async (message) => {
		let exist = false;
		this.conversations.forEach((conversation) => {
			if (conversation.customer_id === message.customer_id) {
				exist = true;
				const messaging = message.messaging || [];
				conversation.time = message.time;
				conversation.messaging.push(...messaging);
			}
		});
		if (!exist) {
			const profile = await getFacebookProfile({
				customer_id: message.customer_id,
				pageId: this.pageId,
				token: this.token
			});
			this.conversations.unshift({ ...profile, ...message });
		}
		this.sortConversationByTime();
	};
	get timeBasedConversations() {
		return this.conversations;
	}
}
decorate(Messenger, {
	onMessageRecieved: action,
	getMessages: action,
	conversations: observable,
	currentConversationID: observable,
	timeBasedConversations: computed
});

export default new Messenger();
