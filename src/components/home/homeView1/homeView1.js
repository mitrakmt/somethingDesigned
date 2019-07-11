import React, { Fragment, Component } from 'react'
import Punch from 'images/punch.png'
import './homeView1.scss'

// const HomeView1 = () => (
//   <Fragment>
//     <div className="homeView1">
//       <h2 className="homeView1-small">some</h2>
//       <h2 className="homeView1-medium">thing</h2>
//       <h2 className="homeView1-large">{}</h2>
//       <h2 className="homeView1-arrow">>></h2>
//     </div>
//   </Fragment>
// )

class HomeView1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedWord: 0,
      finishedLoading: false,
    }

    this.words = [
      `Designed`,
      `placeholder`,
      `fun`,
      `fun`,
      `fun`,
      `new`,
      `written..`,
      `re-written`,
      `heard`,
      `felt`,
      `loved`,
      `fun!`,
      `doodled`,
      `noodled?`,
      `noodled on`,
      `dreamt`,
      `drawn`,
      `presented`,
      `won`,
      `built`,
      `powerful`,
      `cRAZY!!`,
      `cool`,
      `loud`,
      `subtle`,
      `different`,
      `true`,
      `that`,
      `is`,
      `You`,
    ]

    this.rotateWords = setInterval(() => {
      let wordId = this.state.selectedWord + 1
      if (wordId >= this.words.length) {
        setTimeout(() => {
          this.setState({
            selectedWord: 0,
          })
          setTimeout(() => {
            this.setState({
              finishedLoading: true,
            })
          }, 1300)
        }, 800)
        clearInterval(this.rotateWords)
      } else {
        this.setState({
          selectedWord: wordId,
        })
      }
    }, 400)
  }

  render() {
    return (
      <Fragment>
        <div className="homeView1">
          {this.state.finishedLoading ? (
            <span />
          ) : (
            <h2 className="homeView1-small">some</h2>
          )}
          {this.state.finishedLoading ? (
            <span />
          ) : (
            <h2 className="homeView1-medium">thing</h2>
          )}
          {this.state.finishedLoading ? (
            <span />
          ) : (
            <h2 className="homeView1-large">
              {this.words[this.state.selectedWord]}
            </h2>
          )}
          {this.state.finishedLoading ? (
            <img src={Punch} className="homeView1-fist" alt="punch" />
          ) : (
            <div />
          )}
          <h2 className="homeView1-arrow">>></h2>
        </div>
      </Fragment>
    )
  }
}

export default HomeView1
