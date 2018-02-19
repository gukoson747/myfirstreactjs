import React from 'react';
import { Component } from 'react';
import Header from './common/header';
import Body from './common/body';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>
        <header>
          <Header />
        </header>
        <div>
          <Body />
        </div>
      </Grid>
    );
  }
}

export default App;
