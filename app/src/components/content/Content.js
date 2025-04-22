import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import './content.css';

function Content() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div id='content'>
      <h6>
        <span>Home</span> <HiOutlineArrowSmRight /> <span1>Hyderabad</span1>
      </h6>
      <h2>Hyderabad</h2>
      <p className={isExpanded ? "expanded" : ""}>
        Why step out when you can get everything delivered home with the tap of a button? Hyderabad’s favourite delivery app gets you Food,
        Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to
        the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move
        for you. Why worry about your chores, when you can get it all Dun!
      </p>
      <span
        className="read-more"
        onClick={toggleExpand}
        style={{ display: isExpanded ? 'block' : '' }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </span>
    </div>
  );
}

export default Content;




















// import React from 'react';
// import { HiOutlineArrowSmRight } from "react-icons/hi";
// import './content.css'




// function Content() {
//   return (
//     <div id='content'>
//       <h6><span>Home</span> <HiOutlineArrowSmRight /> <span1>Hyderabad</span1></h6>
//       <h2>Hyderabad</h2>
//       <p>Why step out when you can get everything delivered home with the tap of a button? Hyderabad’s favourite delivery app gets you Food,<br />
//         Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to <br />
//         the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for
//         you. Why worry about your chores, when you can get it all Dun!</p>
//     </div>
//   )
// }

// export default Content

