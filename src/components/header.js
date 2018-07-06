import React from 'react';
import Navbar from './navbar';
const Header = () => {
	return (
		<section className="hero is-primary">
			{/* <!-- Hero head: will stick at the top --> */}
			<div className="hero-head">
				<Navbar />
			</div>

			{/* <!-- Hero content: will be in the middle --> */}
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">Another Hand</h1>
					<h2 className="subtitle">If 2 isn't enough, let's try 3</h2>
				</div>
			</div>

			{/* <!-- Hero footer: will stick at the bottom --> */}
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
