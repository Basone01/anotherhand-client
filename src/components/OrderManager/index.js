import React, { Component, Fragment } from 'react';
import { withStore } from '../../store';
import { computed, decorate } from 'mobx';
import { Observer } from 'mobx-react';

const OrderMenu = [
	'All',
	'Placed',
	'Pending',
	'Paid',
	'Sent'
];

class OrderManager extends Component {
	get filter() {
		return this.props.Order.filter;
	}
	render() {
		return (
			<Fragment>
				<div className="tabs is-centered">
					<ul>
						{OrderMenu.map((menu) => {
							const className = this.filter === menu ? 'is-active' : '';
							return (
								<Observer key={menu}>
									{() => (
										<li className={className}>
											<a>{menu}</a>
										</li>
									)}
								</Observer>
							);
						})}
					</ul>
				</div>
			</Fragment>
		);
	}
}
decorate(OrderManager, {
	filter: computed
});

export default withStore(OrderManager, 'Order');
