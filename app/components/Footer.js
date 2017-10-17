import React from 'react';

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
        <br/>
        <h2>Work in progress....</h2>
      </div>
    );
  }
}