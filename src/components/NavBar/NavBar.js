import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <nav>
            <div className='nav-wrapper'>
              <div className='col s12'>
                <a href='/' className='brand-logo'>Kaylee Buscemi</a>
              <ul className='right hide-on-med-and-down'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default NavBar;