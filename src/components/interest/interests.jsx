import React, { Component } from "react";
import "./interests.scss";
class Interests extends Component {
  state = {};
  render() {
    return (
      <div className="Interests">
        <div className="titles">
          <h3>INTERESTS</h3>
          <h3>REFERENCES</h3>
        </div>
        <div className="descriptions">
          <p>
            Drawing, Painting, Running, Swimming, <br /> Playing Tennis, Reading
            Books, Travelling
          </p>
          <p>Available upon request</p>
        </div>
      </div>
    );
  }
}

export default Interests;
