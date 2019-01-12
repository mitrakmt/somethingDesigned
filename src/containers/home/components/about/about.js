import React, { Component } from "react";

import "./about.scss";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h1>We Can Turn Something</h1>
        <p>Great</p>
        <div>
          <p>{`The team at Something Designed is packed full of professional miracle workers. Their artistic direction, creative input and thorough attention to detail is invaluable. We came to them with a half-baked idea, and they turned it into a fully baked creative concept! 

The swiftness at which they work is only matched by their creative expertise. They are a privilege to work with and invest themselves in the process—adding pearls of wisdom and thoughtful ideas all along the way. I would trust this team with 
my highest creative priorities. This is one badass group of women, who happen to be badass designers. 

Chip Herter, Director of Syncronization, BUTTER MUSIC AND SOUND `}</p>
        </div>
      </div>
    );
  }
}

export default About;
