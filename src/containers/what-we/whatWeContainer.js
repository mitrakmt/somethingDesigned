import React, { Component } from 'react'
import WhatWeView from 'components/what-we/whatWeView'
import './whatWeContainer.scss'

class WhatWeContainer extends Component {
  render() {
    return (
      <div className="whatWeContainer" id="whatWe">
        <WhatWeView />
      </div>
    )
  }
}

export default WhatWeContainer
