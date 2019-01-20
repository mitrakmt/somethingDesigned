import React, { Component } from 'react'
import Method from 'components/method/methodView'

import './methodContainer.scss'

class MethodContainer extends Component {
  render() {
    return (
      <div className="methodContainer" id="method">
        <Method />
      </div>
    )
  }
}

export default MethodContainer
