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

  componentWillReceiveProps(nextProps) {
    if (nextProps.imageName !== this.props.imageName) {
      this.hideCurtain();
    }
  }

  renderImage(imageName) {
    return <img src={"../images/" + imageName + ".PNG"} />;
  }

  reveal() {
    let counter = 10;
    let countdown = setInterval(
      function() {
        this.updateCountdownCurtain(counter);
        counter--;
        if (counter === 0) {
          clearInterval(countdown);
        }
      }.bind(this),
      1000
    );
  }

  updateCountdownCurtain(number) {
    this.setState({
      unveilImage: true,
      countdownValue: number
    });
  }

  hideCurtain() {
    this.setState({
      unveilImage: false,
      countdownValue: ""
    });
  }

  render() {
    return (
      <div className="imageHolder">
        <div className="image">{this.renderImage(this.props.imageName)}</div>
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
