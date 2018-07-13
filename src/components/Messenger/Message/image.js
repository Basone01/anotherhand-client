import React from 'react';

const ImageMessage = ({ msg }) => {
	return (
		<div
			className="flex-row box"
			style={{ flexWrap: 'wrap', maxWidth: 280, wordBreak: 'break-word' }}
		>
			{msg.message.attachments.map((attachment, i, self) => {
				if (attachment.type === 'image') {
					return (
						<img
							key={attachment.payload.url}
							src={attachment.payload.url}
							className="img"
							alt="attachment"
							style={{
								width: self.length > 1 ? 80 : 240,
								height: self.length > 1 ? 80 : 240
							}}
						/>
					);
				}
				else if (attachment.type === 'template') {
					return (
						<div key={attachment.title}>
							<div className="has-text-centered">{attachment.title}</div>
							<img src={attachment.payload.elements[0].image_url} alt="Product" />
						</div>
					);
				}else{
					return ''
				}
			})}
		</div>
	);
};

export default ImageMessage;
