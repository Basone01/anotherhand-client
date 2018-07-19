import React from 'react';
import styled from 'styled-components';

const TagsWrapper = styled.div.attrs({
	className: 'tags'
})`
    align-items: baseline;
`;

const TagsLabel = styled.span`
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
`;

const Tag = styled.span.attrs({
	className: 'tag has-text-weight-normal '
})`
    
`;

const Tags = ({ product }) => (
	<TagsWrapper>
		<TagsLabel>Tags:</TagsLabel>
		{product.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
	</TagsWrapper>
);

export default Tags;
