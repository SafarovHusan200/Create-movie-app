import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="main-foot">
          <a href="#!">
            <img
              src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png"
              alt=""
            />
          </a>
        </div>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} Copyright Reserved</h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
