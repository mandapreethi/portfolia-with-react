/*import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/home'>
                    HOME
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                    ABOUT
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                    CONTACT
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar*/

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">M. Preethi</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
