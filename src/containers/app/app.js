import React, { Component } from 'react'

import Home from 'containers/home/homeContainer'
import WhatWeContainer from 'containers/what-we/whatWeContainer'
import SkillsContainer from 'containers/skills/skillsContainer'
import MethodContainer from 'containers/method/methodContainer'
import OurWorkContainer from 'containers/our-work/ourWorkContainer'
import ConnectContainer from 'containers/connect/connectContainer'
import InTheirContainer from 'containers/in-their/inTheirContainer'
import WhoWeAreContainer from 'containers/who-we-are'
import ClientsContainer from 'containers/clients/clientsContainer'

import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <div className="app" id="root">
        <Home />
        <WhoWeAreContainer />
        <WhatWeContainer />
        <SkillsContainer />
        <MethodContainer />
        <OurWorkContainer />
        <ClientsContainer />
        <InTheirContainer />
        <ConnectContainer />
      </div>
    )
  }
}

export default App
