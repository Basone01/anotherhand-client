import React from 'react';
import Navbar from './Navbar';
import { withRouter, Link } from 'react-router-dom';

const TabLink = ({ to, children, location, exact }) => {
	const isMatch = exact ? location.pathname === to : location.pathname.startsWith(to);
	return (
		<li className={`has-text-weight-bold ${isMatch && 'is-active'}`}>
			<Link to={to}>{children}</Link>
		</li>
	);
};

const Header = ({ location, ...rest }) => {
	return (
		<section className="hero is-link is-small">
			<div className="hero-head">
				<Navbar />
			</div>

			<div className="hero-foot">
				<nav className="tabs is-boxed is-centered">
					<div className="container">
						<ul className="is-center">
							<TabLink to="/" exact location={location}>
								Overview
							</TabLink>
							<TabLink to="/messenger" location={location}>
								Messenger
							</TabLink>
							<TabLink to="/order" location={location}>
								Order
							</TabLink>
							<TabLink to="/product" location={location}>
								Product
							</TabLink>
						</ul>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default withRouter(Header);
