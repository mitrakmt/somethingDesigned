import React, { Component } from 'react'
import Connect from 'components/connect/connectView'

import './connectContainer.scss'

class ConnectContainer extends Component {
  render() {
    return (
      <div className="connectContainer" id="connect">
        <Connect />
      </div>
    )
  }
}

export default ConnectContainer
