import { observable, decorate } from 'mobx';
class AppState {
	rootStore;
	isSpinnerDisplay = false;
	isFindingProduct = false;

	constructor(rootStore) {
		this.rootStore = rootStore;
	}
}
decorate(AppState, {
	isSpinnerDisplay: observable
});
export default AppState;
