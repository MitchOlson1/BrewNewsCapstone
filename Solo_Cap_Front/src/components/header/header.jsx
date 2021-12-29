import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import axios from 'axios';
import { Navbar, Nav, Dropdown, NavItem, NavLink, NavbarBrand, NavDropdown } from 'react-bootstrap';




function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.warn(user)
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Link to='/login' > User Login </Link>
                </Navbar>
                <Nav>
                    <NavDropdown title="User Name" >
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </NavDropdown>

                </Nav>
            </div>
    );
}

export default Header;

           
                 
                 
                
               

            