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

  onSave = () => {
    this.setState({ saved: !this.state.saved });
    console.log(this.state);
  };

  render() {
    return (
      <button
        className="btn-save"
        // type="button"
        onClick={this.props.save}
      >
        Save
      </button>
    );
  }
}

export default Savebtn;
