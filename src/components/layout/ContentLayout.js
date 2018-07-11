import React from 'react';

const ContentLayout = ({ children, style }) => {
	return (
		<section className="section flex flex-grow is-paddingless" style={style}>
			<div className="flex flex-grow" style={{ flexBasis: 0 }}>
				{children}
			</div>
		</section>
	);
};

export default ContentLayout;
