import { observable, decorate, computed, action } from 'mobx';
import { getOrders, updateOrderStatus, cancelOrder } from '../lib/api';
import swal from 'sweetalert2';
class Order {
	rootStore;
	filter = 'All';
	orders = [];
	isLoading = false;
	constructor(rootStore) {
		this.rootStore = rootStore;
	}

	getAllOrders = async () => {
		this.isLoading = true;

		console.log('Fetching orders');
		try {
			await getOrders().then((orders) => {
				this.orders = orders.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
			});
			console.log('Fetch orders done');
		} catch (error) {
			console.log('Fetch orders failed');
		}
		this.isLoading = false;
	};

	get filteredOrders() {
		return this.filter === 'All'
			? this.orders
			: this.orders.filter((order) => order.status === this.filter);
	}

	setFilter = (filter) => {
		this.filter = filter;
	};

	onOrderRecieved = async (order) => {
		console.log(order);
		swal({
			toast: true,
			type: 'info',
			title: 'You Got A New Order',
			position: 'top-end',
			timer: 3000,
			showConfirmButton: false
		});
		this.orders.unshift(order);
	};

	updateOrderStatus = async ({ _id, currentStatus }) => {
		this.isLoading = true;
		try {
			const { data } = await updateOrderStatus({ _id, currentStatus });
			this.updateOrders(data.result);
		} catch (error) {
			console.log(error.message);
		}
		this.isLoading = false;
	};
	cancelOrder = async ({ _id }) => {
		this.isLoading = true;
		try {
			const { data } = await cancelOrder({ _id });
			this.updateOrders(data.result);
		} catch (error) {
			console.log(error.message);
		}
		this.isLoading = false;
	};

	updateOrders = (updatedOrder) => {
		this.orders.replace(
			this.orders.map((order) => {
				if (order._id === updatedOrder._id) {
					return { ...order, status: updatedOrder.status };
				}
				else {
					return order;
				}
			})
		);
	};
}
decorate(Order, {
	filter: observable,
	orders: observable,
	filteredOrders: computed,
	setFilter: action,
	updateOrders: action,
	updateOrderStatus: action,
	cancelOrder: action,
	isLoading: observable
});
export default Order;
