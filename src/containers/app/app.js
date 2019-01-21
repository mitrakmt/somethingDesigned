import React, { Component } from 'react'

import Home from 'containers/home/homeContainer'
import AboutContainer from 'containers/about/aboutContainer'
import WhatWeContainer from 'containers/what-we/whatWeContainer'
import SkillsContainer from 'containers/skills/skillsContainer'
import MethodContainer from 'containers/method/methodContainer'
import ConnectContainer from 'containers/connect/connectContainer'
import InTheirContainer from 'containers/in-their/inTheirContainer'

import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <div className="app" id="root">
        <Home />
        <AboutContainer />
        <WhatWeContainer />
        <SkillsContainer />
        <MethodContainer />
        <InTheirContainer />
        <ConnectContainer />
      </div>
    )
  }
}

export default App
