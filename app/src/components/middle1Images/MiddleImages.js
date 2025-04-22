import React from 'react';
import './middleImages.css';
import first from './img-1.webp';
import second from './img-2.webp';
import third from './img-3.webp';
import fourth from './img-4.webp';
import { Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function MiddleImages() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div id="middle_images">
      <Card className="image-card">
        <img
          onClick={() => handleClick('/groceries-stores')}
          alt="Groceries Stores"
          src={first}
        />
      </Card>
      <Card className="image-card">
        <img
          onClick={() => handleClick('/workinprogress')}
          alt="Work in Progress"
          src={second}
        />
      </Card>
      <Card className="image-card">
        <img
          onClick={() => handleClick('/meat and fish stores')}
          alt="Meat and Fish Stores"
          src={third}
        />
      </Card>
      <Card className="image-card">
        <img
          onClick={() => handleClick('/Fruits and Vegetables')}
          alt="Fruits and Vegetables"
          src={fourth}
        />
      </Card>
    </div>
  );
}

export default MiddleImages;







// import React from 'react'
// import './middleImages.css'
// import first from './img-1.webp'
// import second from './img-2.webp'
// import third from './img-3.webp'
// import fourth from './img-4.webp'
// import { Card } from 'reactstrap'
// import { useNavigate } from 'react-router-dom'

// function MiddleImages() {
//   const navigate = useNavigate();
//   function Click() {
//     navigate('/groceries-stores')
//   }

//   function Clicked() {
//     navigate('/Fruits and Vegetables')
//   }

//   function progress(){
//       navigate('/workinprogress')
//   }

//   function meat() {
//     navigate('/meat and fish stores')
//   }
//   return (
//     <div id='middle_images'>
//       <Card style={{ width: '17.3rem' }}>
//         <img onClick={Click} style={{ width: '100%' }} alt="first_img" src={first} />
//       </Card>
//       <Card style={{ width: '17.3rem' }}>
//         <img onClick={progress}  alt="second_img" src={second} />
//       </Card>
//       <Card onClick={meat} style={{ width: '17.3rem' }}>
//         <img alt="third_img" src={third} />
//       </Card>
//       <Card onClick={Clicked} style={{ width: '17.3rem' }}>
//         <img alt="fourth_img" src={fourth} />
//       </Card>
//       {/* <img src={first} alt='first_img' />
//           <img src={second} alt='second_img' />
//           <img src={third} alt='third_img' />
//           <img src={fourth} alt='fourth_img' /> */}
//     </div>
//   )
// }

// export default MiddleImages
