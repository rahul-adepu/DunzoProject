import React from 'react'
import meat_logo from './meatFish.webp'
import '../groceries/pagetop.css'
function Meattop() {
  return (
    <div>
          <div id='main'>
              <div id='top'>
                  <img src={meat_logo} alt='groceryLogo' />
                  <div>
                      <h3>Meat & Fish in Hyderabad</h3>
                      <h6>136 Stores</h6>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Meattop
