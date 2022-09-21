import React from "react";

export const Navbar = () => {
	return (
		<header>
			<nav className="border fixed split-nav">
				<div className="nav-brand">
					<h3>Connect 4</h3>
				</div>
				<div className="collapsible">
					<input id="collapsible1" type="checkbox" name="collapsible1" />
					<label htmlFor="collapsible1">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</label>
					<div className="collapsible-body">
						<ul className="inline">
							<li><a href="miasalazar.com">Portfolio</a></li>
							<li><a href="https://github.com/Mia-Salazar/connect-4">Github</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;