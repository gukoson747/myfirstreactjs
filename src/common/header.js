import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li> 
                            <Link className="active" activeClassName="active" activeOnlyWhenExact to="/">Home</Link> 
                        </li>
                        <li> 
                            <Link className="active" activeClassName="active" activeOnlyWhenExact to="about-me">About Me</Link> 
                        </li>
                        <li> 
                            <Link className="active" activeClassName="active" activeOnlyWhenExact to="sample">Sample</Link> 
                        </li>
                        <li> 
                            <Link className="active" activeClassName="active" activeOnlyWhenExact to="contact-me">Contact Me</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;