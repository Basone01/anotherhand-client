import React from 'react';
import { withStore } from '../../../store';
import Avatar from '../../common/Avatar';
import TextMessage from './text';
import ImageMessage from './image';

const Message = ({ msg, Shop, conversation }) => {
	const isCustomerMessage = msg.sender.id === conversation.customer_id;
	return (
		<div
			className={`has-text-${isCustomerMessage ? 'left' : 'right'} appear-zoom flex-row-center `}
			style={{ flexDirection: !isCustomerMessage && 'row-reverse', flexShrink: 0, marginBottom: 8 }}
		>
			<Avatar
				src={isCustomerMessage ? conversation.profile_pic : Shop.profilePic}
				style={{ margin: '2px 6px' }}
			/>
			{msg.message && msg.message.text && <TextMessage text={msg.message.text} />}
			{msg.postback && msg.postback.title && <TextMessage text={msg.postback.title} />}
			{msg.message && msg.message.attachments && <ImageMessage msg={msg} />}
		</div>
	);
};

export default withStore(Message, 'Shop');
