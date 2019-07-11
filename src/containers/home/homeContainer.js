import React, { Component } from 'react'
import Home1 from 'components/home/homeView1/homeView1'

import './homeContainer.scss'

class HomeContainer extends Component {
  render() {
    return (
      <div className="HomeContainer" id="home">
        <Home1 />
      </div>
    )
  }
}

export default HomeContainer
