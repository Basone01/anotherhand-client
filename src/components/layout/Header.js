import React from 'react';
import Navbar from './Navbar';
import { withRouter, Link } from 'react-router-dom';

const TabLink = ({ to, children, location }) => (
	<li className={`has-text-weight-bold ${location.pathname === to ? 'is-active':' '}`}>
		<Link to={to}>{children}</Link>
	</li>
);

const Header = ({ location }) => {
	return (
		<section className="hero is-link is-small">
			<div className="hero-head">
				<Navbar />
			</div>

			{/* <div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Another Hand</h1>
					<h2 className="subtitle">If 2 isn't enough, let's try 3</h2>
				</div>
			</div> */}
	
			<div className="hero-foot">
				<nav className="tabs is-boxed is-centered">
					<div className="container">
						<ul className="is-center">
							<TabLink to="/" location={location}>
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
