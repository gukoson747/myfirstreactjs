import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav pull-right">
                            <li> 
                                <NavLink exact activeClassName={"active"} to="/">Home</NavLink> 
                            </li>
                            <li> 
                                <NavLink exact activeClassName={"active"} to="/about-me">About Me</NavLink> 
                            </li>
                            <li> 
                                <NavLink exact activeClassName={"active"} to="/sample">Sample</NavLink> 
                            </li>
                            <li> 
                                <NavLink exact activeClassName={"active"} to="/contact-me">Contact Me</NavLink> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;