import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav>
                <li> 
                    <Link to="/">Home</Link> 
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
            </nav>
        );
    }

}

export default Header;