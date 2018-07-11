import React from 'react';
import { withStore } from '../../store/index';
import ChatList from './ChatList';
import ChatBox from './ChatBox';

const Messenger = (props) => {
	return (
		<div className="is-marginless is-radiusless box columns flex-grow">
			<div
				className="column is-narrow box has-text-centered is-marginless styled-scrollbar"
				style={{ minWidth: 320, overflowY: 'scroll' }}
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
