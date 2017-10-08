import React from "react";

import ChoiceBox from "./ChoiceBox";

require("../styles/ChoiceBox.css");

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceList : [ "la cuchara", "el tenedor", "el cuchillo"]
    };
  }

  choiceSelected() {
    console.log("choice has been made");
  }

  render() {
    return (
      <div className="optionHolder">
        <ChoiceBox onChoiceClicked={this.choiceSelected} word={this.state.choiceList[0]} />
        <ChoiceBox onChoiceClicked={this.choiceSelected} word={this.state.choiceList[1]} />
        <ChoiceBox onChoiceClicked={this.choiceSelected} word={this.state.choiceList[2]} />
      </div>
    );
  }
}
