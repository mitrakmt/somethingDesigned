import React, { Component } from 'react'
import PinkTheme from 'components/pink-theme/pinkTheme'
import './whatWeContainer.scss'

class WhatWeContainer extends Component {
  description = `WE’RE DESIGNERS & COPYWRITERS WHO ALSO KNOW MARKETING STRATEGY.
  <br /><br />
  OUR SPECIALTIES ARE CREATING STRATEGIC MARKETING MATERIALS, FROM LOGOS TO
  PITCH DECKS TO WEBSITES, AND MORE.
  <br /><br />
  WHETHER YOU HAVE A COMPLETE DRAFT, A ROUGH SKETCH (WE LOVE A GOOD DOODLE),
  OR JUST A REALLY GREAT IDEA, WE CAN HELP YOU DESIGN IT OR WRITE IT, OR
  BOTH.`
  titleWordOne = 'What'
  titleWordTwo = 'We'
  render() {
    return (
      <div className="whatWeContainer" id="whatWe">
        <PinkTheme
          titleWordOne={this.titleWordOne}
          titleWordTwo={this.titleWordTwo}
          description={this.description}
        />
      </div>
    )
  }
}

export default WhatWeContainer
