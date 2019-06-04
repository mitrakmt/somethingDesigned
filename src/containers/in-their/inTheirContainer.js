import React, { Component } from 'react'
import PinkTheme from 'components/pink-theme/pinkTheme'
import './inTheirContainer.scss'

class InTheirContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuote: 0,
    }

    this.titleWordOne = 'In'
    this.titleWordTwo = 'Their'
    this.quotes = [
      `<p class="pinkTheme-quotes">"</p>
      <br />
      Something Designed’s decks are the best in the business. Their impact on our initial concept and existing materials was exponential. Their work has resulted in a smoother sales process for our team. 
      <br /><br />
      They have a fresh perspective, creative ideas and a great eye - and  are extremely passionate about delivering a perfect final product. They are without a doubt an invaluable asset to any creative project, and I would highly recommend them.
      <br /><br />
      Daniel Sena, Head of Strategic Marketing, INTERSCOPE RECORDS`,
      `<p class="pinkTheme-quotes">"</p>
      <br />
      The Something Designed team did an incredible job taking my text-heavy powerpoint and making it a visually engaging and digestable deck that felt on-brand. My ideas really came to life after they waved their magic wand. Not to mention, they are the easiest and most lovely humans to work with. They are truly brand deck gurus.
      <br /><br />
      Holly Liss, Founder, ENLISST`,
      `<p class="pinkTheme-quotes">"</p>
      <br />
      Having Something Designed in our corner gave us the upper hand when developing our brand’s voice and vision, and when crafting new business pitch materials. They have over delivered on every project I’ve worked with them on.
      <br /><br />
      Ryan Choura, CEO & Founder, CHOURA EVENTS`,
      `<p class="pinkTheme-quotes">"</p>
      <br />
      When I needed a pitch deck for my media company, I reached out to Something Designed, who came highly recommended. After meeting them in person, I knew that these hip, forward-thinking millennials with tons of experience were perfect for my project. Not only did they help me craft a bold and powerful message in a visually appealing deck and logo, they were also patient during the revision process. They didn’t stop until I was completely satisfied with the final product. Now, every time I show my deck to friends or colleagues, they are in awe. Having such an informative and well-designed deck has given the confidence to pitch investors and ultimately realize my dream. Thank you, ladies. You definitely exceeded my expectations. 
      <br /><br />
      Elka Worner, Los Angeles Bureau Chief, FOX BUSINESS NETWORK`,
    ]

    this.rotateQuotes = setInterval(() => {
      let quoteId = this.state.selectedQuote + 1
      if (quoteId >= this.quotes.length) {
        this.setState({
          selectedQuote: 0,
        })
      } else {
        this.setState({
          selectedQuote: quoteId,
        })
      }
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.rotateQuotes)
  }

  selectQuote = index => {
    this.setState({
      selectedQuote: index,
    })
  }

  render() {
    return (
      <div className="inTheirContainer" id="inTheir">
        <PinkTheme
          titleWordOne={this.titleWordOne}
          titleWordTwo={this.titleWordTwo}
          description={this.quotes[this.state.selectedQuote]}
          quotes
        />
        <div className="inTheirContainer-quoteNavigation">
          {this.quotes.map((quote, index) => (
            <span
              key={`inTheirContainer-quote-${quote}`}
              className={`inTheirContainer-dot ${
                this.state.selectedQuote === index
                  ? 'inTheirContainer-selected'
                  : ''
              }`}
              onClick={() => {
                this.selectQuote(index)
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default InTheirContainer
