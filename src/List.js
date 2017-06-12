import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="list-teams">
        {this.props.data.map(team =>
          <li>{team}</li>
        )}
      </ul>
    )
  }
}

export default List;