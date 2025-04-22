import React from 'react'
import '../groceries/pagetop.css'
import Fruitlogo from './fruitsVegetables.webp'
function Fruitstop() {
  return (
    <div>
          <div id='main'>
              <div id='top'>
                  <img src={Fruitlogo} alt='friutsLogo' />
                  <div>
                      <h3>Fruits & Vegetables in Hyderabad</h3>
                      <h6>93 Stores</h6>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Fruitstop
