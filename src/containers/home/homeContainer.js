import React, { Component } from 'react'
import Home1 from 'components/home/homeView1/homeView1'
import Home2 from 'components/home/homeView2/homeView2'
import Home3 from 'components/home/homeView3/homeView3'

import './homeContainer.scss'

class HomeContainer extends Component {
  render() {
    return (
      <div className="HomeContainer" id="home">
        <Home1 />
        <Home2 />
        <Home3 />
      </div>
    )
  }
}

export default HomeContainer
