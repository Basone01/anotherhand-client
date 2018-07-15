import React from 'react';

const TextMessage = ({ text }) => {
	return (
		<span className="box has-text-left" style={{ padding: '0.25em 0.5em', whiteSpace: 'pre-wrap' }}>
			{text}
		</span>
	);
};

export default TextMessage;
