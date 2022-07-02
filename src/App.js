import React, { Component } from "react";
import uniqid from "uniqid";

import "./app.css";
import Header from "./Components/Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Header />;
  }
}

export default App;
