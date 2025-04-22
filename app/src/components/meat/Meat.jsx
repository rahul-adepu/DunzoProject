import React, { useEffect, useState } from 'react'
import '../groceries/page1.css'
// import Paginationpart from '../groceries/Paginationpart'
import Footer from '../footer/Footer'
import Meattop from './Meattop'
import { fetchMeat } from '../../services/api';
function Meat() {
        const [meat, setMeat] = useState([]);
        useEffect(() => {
            const fetchData = async () => {
                const meatData = await fetchMeat();
                setMeat(meatData.data);
            };
            fetchData();
        }, []);
    return (

        <div>
            <Meattop />
            {
                meat.map((items) => (
                    <tr>
                        <div id='mainpage'>
                            <div id='forwidth'>
                                <td>
                                    <div id='page1'>
                                        <img id='sizing' src={items.img} alt='' />
                                        <div>
                                            <h3>{items.store}</h3>
                                            <h5>{items.place}</h5>
                                            <p>{items.distance}</p>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div id='page1'>
                                        <img id='sizing' src={items.img} alt='' />
                                        <div>
                                            <h3>{items.store}</h3>
                                            <h5>{items.place}</h5>
                                            <p>{items.distance}</p>
                                        </div>
                                    </div>
                                </td>
                            </div>
                        </div>
                    </tr>


                ))}

            {/* <Paginationpart /> */}
            <Footer />
        </div>
    )

}

export default Meat
