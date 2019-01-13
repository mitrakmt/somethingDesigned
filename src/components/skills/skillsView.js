import React, { Fragment } from 'react'
import listOfDescriptions from './descriptionsList'
import listOfSkills from './skillsList'

import './skillsView.scss'

const aboutView = () => (
  <Fragment>
    <div className="skillsColumn-header">
      <h2>Skills</h2>
    </div>
    <div className="skillsColumn-list">
      {listOfSkills.map(skill => (
        <p>{skill}</p>
      ))}
    </div>
    <div className="skillsColumn-descriptions">
      {listOfDescriptions.map(description => (
        <p>{description}</p>
      ))}
    </div>
  </Fragment>
)

export default aboutView
