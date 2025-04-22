import '../App.css';
import './header.css'
import { TfiShoppingCart } from "react-icons/tfi"
function Header(props) {
    return (
        <div style={{marginTop : "75px"}} className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} ><h5>Groceries</h5></div>
            <div onClick={() => props.handleShow(true)}>  <TfiShoppingCart className='cartt' />
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;