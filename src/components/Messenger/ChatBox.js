import React, { Component } from 'react';
import { withStore } from '../../store';
import Avatar from '../common/Avatar';

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
		const { Shop } = this.props;
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
				<div
					className="box has-text-weight-bold has-text-centered flex-grow is-radiusless styled-scrollbar is-marginless"
					style={{ overflowY: 'scroll' }}
				>
					{currentConversation &&
						currentConversation.messaging.map((msg) => {
							const isCustomerMessage = msg.sender.id === currentConversation.customer_id;
							return (
								<div
									key={msg.timestamp}
									className={`has-text-${isCustomerMessage
										? 'left'
										: 'right'} appear-zoom flex-row-center `}
									style={{ flexDirection: !isCustomerMessage && 'row-reverse' }}
								>
									<Avatar
										src={isCustomerMessage ? currentConversation.profile_pic : Shop.profilePic}
										style={{ margin: '2px 6px' }}
									/>
									<span>{msg.message.text || `( This is an Attachment )`}</span>
								</div>
							);
						})}
				</div>

				{currentConversation && (
					<div className="field">
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Enter some message"
								value={message}
								onChange={this.handleInputChage}
								onKeyUp={this.handleEnter}
							/>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export const ChatBoxWithStore = withStore(ChatBox, 'Messenger', 'Shop');

export default ChatBoxWithStore;
