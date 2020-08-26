import React, { Component } from "react";
import "./social.scss";
class Social extends Component {
  state = {};
  render() {
    return (
      <div className="Social_links">
        <h3>LINKS</h3>
        <div className="list_social_links">
          <div className="social_link">
            <h4 className="logo_social">Be</h4>
            <p>http://www.behance.net</p>
          </div>
          <div className="social_link">
            <h4 className="logo_social">in</h4>
            <p>http://www.behance.net</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
