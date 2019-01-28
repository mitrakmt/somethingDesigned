import React, { Component } from 'react'
import BusinessWonView from 'components/business-won/businessWonView'
import './businessWonContainer.scss'

class BusinessWonContainer extends Component {
  render() {
    return (
      <div className="businessWonContainer" id="businessWon">
        <BusinessWonView />
      </div>
    )
  }
}

export default BusinessWonContainer
