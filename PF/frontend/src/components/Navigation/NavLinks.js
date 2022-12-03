import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (<ul className="nav-links">
    <li>
      <NavLink to="/studios" exact>Studios</NavLink>
    </li>
    <li>
      <NavLink to="/aaaaa">AAA</NavLink>
    </li>
    <li>
      <NavLink to="/bbbb">BBBB</NavLink>
    </li>
    <li>
      <NavLink to="/CCCC">cccc</NavLink>
    </li>
  </ul>
  );
};

export default NavLinks;