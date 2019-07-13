import React, { Fragment } from 'react'
import listOfDescriptions from './descriptionsList'
import listOfSkills from './skillsList'

import './skillsView.scss'

const skillsView = () => (
  <Fragment>
    <div className="skillsColumn-header">
      <div className="skillsColumn-verticalRule" />
      <h2>Skills</h2>
    </div>
    <div className="skillsColumn-list">
      {listOfSkills.map(skill => (
        <p key={`skillsView-name-${skill}`}>{skill}</p>
      ))}
    </div>
    <div className="skillsColumn-descriptions">
      {listOfDescriptions.column1.map(description => (
        <p
          className="description"
          key={`skillsView-description-${description}`}
        >
          {description}
        </p>
      ))}
    </div>

    <div className="skillsColumn-descriptions-alt">
      {listOfDescriptions.column2.map(word => (
        <p
          className="skillsColumn-descriptions-alt-p"
          key={`skillsView-column2-${word}`}
        >
          {' '}
          {word}{' '}
        </p>
      ))}
    </div>
  </Fragment>
)

export default skillsView
