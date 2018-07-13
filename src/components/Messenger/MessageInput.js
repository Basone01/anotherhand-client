import React from 'react';

const MessageInput = ({ value, onChange, onKeyUp }) => {
	return (
		<div className="field">
			<div className="control">
				<input
					className="input"
					type="text"
					placeholder="Enter some message"
					value={value}
					onChange={onChange}
					onKeyUp={onKeyUp}
				/>
			</div>
		</div>
	);
};

export default MessageInput;
