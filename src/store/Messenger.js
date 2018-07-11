import { observable, action, decorate, computed } from 'mobx';
import { getMessages, getFacebookProfile,sendMessage } from '../lib/api';

class Messenger {
	rootStore;
	conversations = [];
	currentConversationID = null;
	token = '';
	pageId = '';

	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	initFacebookAccessData({ token, pageId }) {
		this.pageId = pageId;
		this.token = token;
	}

	async getMessages() {
		console.log('Fetching Messages');
		try {
			const messages = await getMessages({
				pageId: this.pageId,
				token: this.token
			});
			if (messages.length) {
				this.conversations.replace(messages);
				this.sortConversationByTime();
				if (this.conversations) {
					this.currentConversationID = this.conversations[0].customer_id;
				}
			}

			console.log('Fetch Messages done');
		} catch (error) {
			console.log('Fetch Messages failed');
			console.log(error.message);
		}
	}

	setCurrentConversation = (id) => {
		this.currentConversationID = id;
	};

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

	sendMessage = (message) => {
		sendMessage({
			customer_id: this.currentConversationID,
			token: this.rootStore.ShopStore.token,
			message: message
		});
	};
}
decorate(Messenger, {
	onMessageRecieved: action,
	getMessages: action,
	setCurrentConversation: action,
	conversations: observable,
	currentConversationID: observable,
	timeBasedConversations: computed
});

export default Messenger;
