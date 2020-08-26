import React, { Component } from "react";
import "./education.scss";

class Education extends Component {
  state = {};
  render() {
    return (
      <div className="education_languages">
        <div className="title">
          <h3>EDUCATION</h3>
          <h3>LANGUAGES</h3>
        </div>
        <div className="descriptions">
          <div className="education">
            <ul>
              <li>
                <p className="university">EMILY CARR UNIVERSITY</p>
                <p>3rd Rhino </p>
                <p>2013-2013</p>
              </li>
              <li>
                <p className="university">EMILY CARR UNIVERSITY</p>
                <p>Design Essentials</p>
                <p>2009 - 2013</p>
              </li>
            </ul>
            <ul>
              <li>
                <p className="university">BCIT COLLEGE</p>
                <p>Design Essentials</p>
                <p>2008 - 2009</p>
              </li>
              <li>
                <p className="university">
                  ART & ARCHITECHTURE AZAD UNIVERSITY OF TEHRAN
                </p>
                <p>Fine Arts</p>
                <p>2000 - 2004</p>
              </li>
            </ul>
          </div>
          <div className="languages">
            <p>ENGLISH</p>
            <p>FARSI</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
