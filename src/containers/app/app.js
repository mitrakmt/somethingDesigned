import React, { Component } from 'react'

import Home from 'containers/home/home'
import Home2 from 'containers/home/home2'
import Home3 from 'containers/home/home3'
import AboutContainer from 'containers/about/aboutContainer'
import WhatWeContainer from 'containers/what-we/whatWeContainer'
import SkillsContainer from 'containers/skills/skillsContainer'
import MethodContainer from 'containers/method/methodContainer'
import ConnectContainer from 'containers/connect/connectContainer'

import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <div className="app" id="root">
        <Home />
        <Home2 />
        <Home3 />
        <AboutContainer />
        <WhatWeContainer />
        <SkillsContainer />
        <MethodContainer />
        <ConnectContainer />
      </div>
    )
  }
}

export default App
