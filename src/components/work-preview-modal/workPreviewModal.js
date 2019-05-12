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

// Cover Page
// Can we have our logo written out in real time, like Sensorium’s home page? (Type the Something, hand written the design).  With the cover page on a timer (also like Sensorium home page).
// After written, the cover page is on a timer that dissolves into the homepage
// Home Page
// Sections that flow down as you scroll – we like the responsiveness of the Sensorium site
// Include a menu icon in the top left hand corner on every section except the cover page
// A skinny menu to slide out from the left side of the screen with links to different sections – reference the Sensorium website – is this possible?
// Section 1: Value proposition statement
// Simple section with colored background and block of short text
// Section 2: Who we are
// Grid of flipping tiles on timers – is this interactivity possible?
// Each tile will have an image or text on one or both sides
// Section 3: Our philosophy
// Simple section with colored background and block of short text
// Section 4: Services
// Simple section with colored background and list of services with icons and text
// Section 5: Our work
// A grid format featuring some of our best slides – we love the top section of the Paste website where the slides move into place – is this possible?
// Section 6: Process
// Simple section with colored background and list of process with icons and text
// Section 7: Pricing
// (THIS SECTION IS TBD)
// Section 8: Contact us
// Simple section with colored background, big text statement, and a “Say Hi” button that links to an email address
// Section 9: Things we love
// Grid of our Instagram posts that is linked to our account so that they update automatically
// Section 10: Footer
// Simple colored background with company name, info and contact info text
