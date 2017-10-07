import React from 'react';

// require('../styles/ChoiceBox.css');

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return (
      <div className="footer">
        <h2>Footer</h2>
      </div>
    );
  }
}