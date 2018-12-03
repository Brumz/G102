import React, { Component } from "react";
import "../App.css";

class StudentList extends Component {
  render() {
    const students = this.props.students.map(i => {
      return <li>{i.name}</li>;
    });
    return <div className="list">{students}</div>;
  }
}

export default StudentList;
