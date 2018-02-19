import React from 'react';
import { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            /*<nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li> 
                            <Link activeClassName={"active"} to="/">Home</Link> 
                        </li>
                        <li> 
                            <Link to="about-me">About Me</Link> 
                        </li>
                        <li> 
                            <Link to="sample">Sample</Link> 
                        </li>
                        <li> 
                            <Link to="contact-me">Contact Me</Link> 
                        </li>
                    </ul>
                </div>
            </nav>*/
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/">Home</NavItem>
                    <NavItem eventKey={2} href="/about-me">About Me</NavItem>
                    <NavItem eventKey={3} href="/sample">Sample</NavItem>
                    <NavItem eventKey={4} href="/contact-me">Contact Me</NavItem>
                </Nav>
            </Navbar>
        );
    }

}

export default Header;