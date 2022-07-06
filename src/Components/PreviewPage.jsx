import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../app.css";

class PreviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: props.save,
    };
  }

  render() {
    return (
      <div>
        <h1> Preview Page </h1>
        <Link to="/">
          <button> Edit </button>
        </Link>
      </div>
    );
  }
}

export default PreviewPage;
