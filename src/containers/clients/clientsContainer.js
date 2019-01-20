import React, { Component } from 'react'
import ClientsView from 'components/clients/clientsView'
import './clientsContainer.scss'

class ClientsContainer extends Component {
  render() {
    return (
      <div className="clientsContainer" id="clients">
        <ClientsView />
      </div>
    )
  }
}

export default ClientsContainer
