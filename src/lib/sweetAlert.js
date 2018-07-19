import swal from 'sweetalert2';
import React from 'react';
import withReactContent from 'sweetalert2-react-content';
import { findProductByImage, sendProduct } from './api';
import { ProductItem } from '../components/ProductManager/ProductList/ProductItem';

const ReactSwal = withReactContent(swal);

export const ImageMessagePopUp = ({ url, Shop, conversationID }) =>
	swal({
		imageUrl: url,
		imageAlt: 'attachment',
		imageClass: 'img-popup',
		confirmButtonClass: 'button is-link is-medium',
		confirmButtonText: 'Find This Product',
		cancelButtonText: 'Close',
		cancelButtonClass: 'button is-medium',
		showCancelButton: true,
		buttonsStyling: false,
		showLoaderOnConfirm: true,
		preConfirm: (result) => {
			return findProductByImage({ imgUrl: url, shopId: Shop.shopId });
		}
	}).then(({ value: result, dismiss }) => {
		if (dismiss) {
			return;
		}
		if (result.isFound) {
			console.log(result);
			const { product } = result;
			const { name, images, _id } = product;
			ReactSwal.fire({
				title: 'Found!!',
				html: <ProductItem product={product} />,
				confirmButtonText: 'Send',
				buttonsStyling: false,
				confirmButtonClass: 'button is-link is-medium',
				cancelButtonText: 'Close',
				cancelButtonClass: 'button is-medium',
				showCancelButton: true
			}).then(({ value, dismiss }) => {
				if (value) {
					return sendProduct({
						customer_id: Shop.rootStore.MessengerStore.currentConversationID,
						token: Shop.token,
						products: [
							_id
						]
					});
				}
			});
		}
		else {
			swal({
				title: 'Not Found!!',
				buttonsStyling: false,
				confirmButtonClass: 'button is-link is-medium',
				confirmButtonText: 'Close'
			});
		}
	});
