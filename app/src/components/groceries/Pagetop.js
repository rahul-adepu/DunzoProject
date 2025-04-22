import React from 'react'
import './pagetop.css'
import grocery_logo from './images/grocery.webp'

function Pagetop() {
    return (
        <div id='main'>
            <div id='top'>
                <img src={grocery_logo} alt='groceryLogo' />
                <div>
                    <h3>Groceries & Essentials in Hyderabad</h3>
                    <h6>113 Stores</h6>
                </div>
            </div>
        </div>
    )
}

export default Pagetop
