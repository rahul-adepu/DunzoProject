import React from 'react';
import './footer.css';
import dunzo_image from './dunzo_image.webp';
import bike_man from './bike_man.webp';

function Footer() {
    const footer = [
        { name: "About", location: "Bangalore", social: "Email" },
        { name: "Jobs", location: "Pune", social: "Media Queries" },
        { name: "Contact", location: "Gurgaon", social: "Twitter" },
        { name: "Terms & Conditions", location: "Hyderabad", social: "Facebook" },
        { name: "Privacy Policy", location: "Delhi", social: "Instagram" },
        { name: "Dunzo for Partner", location: "Chennai", social: "LinkedIn" },
        { name: "Dunzo for Business", location: "Mumbai", social: "" }
    ];

    return (
        <div id="footer">
            <div id="inner_footer">
                <h6>You can’t stop time, but you can save it!</h6>
                <p>
                    Living in the city, there is never enough time to shop for groceries, pick up supplies, grab food,
                    and wade through traffic on the way back home. How about we take care of all of the above for you?
                    Send packages across the city and get everything from food, groceries, medicines, and pet supplies
                    delivered right to your doorstep. From any store to your door, just make a list and we’ll make it
                    disappear. Just Dunzo It!
                </p>
                <hr />
                <div className="footer-content">
                    <img id="dunzo" src={dunzo_image} alt="Dunzo logo" />
                    <div id="table-container">
                        <table id="footer-table">
                            {/* <thead>
                                <tr>
                                    <th className="table-header">Name</th>
                                    <th className="table-header">Location</th>
                                    <th className="table-header">Social</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {footer.map((data, index) => (
                                    <tr key={index}>
                                        <td className="table-data">{data.name}</td>
                                        <td className="table-data">{data.location}</td>
                                        <td className="table-data">{data.social}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <img id="bike" src={bike_man} alt="Delivery bike man" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
