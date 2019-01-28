import React, { Fragment } from 'react'
// import listOfDescriptions from './descriptionsList'
// import listOfSkills from './skillsList'

import './whoWeAreView.scss'

const WhoWeAreView = () => (
  <Fragment>
    <div className="whoWeAreView">
      <div className="whoWeAreView-titleContainer">
        <h1 className="whoWeAreView-title">We Can Turn Something</h1>
        <span className="whoWeAreView-subtitle">(Great)</span>
      </div>
      <div className="whoWeAreView-textContainer">
        <p className="whoWeAreView-text">
          The team at Something Designed is packed full of professional miracle
          workers. Their artistic direction, creative input and thorough
          attention to detail is invaluable. We came to them with a half-baked
          idea, and they turned it into a fully baked creative concept!
        </p>
        <p className="whoWeAreView-text">
          The swiftness at which they work is only matched by their creative
          expertise. They are a privilege to work with and invest themselves in
          the process—adding pearls of wisdom and thoughtful ideas all along the
          way. I would trust this team with my highest creative priorities. This
          is one badass group of women, who happen to be badass designers.
        </p>
        <p className="whoWeAreView-text">
          Chip Herter, Director of Syncronization, BUTTER MUSIC AND SOUND.
        </p>
      </div>
    </div>
  </Fragment>
)

export default WhoWeAreView
