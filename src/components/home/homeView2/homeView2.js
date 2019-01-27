import React, { Fragment } from 'react'

import './homeView2.scss'

const firstColumn = [
  'NEW',
  'WRITTEN…',
  'RE-WRITTEN',
  'HEARD',
  'FELT',
  'LOVED',
  'FUN!',
  'DOODLED',
  'NOODLED?...',
  'NOODLED (ON)',
  'DREAMED',
]

const secondColumn = [
  'DRAWN',
  'PRESENTED',
  'WON',
  'BUILT',
  'POWERFUL',
  'CRAZY!!!',
  'COOL',
  'LOUD',
  'SUBTLE',
  'DIFFERENT',
]

const thirdColumn = ['TRUE', 'THAT', 'IS', 'YOU', 'DESIGNED']

const HomeView2 = () => (
  <Fragment>
    <div className="homeView2">
      <div className="homeView2-col">
        {firstColumn.map(word => (
          <p className="homeView2-text">{word}</p>
        ))}
      </div>
      <div className="homeView2-col">
        {secondColumn.map(word => (
          <p className="homeView2-text">{word}</p>
        ))}
      </div>
      <div className="homeView2-col-centered">
        {thirdColumn.map(word => (
          <p className="homeView2-text">{word}</p>
        ))}
        <p className="homeView2-blackText">(insert punch)</p>
      </div>
    </div>
  </Fragment>
)

export default HomeView2
