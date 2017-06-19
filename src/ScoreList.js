import React, { Component } from 'react';

class ScoreList extends Component {
  render() {
    return (
      <ul className="ScoreList-teams">
        {this.props.scores.map((score, i) =>
          <li key={i}>
            {score.firstTeam} {score.firstTeamScore} : {score.secondTeamScore} {score.secondTeam}
          </li>
        )}
      </ul>
    )
  }
}

export default ScoreList;
