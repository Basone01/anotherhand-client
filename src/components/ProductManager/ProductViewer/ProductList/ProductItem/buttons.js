import React from 'react';
import CheckIcon from 'react-icons/lib/fa/check';
const ProductButtons = ({ onClick, isMarked }) => {
	return (
		<div className="column is-narrow is-desktop" style={{ width: '10em' }}>
			<a className={`button ${isMarked && 'is-success'}`} onClick={onClick}>
				<span className="icon is-small">
					<CheckIcon />
				</span>
				<span>{isMarked ? 'Marked' : 'Mark'}</span>
			</a>
		</div>
	);
};

export default ProductButtons;
