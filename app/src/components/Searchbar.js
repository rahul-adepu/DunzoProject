import React from 'react'
import { Input } from 'reactstrap'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import './searchbar.css'
import { useNavigate } from 'react-router-dom';
function Searchbar() {
  const navigate = useNavigate();

  function GoToHome() {
    navigate("/");
  }
  
  return (
    <div id='searchbar'>
      <IoSearchOutline id='search' /><Input id='input-search' placeholder='Search for an item or store' />
      <div>
        <IoMdClose onClick={GoToHome} id='clear' />
        <h6 id='text'>Close</h6>
      </div>
    </div>
  )
}

export default Searchbar

