import React, { Component } from "react";
import "./work_experience.scss";
class WorkExperinces extends Component {
  state = {};
  render() {
    return (
      <div className="work_experiences">
        <div className="titles">
          <h3>WORK EXPERIENCES</h3>
          <h3>SOME CLIENTS</h3>
        </div>
        <div className="descriptions">
          <div className="experiences">
            <ul>
              <li>
                <p>PRESSED METAL</p>
                <p>PRODUCTS</p>
                <p> Graphic | Industrial Designer</p>
                <p>2013 - Present</p>
              </li>
              <li>
                <p>OP PUBLISHING</p>
                <p>Graphic | Layout Designer</p>
                <p>2008 - 2009</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>ABSOLUTE CREATIVE</p>
                <p>MARKET</p>
                <p>Graphic Designer</p>
                <p>2008 - 2013</p>
              </li>
              <li>
                <p>CREATIVE ENGINE</p>
                <p>Graphic Designer</p>
                <p>2008 - 2008</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>WHOLE FOODS</p>
                <p>MARKET</p>
                <p>Graphic Artist | Store Designer</p>
                <p>2008 - 2009</p>
              </li>
            </ul>
          </div>
          <div className="clients">
            <p>LE PETIT CHOU</p>
            <p>UBC</p>
            <p>METAMORPHOUS</p>
            <p>CARLA TAYLOR</p>
            <p>IL VENTO</p>
            <p>MARINE VIEW</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperinces;
