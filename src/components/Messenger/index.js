import React, { Fragment } from 'react';
import { withStore } from '../../store/index';
import ChatList from './ChatList';
import ChatBox from './ChatBox';

const Messenger = (props) => {
	return (
		<div className="container columns flex-grow">
			<div
				className="column is-narrow box has-text-centered is-marginless"
				style={{ minWidth: 300 }}
			>
				<ChatList />
			</div>
			<div className="box column flex">
				<ChatBox />
			</div>
		</div>
	);
};

export default withStore(Messenger, 'Messenger');
