import React from 'react';
import { observer, inject } from 'mobx-react';

const renderLastMessage = (conversation, pageId) => {
	const lastMessaging = conversation.messaging[conversation.messaging.length - 1];
	const lastMessage = lastMessaging.message
		? lastMessaging.message.text
		: lastMessaging.postback.title;
	return `${lastMessaging.sender.id === pageId && '> '}${lastMessage.length > 20
		? lastMessage.slice(0, 20) + '...'
		: lastMessage}`;
};
export default inject('Messenger')(
	observer(({ Messenger }) => {
		return (
			<div className="container columns flex-grow">
				<div
					className="box column is-narrow has-text-centered is-marginless"
					style={{ minWidth: 300 }}
				>
					{Messenger.timeBasedConversations.map((conversation) => (
						<div className="box is-marginless is-radiusless" key={conversation.customer_id}>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<img
									src={conversation.profile_pic}
									alt=""
									style={{
										objectFit: 'cover',
										objectPosition: 'center',
										width: 48,
										height: 48,
										borderRadius: '50%',
										marginRight: '1em'
									}}
								/>
								<span>
									<div className="has-text-weight-bold">
										{conversation.first_name} {conversation.last_name}
									</div>
									<div className="has-text-left">
										{renderLastMessage(conversation, Messenger.pageId)}
									</div>
								</span>
							</div>
						</div>
					))}
				</div>
				<div className="box column">sdsad</div>
			</div>
		);
	})
);
