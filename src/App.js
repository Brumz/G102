import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      copyrightyear: 2019
    };
  }
  render() {
    return (
      <div className="body">
        <Header />,
        <Footer year={this.state.copyrightyear} />
      </div>
    );
  }
}

export default App;
