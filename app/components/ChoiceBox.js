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
    //TODO set selected true
  }

  render() {
    return (
      <div className="ChoiceBox" onClick={this.setSelected.bind(this)}>
        <p>{this.props.word}</p>
      </div>
    );
  }
}