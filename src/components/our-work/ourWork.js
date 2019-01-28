import React, { Fragment } from 'react'

import './ourWork.scss'

const OurWork = props => (
  <Fragment>
    <div className="ourWork">
      <div className="ourWork-grid" onClick={props.openWorkPreviewModal}>
        {props.images.map(image => (
          <img
            src={image}
            className="ourWork-grid-image"
            alt="our work"
            key={`ourWork-image-${image}`}
          />
        ))}
      </div>
    </div>
  </Fragment>
)

export default OurWork
