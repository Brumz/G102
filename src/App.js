import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import StudentList from "./components/studentList.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      copyrightyear: 2019,
      students: []
    };
  }

  async componentDidMount() {
    let response = await fetch("https://g102-db.herokuapp.com/");
    let myJson = await response.json();
    this.setState({
      students: myJson
    });
  }

  render() {
    return (
      <div className="body">
        <Header />
        <StudentList students={this.state.students} />
        <Footer year={this.state.copyrightyear} />
      </div>
    );
  }
}

export default App;
