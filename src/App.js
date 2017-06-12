import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Scores. Amazing App. You'll Be Surprised. I Promise. This Copy Is Amazing. Really.</h2>
        </div>
        <ul className="App-intro">
          <li>amazing</li>
          <li>awesome</li>
          <li>terrific</li>
          <li>splendid</li>
        </ul>
      </div>
    );
  }
}

export default App;
