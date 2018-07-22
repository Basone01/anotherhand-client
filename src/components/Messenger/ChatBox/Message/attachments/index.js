import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import { withRouter } from 'react-router-dom';
import { withStore } from '../../../../../store';
import { ImageMessagePopUp } from '../../../../../lib/sweetAlert';

const ProductAttachment = withRouter(({ product, history, className, style }) => (
	<div
		className={`box has-text-centered is-marginless hoverable ${className}`}
		style={{ ...style, boxSizing: 'border-box' }}
		onClick={(e) => history.push('/product')}
	>
		<div className="has-text-centered">{product.title}</div>
		<img className="img" src={product.image_url} alt="Product" />
	</div>
));

const AttachmentMessage = ({ msg, Shop }) => {
	return (
		<div
			className="flex-row box"
			style={{
				maxWidth: '60%',
				wordBreak: 'break-word',
				padding: '0.5em',
				position: 'relative',
				overflow: 'hidden'
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
					if (attachment.payload.elements.length > 1) {
						return (
							<div key={msg.message.mid} style={{ maxWidth: 240 }}>
								<Swiper
									slidesPerView={1}
									wrapperClass="is-inline-flex"
									slideClass="self-stretch"
									noSwiping={attachment.payload.elements.length <= 1}
									navigation={{
										nextEl: '.swiper-button-next',
										prevEl: '.swiper-button-prev'
									}}
									renderPrevButton={() => (
										<div className="swiper-button-prev" style={{ width: 32, height: 32 }} />
									)}
									renderNextButton={() => (
										<div className="swiper-button-next" style={{ width: 32, height: 32 }} />
									)}
								>
									{attachment.payload.elements.map((element) => (
										<ProductAttachment key={element.image_url} product={element} />
									))}
								</Swiper>
							</div>
						);
					}
					else {
						return (
							<div key={msg.message.mid} style={{ maxWidth: 240 }}>
								{attachment.payload.elements.map((element) => (
									<ProductAttachment key={element.image_url} product={element} />
								))}
							</div>
						);
					}
				}
				else {
					return <div key={JSON.stringify(attachment)}>Unknown Attachment Type</div>;
				}
			})}
		</div>
	);
};

export default withStore(AttachmentMessage, 'Shop');
