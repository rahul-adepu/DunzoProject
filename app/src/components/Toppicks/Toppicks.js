import React from 'react';
import './Toppicks.css';
import { Card } from 'reactstrap';
import first from './Topimages/img1.webp';
import second from './Topimages/img2.webp';
import third from './Topimages/img3.webp';
import fourth from './Topimages/img4.webp';
import phone from './Topimages/phone.webp';

function Toppicks() {
    return (
        <div id='toppicks'>
            <div id='inner_div'>
                <h1>Top Picks for You</h1>
                <div id='forprogress'>
                    <div id='progress'></div>
                    <div id='progress1'></div>
                </div>
            </div>

            <div id='middle_images1'>
                <Card className="toppicks-card">
                    <img alt="first_img" src={first} />
                </Card>
                <Card className="toppicks-card">
                    <img alt="second_img" src={second} />
                </Card>
                <Card className="toppicks-card">
                    <img alt="third_img" src={third} />
                </Card>
                <Card className="toppicks-card">
                    <img alt="fourth_img" src={fourth} />
                </Card>
            </div>

            <div id='phone'>
                <img src={phone} alt='mobile' />
                <div id='phone-text'>
                    <h6>
                        All this from the convenience of your phone.<br />
                        Download the Dunzo mobile app.
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default Toppicks;
