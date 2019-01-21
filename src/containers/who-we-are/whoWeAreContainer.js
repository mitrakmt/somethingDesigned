import React, { Component } from 'react'
import WhoWeAreView from 'components/whoWeAre/'
import './whoWeAreContainer.scss'

class WhoWeAreContainer extends Component {
  render() {
    return (
      <div className="whoWeAreContainer" id="whoWeAre">
        <WhoWeAreView />
      </div>
    )
  }
}

export default WhoWeAreContainer
