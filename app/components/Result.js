import React from "react";

require("../styles/ChoiceBox.css");

import styles from "../styles/Result.css";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  showMessage() {
    let message;
    if (this.props.awaitingAnswer) {
      message = "Choose your answer...";
    } else {
      message = this.props.isCorrect ? "Correct" : "Incorrect";
      message += "... Next Question";
    }

    return message;
  }

  render() {
    return (
      <div className="result">
        <div className="message">
          {this.showMessage()}
        </div>
        <div className="navButton">
          <a className="button">
            Next
          </a>
        </div>
      </div>
    );
  }
}
