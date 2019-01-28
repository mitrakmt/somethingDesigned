import React, { Fragment } from 'react'
import listOfClients from './clientsList'

import './clientsView.scss'

const clientsView = () => (
  <Fragment>
    <div className="clientsColumn-header">
      <div className="clientsColumn-verticalRule" />
      <h2>Clients</h2>
    </div>
    <div className="clientsColumn-list">
      <div className="clientsColumn-list-column">
        {listOfClients.column1.map(client => (
          <p>{client}</p>
        ))}
      </div>
      <div className="clientsColumn-list-column">
        {listOfClients.column2.map(client => (
          <p>{client}</p>
        ))}
      </div>
    </div>
  </Fragment>
)

export default clientsView
