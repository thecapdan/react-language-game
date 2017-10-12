import React from "react";

import styles from "../styles/ImageDisplay.css";

export default class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unveilImage: false,
      countdownValue: ""
    };
  }

  renderImage(imageName) {
    return <img src={"../images/" + imageName + ".PNG"} />;
  }

  reveal() {
    let that = this;
    let counter = 10;
    let countdown = setInterval(function(){
      that.updateCountdownCurtain(counter);
      counter--
      if (counter === 0) {
        clearInterval(countdown);
      }
    }, 1000);
  }

  updateCountdownCurtain(number) {
    this.setState({
      unveilImage: true,
      countdownValue: number
    });
  }

  render() {
    return (
      <div className="imageHolder">
        <div className="image">{this.renderImage("spoon")}</div>
        <div
          className={"curtain " + (this.state.unveilImage ? "open" : "")}
          onClick={() => this.reveal()}
        >
          <span className="countdownNumber">{this.state.countdownValue}</span>
          <span
            className={
              "curtainMessage " + (this.state.unveilImage ? "hideMessage" : "")
            }
          >
            REVEAL
          </span>
        </div>
      </div>
    );
  }
}
