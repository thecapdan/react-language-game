import React from 'react';

import styles from '../styles/ImageDisplay.css';

export default class ImageDisplay extends React.Component {
  renderImage(imageName) {
    return (
      <div>
        <img src={"../images/" + imageName + ".PNG"} />
      </div>
    );
  }
  render() {
    return (
      <div className="imageHolder">
        {this.renderImage(this.props.imageName)}
      </div>
    );
  }
}