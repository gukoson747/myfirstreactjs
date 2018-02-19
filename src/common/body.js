import React from 'react';
import {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../pages/home';
import AboutMe from '../pages/about-me';
import Sample from '../pages/sample';
import ContactMe from '../pages/contact-me';
import { Grid } from 'react-bootstrap';

class Body extends Component{
    render(){
        return(
            <Grid>
                <Route exact path="/" component={Home} />
                <Route path="/about-me" component={AboutMe} />
                <Route path="/sample" component={Sample} />
                <Route path="/contact-me" component={ContactMe} />
            </Grid>
        );
    }
}

export default Body;