import React from 'react';
import swal from 'sweetalert2';
import { withStore } from '../../../../store';
import { ImageMessagePopUp } from '../../../../lib/sweetAlert';
const AttachmentMessage = ({ msg, Shop }) => {
	return (
		<div
			className="flex-row box"
			style={{
				flexWrap: 'wrap',
				maxWidth: '60%',
				wordBreak: 'break-word',
				padding: '0.5em'
			}}
		>
			{msg.message.attachments.map((attachment, i, self) => {
				if (attachment.type === 'image') {
					return (
						<img
							key={attachment.payload.url}
							src={attachment.payload.url}
							onClick={(e) => ImageMessagePopUp({ url: attachment.payload.url, Shop: Shop })}
							className="img"
							alt="attachment"
							style={{
								width: self.length > 1 ? 80 : 120
							}}
						/>
					);
				}
				else if (attachment.type === 'template') {
					return (
						<div key={msg.message.mid}>
							{attachment.payload.elements.map((element) => (
								<div key={element.image_url} className="box has-text-centered">
									<div className="has-text-centered">{element.title}</div>
									<img
										style={{ width: self.length > 1 ? 80 : 120 }}
										src={element.image_url}
										alt="Product"
									/>
								</div>
							))}
						</div>
					);
				}
				else {
					return <div key={JSON.stringify(attachment)}>Unknown Attachment Type</div>;
				}
			})}
		</div>
	);
};

export default withStore(AttachmentMessage, 'Shop');
