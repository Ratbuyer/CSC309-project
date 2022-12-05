import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (<ul className="nav-links">
    <li>
      <NavLink to="/studios">Studios</NavLink>
    </li>
    <li>
      <NavLink to="/accounts">Profile</NavLink>
    </li>
  </ul>
  );
};

export default NavLinks;