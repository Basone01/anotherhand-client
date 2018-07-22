import { observable, decorate } from 'mobx';
class Order {
	rootStore;
	filter = 'All';

	constructor(rootStore) {
		this.rootStore = rootStore;
	}
}
decorate(Order, {
	filter: observable
});
export default Order;
