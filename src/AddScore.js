import React, { Component } from 'react';

class AddScore extends Component {

  state = {
    firstTeam: null,
    secondTeam: null,
    firstInput: "",
    secondInput: "",
  }

  onAdd() {
    this.props.onScoreAdd({
      firstTeam: this.state.firstTeam,
      firstTeamScore: this.state.firstInput,
      secondTeam: this.state.secondTeam,
      secondTeamScore: this.state.secondInput,
    })
  }
  onFirstInputChange(event) {
    this.setState({
      firstInput: event.target.value,
    });
  }

  onSecondInputChange(event) {
    this.setState({
      secondInput: event.target.value,
    });
  }

  onFirstTeamChange(event) {
    this.setState({
      firstTeam: event.target.value
    })
  }

  onSecondTeamChange(event) {
    this.setState({
      secondTeam: event.target.value
    })
  }

  render() {
    return (
      <div className="add-score">
        <div className="team">
          <select onChange={this.onFirstTeamChange.bind(this)}>
            {this.props.teams.map(team =>
              <option key={team} value={team}>{team}</option>
            )}
          </select>
          <input type="text" name="team_a" onChange={this.onFirstInputChange.bind(this)} />
        </div>

        <div className="team">
          <select onChange={this.onSecondTeamChange.bind(this)}>
            {this.props.teams.map(team =>
              <option key={team} value={team}>{team}</option>
            )}
          </select>
          <input type="text" name="team_b" onChange={this.onSecondInputChange.bind(this)} />
        </div>
        <button onClick={this.onAdd.bind(this)}>add</button>
      </div>
    )
  }
}

export default AddScore;
