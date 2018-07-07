import React from 'react';
import Navbar from './Navbar';
const Header = () => {
	return (
		<section className="hero is-primary is-small">
			<div className="hero-head">
				<Navbar />
			</div>

			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Another Hand</h1>
					<h2 className="subtitle">If 2 isn't enough, let's try 3</h2>
				</div>
			</div>

			<div className="hero-foot">
				<nav className="tabs is-boxed is-centered">
					<div className="container">
						<ul className="is-center">
							<li>
								<a>Overview</a>
							</li>
							<li className="is-active">
								<a>Messenger</a>
							</li>
							<li>
								<a>Order</a>
							</li>
							<li>
								<a>Product</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Header;
