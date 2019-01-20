import React, { Fragment } from 'react'

import './pinkTheme.scss'

const pinkTheme = props => (
  <Fragment>
    <div className="pinkTheme-verticalRule" />
    <div className="pinkTheme-header">
      <h2>
        {props.titleWordOne}{' '}
        <span className="pinkTheme-header-coloredText">
          {props.titleWordTwo}
        </span>
      </h2>
    </div>
    <div
      className="pinkTheme-description"
      dangerouslySetInnerHTML={{ __html: props.description }}
    />
  </Fragment>
)

export default pinkTheme
