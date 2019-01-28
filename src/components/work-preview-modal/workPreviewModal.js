import React, { Component } from 'react'

import './workPreviewModal.scss'

class WorkPreviewModal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="workPreviewModal">
        <section className="workPreviewModal-main">
          <span
            className="workPreviewModal-closeButton"
            onClick={this.props.closeWorkPreviewModal}
          />
          {this.props.images.map(image => (
            <img
              src={image}
              className="workPreviewModal-image"
              alt="our work"
              key={`workPreviewModal-image-${image}`}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default WorkPreviewModal
