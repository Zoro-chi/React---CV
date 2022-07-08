import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../app.css";

class PreviewPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { previewState } = this.props;
    return (
      <div>
        <h1> Preview Page </h1>

        <Link to="/">
          <button> Edit </button>
        </Link>
        <button
          onClick={() => {
            console.log(previewState);
          }}
        >
          show
        </button>
      </div>
    );
  }
}

export default PreviewPage;
