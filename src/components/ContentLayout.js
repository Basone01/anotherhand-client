import React from 'react';

const ContentLayout = ({ children, style }) => {
	return (
		<section className="section flex flex-grow" style={style}>
			<div className="flex flex-grow">{children}</div>
		</section>
	);
};

export default ContentLayout;
