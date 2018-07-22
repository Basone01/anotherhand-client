import { observable, decorate, computed } from 'mobx';
class AppState {
	rootStore;
	isFindingProduct = false;

	constructor(rootStore) {
		this.rootStore = rootStore;
	}
	get isSpinnerDisplay() {
		return this.rootStore.isLoading;
	}
}
decorate(AppState, {
	isSpinnerDisplay: computed
});
export default AppState;
