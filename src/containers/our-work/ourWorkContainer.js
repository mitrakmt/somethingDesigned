import React, { Component } from 'react'
import OurWork from 'components/our-work/ourWork'

// 1803
import image1803_1 from 'images/1803/1803-1.png'
import image1803_2 from 'images/1803/1803-2.png'
import image1803_3 from 'images/1803/1803-3.png'
import image1803_4 from 'images/1803/1803-4.png'
import image1803_5 from 'images/1803/1803-5.png'

// Bea Miller
import beaMiller1 from 'images/bea-miller/bea-miller-1.png'
import beaMiller2 from 'images/bea-miller/bea-miller-2.png'
import beaMiller3 from 'images/bea-miller/bea-miller-3.png'
import beaMiller4 from 'images/bea-miller/bea-miller-4.png'

// Coke
import coke1 from 'images/coke/coke-1.png'
import coke2 from 'images/coke/coke-2.png'
import coke3 from 'images/coke/coke-3.png'
import coke4 from 'images/coke/coke-4.png'
import coke5 from 'images/coke/coke-5.png'

// Enlisst
import social101_1 from 'images/enlisst/social-101-1.png'
import social101_2 from 'images/enlisst/social-101-2.png'
import social101_3 from 'images/enlisst/social-101-3.png'
import social101_4 from 'images/enlisst/social-101-4.png'
import social101_5 from 'images/enlisst/social-101-5.png'

// Milk & Honey
import milkHoney1 from 'images/milk&honey/milk&honey-1.png'
import milkHoney2 from 'images/milk&honey/milk&honey-2.png'
import milkHoney3 from 'images/milk&honey/milk&honey-3.png'
import milkHoney4 from 'images/milk&honey/milk&honey-4.png'
import milkHoney5 from 'images/milk&honey/milk&honey-5.png'

// Nike
import nike1 from 'images/nike/nike-1.png'
import nike2 from 'images/nike/nike-2.png'
import nike3 from 'images/nike/nike-3.png'
import nike4 from 'images/nike/nike-4.png'
import nike5 from 'images/nike/nike-5.png'
import nike6 from 'images/nike/nike-6.png'
import nike7 from 'images/nike/nike-7.png'
import nike8 from 'images/nike/nike-8.png'

// Pink
import pink1 from 'images/pink/pink-1.png'
import pink2 from 'images/pink/pink-2.png'
import pink3 from 'images/pink/pink-3.png'
import pink4 from 'images/pink/pink-4.png'

// Sirius
import sirius1 from 'images/sirius/sirius-1.png'
import sirius2 from 'images/sirius/sirius-2.png'
import sirius3 from 'images/sirius/sirius-3.png'
import sirius4 from 'images/sirius/sirius-4.png'
import sirius5 from 'images/sirius/sirius-5.png'
import sirius6 from 'images/sirius/sirius-6.png'

// Snack Nation
import snackNation1 from 'images/snack-nation/snack-nation-1.png'
import snackNation2 from 'images/snack-nation/snack-nation-2.png'
import snackNation3 from 'images/snack-nation/snack-nation-3.png'
import snackNation4 from 'images/snack-nation/snack-nation-4.png'

// VW
import vw1 from 'images/vw/vw-1.png'
import vw2 from 'images/vw/vw-2.png'
import vw3 from 'images/vw/vw-3.png'
import vw4 from 'images/vw/vw-4.png'
import vw5 from 'images/vw/vw-5.png'

import './ourWorkContainer.scss'

class OurWorkContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.images = [
      image1803_1,
      image1803_2,
      image1803_3,
      image1803_4,
      image1803_5,
      beaMiller1,
      beaMiller2,
      beaMiller3,
      beaMiller4,
      coke1,
      coke2,
      coke3,
      coke4,
      coke5,
      social101_1,
      social101_2,
      social101_3,
      social101_4,
      social101_5,
      milkHoney1,
      milkHoney2,
      milkHoney3,
      milkHoney4,
      milkHoney5,
      nike1,
      nike2,
      nike3,
      nike4,
      nike5,
      nike6,
      pink1,
      pink2,
      pink3,
      pink4,
      sirius1,
      sirius2,
    ]

    // this.images = [
    //   [image1803_1, image1803_2, image1803_3, image1803_4, image1803_5],
    //   [beaMiller1, beaMiller2, beaMiller3, beaMiller4, sirius1],
    //   [coke1, coke2, coke3, coke4, coke5],
    //   [social101_1, social101_2, social101_3, social101_4, social101_5],
    //   [milkHoney1, milkHoney2, milkHoney3, milkHoney4, milkHoney5],
    //   [nike1, nike2, nike3, nike4, nike5],
    // ]
  }
  render() {
    return (
      <div className="ourWork" id="ourWork">
        <OurWork images={this.images} />
      </div>
    )
  }
}

export default OurWorkContainer
