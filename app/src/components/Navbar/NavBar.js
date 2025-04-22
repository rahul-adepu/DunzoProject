import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { PiCaretDown } from "react-icons/pi";


import dunzo_logo from './dunzo-logo.webp';


import './NavBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navi = useNavigate();
    
    function GoToSearchbar() {
        navi("/searchbar")
    }

    function loginclicked() {
        navi("/login")
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div id='container'>
            <div id='left'>
                <Navbar light expand="md">
                    <NavbarBrand href="/"><img id='logo-dunzo' src={dunzo_logo} alt='logo' /></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <UncontrolledDropdown  >
                                <DropdownToggle nav id='location' className='dropdown-ad'>
                                    <FaLocationDot />Set location <PiCaretDown />
                                </DropdownToggle>
                                {/* <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu> */}
                            </UncontrolledDropdown>
                        </Nav>
                        <p id='partners' className='dropdown-ad'>Dunzo For Partners</p>
                        <Nav className="me-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav className='dropdown-ad'>
                                    Business with Dunzo <PiCaretDown />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <h6>Need delivery partners?</h6>
                                        <pre>Sign up on Dunzo Business and
                                            <br />get your first delivery free!</pre>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <h6>Sell products on Dunzo</h6>
                                        <pre>Apply to get your products listed on <br />the Dunzo app & website</pre>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>


                            {/* <p id='partners' className='dropdown-ad' onClick={card}>Card</p> */}

                            <div id='cart'>
                                <FiSearch onClick={GoToSearchbar} />
                                {/* <BsCart /> */}
                            </div>
                        </Nav>
                        <Button id='btn-signin' onClick={loginclicked}>Sign in</Button>
                    </Collapse>
                </Navbar>
            </div>            
        </div>


    );
}

export default NavBar;