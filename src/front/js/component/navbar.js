import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<h2 className="navbar-brand mb-0 h1"><i className="fas fa-smile mx-3"></i>A GREAT APP</h2>
				<div className="ml-auto">
					<Link to="/private">
						<button className="btn btn-light mx-2"><i className="fas fa-user"></i></button>
					</Link>
					<Link to="/">
						<button className="btn btn-danger"><i className="fas fa-sign-out-alt"></i></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
