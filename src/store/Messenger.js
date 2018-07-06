import { observable, action, decorate } from 'mobx';
class Messenger {
	conversations = [];

	onMessageRecieved = (message) => {
		let exist = false;
		this.conversations = this.conversations.map((conversation) => {
			if (conversation.customer_id !== message.customer_id) {
				return conversation;
			}
			else {
				exist = true;
				const local_messaging = conversation.messaging || [];
				const messaging = message.messaging || [];
				return {
					...conversation,
					...message,
					messaging: [
						...local_messaging,
						...messaging
					]
				};
			}
		});
		if (!exist) {
			this.conversations.unshift(message);
		}
	};
}
decorate(Messenger, {
	onMessageRecieved: action,
	conversations:observable
});

export default new Messenger();
