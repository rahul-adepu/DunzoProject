import React from 'react'
import Pagetop from './Pagetop'
import Page1 from './Page1'
// import Paginationpart from './Paginationpart'
import Footer from '../footer/Footer'

function Groceries() {
  return (
    <div>
          <Pagetop />
          <Page1 />
          {/* <Paginationpart /> */}
          <Footer />
    </div>
  )
}

export default Groceries
