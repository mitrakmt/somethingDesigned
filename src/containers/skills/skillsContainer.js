import React, { Component } from 'react'
import SkillsView from 'components/skills/skillsView'
import './skillsContainer.scss'

class SkillsContainer extends Component {
  render() {
    return (
      <div className="skillsContainer" id="skills">
        <SkillsView />
      </div>
    )
  }
}

export default SkillsContainer
