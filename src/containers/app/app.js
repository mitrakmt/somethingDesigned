import React, { Component } from 'react'

import Home from 'containers/home/home'
import Home2 from 'containers/home/home2'
import Home3 from 'containers/home/home3'
import AboutContainer from 'containers/about/aboutContainer'
import WhatWeContainer from 'containers/what-we/whatWeContainer'
import SkillsContainer from 'containers/skills/skillsContainer'

import './app.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Home />
        <Home2 />
        <Home3 />
        <AboutContainer />
        <WhatWeContainer />
        <SkillsContainer />
      </div>
    )
  }
}

export default App
