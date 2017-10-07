import React from 'react';

import styles from "../styles/ChoiceBox.css";

export default class ChoiceBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      enabled: true
    };
  }

  setSelected() {
    this.props.onChoiceClicked();
    console.log("WHOOP")
  }

  render() {
    return (
      <div className="ChoiceBox" onClick={this.setSelected.bind(this)}>
        <h2>{this.props.word}</h2>
      </div>
    );
  }
}