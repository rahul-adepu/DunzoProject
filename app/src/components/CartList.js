import { useEffect, useState } from 'react';
// import '../components/groceries/page1.css';
// import { Container, Row } from 'reactstrap';
import './cartlist.css'
function CartList({ cart }) {
    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div id='maincart'>

            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='sizing'>
                            <img src={cartItem.url} width={120} alt='img' />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p className='total'> Total: <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
            {/* <button className='btnn'>Add Address</button> */}

        </div >
    )
}

export default CartList