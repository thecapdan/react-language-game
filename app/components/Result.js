import React from 'react';

require('../styles/ChoiceBox.css');

//import styles from '../styles/ChoiceBox.css';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <div className="result">
        <h2>Result</h2>
      </div>
    );
  }
}