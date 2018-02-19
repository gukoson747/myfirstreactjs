import React from 'react';
import { Component } from 'react';
import Header from './common/header';
import Body from './common/body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div>
          <Body />
        </div>
        
      </div>
    );
  }
}

export default App;
