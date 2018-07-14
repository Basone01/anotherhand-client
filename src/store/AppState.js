import { observable, decorate } from 'mobx';
class AppState {
	rootStore;
	isSpinnerDisplay = false;

	constructor(rootStore) {
		this.rootStore=rootStore;
	}
}
decorate(AppState, {
	isSpinnerDisplay: observable
});
export default AppState;
