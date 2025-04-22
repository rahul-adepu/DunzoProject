import React from 'react';
import './MiddleImages2.css';
import first from './first_logo.webp';
import second from './second_logo.webp';
import third from './third_logo.webp';
import { useNavigate } from 'react-router-dom';

function MiddleImages2() {
  const buy = useNavigate();

  function buynow() {
    buy('/gone');
  }
  return (
    <div id="main_div">
      <div className="inner_div">
        <img onClick={buynow} alt="first_img" src={first} />
        <h6>Pet Supplies</h6>
      </div>
      <div className="inner_div">
        <img alt="second_img" src={second} />
        <h6>Pan Shop</h6>
      </div>
      <div className="inner_div">
        <img alt="third_img" src={third} />
        <h6>Gifts and Styles</h6>
      </div>
    </div>
  );
}

export default MiddleImages2;















// import React from 'react'
// import './MiddleImages2.css'
// import first from './first_logo.webp'
// import second from './second_logo.webp'
// import third from './third_logo.webp'
// import { useNavigate } from 'react-router-dom'
// function MiddleImages2() {

//   const buy = useNavigate();

//   function buynow() {
//     buy("/gone")
//   }
//   return (
//     <div id='main_div'>
//       <div className='inner_div'>
//         <img onClick={buynow} alt="first_img" src={first} />
//         <h6>Pet Supplies</h6>
//       </div>
//       <div className='inner_div'>
//         <img alt="second_img" src={second} />
//         <h6>Pan Shop</h6>
//       </div>
//       <div className='inner_div'>
//         <img alt="third_img" src={third} />
//         <h6>Gifts and Styles</h6>
//       </div>
//     </div>
//   )
// }

// export default MiddleImages2
