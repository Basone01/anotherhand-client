import React from 'react';
import { withStore } from '../store/index';
const Logo = ({ children }) => (
	<div className="navbar-brand">
		<a className="navbar-item has-text-weight-bold">{children}</a>
		<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>
);

const Navbar = ({ Shop }) => {
	return (
		<nav className="navbar is-primary" aria-label="main navigation">
			<Logo>AnotherHand</Logo>
			<div className="navbar-menu">
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
};

export default withStore(Navbar, 'Shop');
