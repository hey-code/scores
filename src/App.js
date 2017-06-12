import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";

class App extends Component {
  constructor(){
    super();
    this.state = {
      teamsList : ['amazing', 'awesome', 'terrific', 'splendid']
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Scores. Amazing App. You'll Be Surprised. I Promise. This Copy Is Amazing. Really.</h2>
        </div>
        <List data = {this.state.teamsList}/>
      </div>
    );
  }
}

export default App;
