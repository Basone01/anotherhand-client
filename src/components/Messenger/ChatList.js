import React, { Fragment } from 'react';
import { withStore } from '../../store';
import Avatar from '../common/Avatar';
const renderLastMessage = (conversation, pageId) => {
	const lastMessaging = conversation.messaging[conversation.messaging.length - 1];
	let lastMessage = '';
	if (lastMessaging.message) {
		if (lastMessaging.message.postback) {
			lastMessage = lastMessaging.postback.title;
		}
		else if (lastMessaging.message.attachments) {
			lastMessage = 'An attachment';
		}
		else {
			lastMessage = lastMessaging.message.text;
		}
	}
	else {
		lastMessage = 'no msg';
	}
	if (lastMessaging.sender.id === pageId) {
		lastMessage = '> ' + lastMessage;
	}
	return lastMessage;
};

export const ChatList = ({ Messenger }) => (
	<Fragment>
		{Messenger.timeBasedConversations.map((conversation) => (
			<div
				className={`box is-marginless is-radiusless hoverable ${conversation.customer_id ===
					Messenger.currentConversationID && 'has-background-white-ter'}`}
				key={conversation.customer_id}
				onClick={() => Messenger.setCurrentConversation(conversation.customer_id)}
			>
				<div className="flex-row-center">
					<Avatar size={48} src={conversation.profile_pic} style={{ marginRight: '1em' }} />
					<span>
						<div className="has-text-weight-bold">
							{conversation.first_name} {conversation.last_name}
						</div>
						<div className="has-text-left">{renderLastMessage(conversation, Messenger.pageId)}</div>
					</span>
				</div>
			</div>
		))}
	</Fragment>
);

export const ChatListWithStore = withStore(ChatList, 'Messenger');

export default ChatListWithStore;
