import React from "react";

import ChoiceBox from "./ChoiceBox";

require("../styles/ChoiceBox.css");

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  choiceSelected(num) {
    this.props.onOptionSelected(num);
  }

  render() {
    return (
      <div className="optionHolder">
        <ChoiceBox onChoiceClicked={() => this.choiceSelected(0)} word={this.props.list[0]} />
        <ChoiceBox onChoiceClicked={() => this.choiceSelected(1)} word={this.props.list[1]} />
        <ChoiceBox onChoiceClicked={() => this.choiceSelected(2)} word={this.props.list[2]} />
      </div>
    );
  }
}
