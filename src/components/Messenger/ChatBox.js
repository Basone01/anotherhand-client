import React, { Component } from 'react';
import { withStore } from '../../store';
import Avatar from '../common/Avatar';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

class ChatBox extends Component {
	state = {
		message: ''
	};

	handleInputChage = (e) => {
		this.setState({
			message: e.target.value
		});
	};

	handleEnter = (e) => {
		if (e.keyCode === 13) {
			this.props.Messenger.sendMessage(this.state.message);
			this.setState({ message: '' });
		}
	};

	getCurrentConversation = () => {
		const { Messenger } = this.props;
		let Title = '';
		let currentConversation = null;
		if (!Messenger.currentConversationID) {
			Title = 'No Conversation Selected';
		}
		else {
			currentConversation = Messenger.conversations.find(
				(con) => con.customer_id === Messenger.currentConversationID
			);

			Title =
				currentConversation &&
				`${currentConversation.first_name}  ${currentConversation.last_name}`;
		}
		return { Title, currentConversation };
	};

	render() {
		const { message } = this.state;
		const { Title = '', currentConversation = null } = this.getCurrentConversation();

		return (
			<div className="flex flex-grow">
				<div className="box  is-marginless is-radiusless flex-center-all">
					{currentConversation && (
						<Avatar src={currentConversation.profile_pic} style={{ marginRight: 8 }} />
					)}
					<span className="has-text-weight-bold">{Title}</span>
				</div>

				{currentConversation && <MessageList conversation={currentConversation} />}
				{currentConversation && (
					<MessageInput
						value={message}
						onChange={this.handleInputChage}
						onKeyUp={this.handleEnter}
					/>
				)}
			</div>
		);
	}
}

export const ChatBoxWithStore = withStore(ChatBox, 'Messenger');

export default ChatBoxWithStore;
