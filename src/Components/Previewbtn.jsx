import React, { Component } from "react";

import "../app.css";

class Previewbtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: props.previewSate,
      save: props.save,
    };
    this.update = this.update.bind(this);
  }
  update = () => {
    this.componentDidUpdate = () => {
      console.log(this.state.preview);
    };
  };

  render() {
    return <button onClick={this.state.save}>Save</button>;
  }
}

export default Previewbtn;
