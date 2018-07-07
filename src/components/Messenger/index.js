import React from 'react';
import { enhance } from '../../store/index';
const renderLastMessage = (conversation, pageId) => {
	const lastMessaging = conversation.messaging[conversation.messaging.length - 1];
	const lastMessage = lastMessaging.message
		? lastMessaging.message.text
		: lastMessaging.postback.title;
	return `${lastMessaging.sender.id === pageId ? '> ' : ''}${lastMessage.length > 20
		? lastMessage.slice(0, 20) + '...'
		: lastMessage}`;
};

const Messenger = ({ Messenger }) => {
	return (
		<div className="container columns flex-grow">
			<div
				className="box column is-narrow has-text-centered is-marginless"
				style={{ minWidth: 300 }}
			>
				{Messenger.timeBasedConversations.map((conversation) => (
					<div className="box is-marginless is-radiusless" key={conversation.customer_id}>
						<div className="flex-row-center">
							<img
								src={conversation.profile_pic}
								alt=""
								className="img img-rounded"
								style={{
									width: 48,
									height: 48,
									marginRight: '1em'
								}}
							/>
							<span>
								<div className="has-text-weight-bold">
									{conversation.first_name} {conversation.last_name}
								</div>
								<div className="has-text-left ass">
									{renderLastMessage(conversation, Messenger.pageId)}
								</div>
							</span>
						</div>
					</div>
				))}
			</div>
			<div className="box column">Messenger</div>
		</div>
	);
};

export default enhance(Messenger, 'Messenger');
