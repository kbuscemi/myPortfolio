import React from 'react';
import './NavBar.css'
import { Navbar, NavItem } from 'react-materialize';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
          <Link to='/portfolio'>Linkortfolio</Link>
          <Navbar brand='Kaylee Buscemi' right>
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/portfolio'>Portfolio</NavItem>
            <NavItem href='/about'>About</NavItem>
          </Navbar>
        </div>

    )
}

export default NavBar;