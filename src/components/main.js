import React from 'react';
import { observer, inject } from 'mobx-react';

const renderLastMessage = (conversation) => {
	const lastMessaging = conversation.messaging[conversation.messaging.length - 1];
	const lastMessage = lastMessaging.message
		? lastMessaging.message.text
		: lastMessaging.postback.title;
	return lastMessage;
};

const Main = ({ style, Messenger }) => {
	return (
		<section className="section" style={style}>
			<div className="container">
				<div className="columns">
					<div className="box column is-narrow has-text-centered is-marginless">
						{Messenger.conversations.map((conversation) => (
							<div className="box is-marginless is-radiusless" key={conversation.customer_id}>
								<div>
									{conversation.first_name} {conversation.last_name}
								</div>
								<div>{renderLastMessage(conversation)}</div>
							</div>
						))}
					</div>
					<div className="box column">sdsad</div>
				</div>
			</div>
		</section>
	);
};

export default inject('Messenger')(observer(Main));
