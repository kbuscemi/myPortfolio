import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

const NavBar = () => {
    return (
        <div>
          <nav>
            <div className='nav-wrapper'>
              <div className='col s12'>
                <a href='/' className='brand-logo'>KB</a>
              <ul className='right hide-on-med-and-down'>
                <li>
                  <Link to='/'>HOME</Link>
                </li>
                <li>
                  <Link to='/portfolio'>PORTFOLIO</Link>
                </li>
                <li>
                  <Link to='/about'>ABOUT</Link>
                </li>
              </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBar;