import React from 'react'
import Page1 from '../groceries/Page1'
// import Paginationpart from '../groceries/Paginationpart'
import Footer from '../footer/Footer'
import Fruitstop from './Fruitstop'

function Fruitsandvegetables() {
  return (
    <div>
      <Fruitstop />
      <Page1 />
      {/* <Paginationpart /> */}
      <Footer />
    </div>
  )
}

export default Fruitsandvegetables
