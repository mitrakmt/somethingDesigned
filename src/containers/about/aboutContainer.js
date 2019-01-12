import React, { Component } from "react";
import AboutView from 'components/about/aboutView'
import "./aboutContainer.scss";

class AboutContainer extends Component {
  render() {
    return (
      <div className="aboutContainer" id="about">
        <AboutView />
      </div>
    );
  }
}

export default AboutContainer;
