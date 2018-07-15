import React, { Component } from 'react';
import Message from './Message';
class MessageList extends Component {
	constructor(props) {
		super(props);
		this.scrollBox = React.createRef();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const scrollBox = this.scrollBox.current;
		scrollBox.scrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
	}

	componentDidMount() {
		const scrollBox = this.scrollBox.current;
		scrollBox.scrollTop = scrollBox.scrollHeight - scrollBox.clientHeight;
	}

	render() {
		const { conversation } = this.props;
		return (
			<div
				className="box has-text-weight-bold has-text-centered flex-grow is-radiusless is-marginless is-paddingless flex"
				style={{ minHeight: 0, maxHeight: '75vh' }}
			>
				<div
					ref={this.scrollBox}
					className=" styled-scrollbar"
					style={{ overflowY: 'auto', padding: 12 }}
				>
					{conversation &&
						conversation.messaging.map((msg) => (
							<Message key={msg.timestamp} conversation={conversation} msg={msg} />
						))}
				</div>
			</div>
		);
	}
}

export default MessageList;
