import React from 'react'
import './extraline.css'

import { PiCaretRightBold } from "react-icons/pi";
import pan_home from '../Navbar/pan-home.webp'


function Extraline() {
  return (
    <div>
          <div id='second-line'>
              <div id='inner-second-line'>
                  <p><img id='logo1' src={pan_home} alt='logo1' />Order paan items, munchies and much more on our new Dunzo Mo app </p>
                  <h6 id='color-change'>Download Dunzo Mo app Now <PiCaretRightBold /></h6>
              </div>
          </div>
    </div>
  )
}

export default Extraline
