import React, { Fragment } from 'react'

import './businessWonView.scss'

const businessWonView = () => (
  <Fragment>
    <div className="businessWonColumn-header">
      <div className="businessWonColumn-verticalRule" />
      <h2>
        our business <br />
        wins business
      </h2>
    </div>
    <div className="businessWonColumn-textContainer">
      <p className="businessWonColumn-textContainer-text">
        our work has helped our clients be awarded business from fortune 500
        companies, major brands and entertainment properties such as:
      </p>
      <div className="businessWonColumn-list">
        <div className="businessWonColumn-list-column">
          <p>nickelodeon</p>
          <p>waze</p>
          <p>linkedin</p>
          <p>volkswagon</p>
        </div>
        <div className="businessWonColumn-list-column">
          <p>samsung electronics</p>
          <p>ford motors</p>
          <p>nike</p>
          <p>20th century fox</p>
        </div>
      </div>
    </div>
  </Fragment>
)

export default businessWonView
