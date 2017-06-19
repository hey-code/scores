import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import AddScore from "./AddScore";

class App extends Component {
  constructor(){
    super();
    this.state = {
      teamsList: ['amazing', 'awesome', 'terrific', 'splendid'],
      scores: []
    }
  }

  onScoreAdd(newScore) {
    console.log("add", newScore);
    this.setState({
      scores: [...this.state.scores, newScore]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Scores. Amazing App. You'll Be Surprised. I Promise. This Copy Is Amazing. Really.</h2>
        </div>
        <List data={this.state.teamsList} />
        <AddScore teams={this.state.teamsList} onScoreAdd={this.onScoreAdd.bind(this)} />
      </div>
    );
  }
}

export default App;
