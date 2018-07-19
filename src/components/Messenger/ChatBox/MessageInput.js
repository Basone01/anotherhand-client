import React from 'react';
import { withStore } from '../../../store';

const MessageInput = ({ value, onChange, onKeyUp, onSend, onSendProduct }) => {
	return (
		<div className="field has-addons">
			<div className="control is-expanded">
				<input
					className="input is-info"
					type="text"
					placeholder="Enter some message"
					value={value}
					onChange={onChange}
					onKeyUp={onKeyUp}
				/>
			</div>
			<div className="control">
				<a className="button is-info is-outlined" onClick={onSend}>
					Send
				</a>
			</div>

			<div className="control">
				<div className="dropdown is-hoverable is-up is-right ">
					<div className="dropdown-trigger">
						<button
							className="button is-info is-outlined"
							aria-haspopup="true"
							aria-controls="dropdown-menu4"
						>
							<span>Menu</span>
						</button>
					</div>
					<div className="dropdown-menu" role="menu">
						<div className="dropdown-content has-text-centered">
							<a className="dropdown-item" onClick={onSendProduct}>
								Send All Marked
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withStore(MessageInput, 'Product');
