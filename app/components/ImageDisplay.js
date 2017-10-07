import React from 'react';

import '../styles/ChoiceBox.css';

export default class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <div className="imageHolder">
        <h2>{this.props.imageName}</h2>
      </div>
    );
  }
}