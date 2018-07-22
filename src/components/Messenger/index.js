import React from 'react';
import { withStore } from '../../store/index';
import ChatList from './ChatList';
import ChatBox from './ChatBox/index';

const Messenger = (props) => {
	return (
		<div className="is-marginless is-radiusless box columns flex-grow">
			<div
				className="column is-narrow box has-text-centered is-marginless styled-scrollbar"
				style={{
					flexBasis: 320,
					overflowY: 'scroll',
					overflowX: 'hidden'
				}}
			>
				<ChatList />
			</div>
			<div className="box column flex" style={{ minHeight: 0,overflowX: 'hidden' }}>
				<ChatBox />
			</div>
		</div>
	);
};

export default withStore(Messenger, 'Messenger');
