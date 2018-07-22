import React, { Component, Fragment } from 'react';
import { withStore } from '../../store';
import { computed, decorate } from 'mobx';
import { Observer } from 'mobx-react';
import OrderItem from './OrderItem';
const OrderMenu = [
	'All',
	'Placed',
	'Pending',
	'Paid',
	'Sent',
	'Cancelled'
];

class OrderManager extends Component {
	get filter() {
		return this.props.Order.filter;
	}

	get orders() {
		return this.props.Order.filteredOrders;
	}

	handleCustomerClick = (customerId) => {
		this.props.Messenger.setCurrentConversation(customerId);
	};

	handleUpdateOrder = ({ _id, currentStatus }) => {
		this.props.Order.updateOrderStatus({ _id, currentStatus });
	};

	handleCancelOrder = ({ _id }) => {
		this.props.Order.cancelOrder({ _id });
	};

	render() {
		return (
			<Fragment>
				<div className="tabs is-centered is-marginless" style={{ flexShrink: 0, minHeight: 0 }}>
					<ul>
						{OrderMenu.map((menu) => {
							const className = this.filter === menu ? 'is-active' : '';
							return (
								<Observer key={menu}>
									{() => (
										<li className={className} onClick={() => this.props.Order.setFilter(menu)}>
											<a>{menu}</a>
										</li>
									)}
								</Observer>
							);
						})}
					</ul>
				</div>

				<div className="container styled-scrollbar" style={{ overflowY: 'auto' }}>
					<div style={{ margin: '0.5em 0.25em' }}>
						{this.orders.map((order) => (
							<OrderItem
								key={order._id}
								order={order}
								onCustomerClick={this.handleCustomerClick}
								onUpdateClick={this.handleUpdateOrder}
								onCancelClick={this.handleCancelOrder}
							/>
						))}
					</div>
				</div>
			</Fragment>
		);
	}
}
decorate(OrderManager, {
	filter: computed,
	orders: computed
});

export default withStore(OrderManager, 'Order', 'Messenger');
