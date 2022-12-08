import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/studios">STUDIOS</NavLink>
			</li>
			<li>
				<NavLink to="/profile">PROFILE</NavLink>
			</li>
			<li>
				<NavLink to="/login">LOGIN</NavLink>
			</li>
			<li>
				<NavLink to="/signup">LOGOUT</NavLink>
			</li>
		</ul>
	);
};

export default NavLinks;
