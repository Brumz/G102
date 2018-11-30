import React from "react";
import "../App.css";

class Footer extends React.Component {
  render() {
    return (
      <nav className="footer">
        <a className="footerItem">&copy; {this.props.year}</a>
      </nav>
    );
  }
}

export default Footer;
