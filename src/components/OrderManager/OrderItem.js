import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { Observer } from 'mobx-react';

const columnStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center'
};
const columnCenterStyle = {
	...columnStyle,
	alignItems: 'center'
};
const OrderItem = ({ order, history, onCustomerClick, onUpdateClick, onCancelClick }) => {
	const isDisabled = order.status === 'Sent' || order.status === 'Cancelled';
	return (
		<Observer>
			{() => (
				<div className="box is-marginless columns is-tablet">
					<div
						className="column is-2 hoverable"
						style={columnStyle}
						onClick={() => {
							onCustomerClick(order.customer_id);
							history.push('/messenger');
						}}
					>
						<div className="has-text-centered">
							<img
								src={order.customer_profile.profile_pic}
								alt="customer"
								className="img img-rounded"
								style={{ width: 64, height: 64 }}
							/>
						</div>

						<div className="has-text-weight-semibold has-text-centered">
							{order.customer_profile.first_name} {order.customer_profile.last_name}
						</div>
					</div>
					<div
						className="columns column hoverable is-marginless"
						onClick={() => {
							onCustomerClick(order.customer_id);
							history.push('/product');
						}}
					>
						<div className="column is-narrow" style={columnCenterStyle}>
							<img
								src={order.product.images[0]}
								alt="customer"
								className="img box is-paddingless"
								style={{ width: 64, height: 64, boxSizing: 'border-box' }}
							/>
						</div>
						<div className="column " style={columnStyle}>
							<div>
								<span className="has-text-weight-semibold">Product: </span>
								{order.product.name}
							</div>
							<div>
								<span className="has-text-weight-semibold">Price: </span>
								{order.total_price} ฿
							</div>
							<div>
								<span className="has-text-weight-semibold">Created: </span>
								{moment(order.date).format('HH:mm DD-MMM-YYYY')}
							</div>
						</div>
					</div>

					<div className="column  is-narrow has-text-centered" style={columnStyle}>
						<div>
							<span className="has-text-weight-semibold">Status: </span>
							{order.status}
						</div>
						<div>
							<div className="buttons has-addons" style={{ marginTop: 8 }}>
								<a
									disabled={isDisabled}
									className="button is-small is-link is-outlined"
									onClick={() =>
										!isDisabled && onUpdateClick({ _id: order._id, currentStatus: order.status })}
								>
									Update Status
								</a>
								<a
									disabled={isDisabled}
									className="button is-small is-danger is-outlined"
									onClick={() => !isDisabled && onCancelClick({ _id: order._id })}
								>
									Cancel
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</Observer>
	);
};

export default withRouter(OrderItem);
