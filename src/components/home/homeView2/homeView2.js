import React, { Fragment } from 'react'

import './homeView2.scss'

const firstColumn = [
  'new',
  'written...',
  're-written',
  'heard',
  'felt',
  'loved',
  'fun!',
  'doodled',
  'noodled?...',
  'noodled (on)',
  'dreamed',
]

const secondColumn = [
  'drawn',
  'presented',
  'won',
  'built',
  'powerful',
  'crazy!!!',
  'cool',
  'loud',
  'subtle',
  'different',
]

const thirdColumn = ['true', 'that', 'is', 'you', 'designed']

const HomeView2 = () => (
  <Fragment>
    <div className="homeView2">
      <div className="homeView2-col homeView2-mobileCol">
        {firstColumn.map(word => (
          <p className="homeView2-text" key={`homeView2-${word}`}>
            {word}
          </p>
        ))}
      </div>
      <div className="homeView2-col">
        {secondColumn.map(word => (
          <p className="homeView2-text" key={`homeView2-${word}`}>
            {word}
          </p>
        ))}
      </div>
      <div className="homeView2-col--centered">
        {thirdColumn.map(word => (
          <p className="homeView2-text" key={`homeView2-${word}`}>
            {word}
          </p>
        ))}
        <p className="homeView2-blackText">(insert punch)</p>
      </div>
    </div>
  </Fragment>
)

export default HomeView2
