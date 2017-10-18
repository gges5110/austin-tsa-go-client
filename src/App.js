import React, { Component } from 'react';
import Nav from './modules/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
