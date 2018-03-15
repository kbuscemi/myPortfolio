import React from 'react';
import './NavBar.css'
import { Navbar, NavItem } from 'react-materialize';

const NavBar = () => {
    return (
        <div>
          <Navbar brand='Kaylee Buscemi' right>
            <NavItem href='/'>Home</NavItem>
            <NavItem href='/about'>About</NavItem>
            <NavItem href='/Portfolio'>Portfolio</NavItem>
            <NavItem href='/contact'>Contact</NavItem>
          </Navbar>
        </div>

    )
}

export default NavBar;