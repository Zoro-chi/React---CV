import React, { Component } from "react";

import "../app.css";

class Savebtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave = (e) => {
    console.log(e);
    this.setState({ saved: !this.state.saved });
  };

  render() {
    return (
      <button className="btn-save" onClick={this.onSave}>
        Save
      </button>
    );
  }
}

export default Savebtn;
