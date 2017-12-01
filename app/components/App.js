import React from "react";

import ImageDisplay from "./ImageDisplay";
import Options from "./Options";
import Result from "./Result";
import Footer from "./Footer";
import translations from "../data/translations";
import randomArray from "../helper/randomArray";

import styles from "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "spanish", //initial values hardcoded
      subject: "kitchen",
      index: 0,
      currentImage: "spoon",
      options: ["la cuchara", "el cuchillo", "el armario"],
      correctAnswer: "la cuchara",
      result: "tbd"
    };
  }

  selectionMade(index) {
    this.checkAnswer(this.state.options[index]);
  }

  checkAnswer(answer) {
    const newResult =
      answer === this.state.correctAnswer ? "correct" : "incorrect";
    this.setState({
      result: newResult
    });
  }

  getNext() {
    const translationSet = translations[this.state.subject];
    const maxValue = translationSet.length;
    const newOptions = [];

    const randArr = randomArray(maxValue, 3);
    randArr.forEach(i => {
      newOptions.push(translationSet[i][this.state.language]);
    });
    const currentImageIndex = randArr[0];
    this.setState({
      options: newOptions,
      currentImage: translationSet[currentImageIndex].imageName,
      correctAnswer: translationSet[currentImageIndex].spanish,
      result: "tbd"
    });
  }

  render() {
    return (
      <div className="container">
        <div
          className="header"
          style={{ backgroundImage: "url('../images/headerbackground.png')" }}
        >
          <a>Speed Language Game</a>
        </div>
        <div className="leftbar">
          <ImageDisplay
            imageName={this.state.currentImage}
            hideImage={this.state.result === "tbd"}
          />
        </div>

        <div className="rightbartop">
          <Options
            list={this.state.options}
            onOptionSelected={index => this.selectionMade(index)}
          />
        </div>

        <div className="rightbarbottom">
          <Result
            result={this.state.result}
            onNextClicked={this.getNext.bind(this)}
          />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
