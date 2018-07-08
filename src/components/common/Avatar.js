import React from 'react';

const Avatar = ({ size = 24, src = '', style }) => {
	return (
		<img
			src={src}
			alt="avatar"
			className="img img-rounded"
			style={{
				width: size,
				height: size,
				...style
			}}
		/>
	);
};

export default Avatar;
