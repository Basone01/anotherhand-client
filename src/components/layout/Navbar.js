import React, { Component } from 'react';
import { withStore } from '../../store/index';
import onClickOutside from 'react-onclickoutside';
const Logo = ({ children, onToggle }) => (
	<div className="navbar-brand">
		<a className="navbar-item has-text-weight-bold">{children}</a>
		<a
			role="button"
			className="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			onClick={onToggle}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>
);

class Navbar extends Component {
	state = {
		isActive: false
	};

	onToggle = () => {
		this.setState((state, props) => {
			return { isActive: !state.isActive };
		});
	};

	handleClickOutside = (evt) => {
		this.setState((state, props) => {
			return { isActive: false };
		});
	};

	render() {
		const { Shop } = this.props;
		const { isActive } = this.state;
		return (
			<nav className="navbar is-link" aria-label="main navigation">
				<Logo onToggle={this.onToggle}>AnotherHand</Logo>
				<div className={`navbar-menu ${isActive && 'is-active'}`}>
					<div className="navbar-start">
						<a className="navbar-item">Messages</a>
					</div>
					<div className="navbar-end">
						<a className="navbar-item has-text-weight-bold">
							{Shop.profilePic && (
								<img
									src={Shop.profilePic}
									alt=""
									className="img img-rounded"
									style={{
										width: 24,
										height: 24,
										marginRight: '0.5rem',
										padding: 2,
										backgroundColor: 'white'
									}}
								/>
							)}
							{Shop.name ? Shop.name : 'Login'}
						</a>
					</div>
				</div>
			</nav>
		);
	}
}
export default withStore(onClickOutside(Navbar), 'Shop');
