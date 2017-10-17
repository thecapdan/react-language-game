import React from "react";

require("../styles/ChoiceBox.css");

import styles from "../styles/Result.css";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showMessage() {
    let message;
    switch (this.props.result) {
      case "tbd": {
        message = "Choose your answer...";
        break;
      }
      case "correct": {
        message = "CORRECT!!";
        break;
      }
      case "incorrect": {
        message = "INCORRECT";
        break;
      }
    }
    return message;
  }

  render() {
    return (
      <div className="result">
        <div className="message">{this.showMessage()}</div>
        <div className="navButton">
          <a className="button" onClick={this.props.onNextClicked}>Next</a>
        </div>
      </div>
    );
  }
}
