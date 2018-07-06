import { observable, decorate } from 'mobx';
class AppState {
	isSpinnerDisplay = false;
}
decorate(AppState, {
	isSpinnerDisplay: observable
});
export default new AppState();
