import React from 'react';
import './NavBar.css'
import { Navbar, NavItem } from 'react-materialize';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          {/* <ul className='hide-on-med-and-down'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
          </ul> */}
          {/* <Navbar brand='Kaylee Buscemi' right>
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/portfolio'>Portfolio</NavItem>
            <NavItem href='/about'>About</NavItem>
          </Navbar> */}

          <nav>
            <div class='nav-wrapper'>
              <div class='col s12'>
                <a href='/' class='brand-logo'>Kaylee Buscemi</a>
              <ul class='right hide-on-med-and-down'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
              </ul>
              </div>
            </div>
          </nav>

        </div>

    )
}

export default NavBar;