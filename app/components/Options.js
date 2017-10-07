import React from "react";

import ChoiceBox from "./ChoiceBox";

require("../styles/ChoiceBox.css");

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  choiceSelected() {
    console.log("choice has been made");
  }

  render() {
    return (
      <div className="optionHolder">
        <ChoiceBox onChoiceClicked={this.choiceSelected} word="Choice 1" />
        <ChoiceBox onChoiceClicked={this.choiceSelected} word="Choice 2" />
        <ChoiceBox onChoiceClicked={this.choiceSelected} word="Choice 3" />
      </div>
    );
  }
}
