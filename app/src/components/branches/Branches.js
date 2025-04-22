import React from 'react';
import './branches.css';

function Branches() {
    const branches = [
        { name: "Ameerpet", name1: "BDL Colony", name2: "Banjara Hills", name3: "Begumpet" },
        { name: "Borabanda", name1: "Chandanagar", name2: "Film Nagar", name3: "Financial District" },
        { name: "Gachibowli", name1: "Golconda", name2: "Hafizpet", name3: "Himayat Nagar" },
        { name: "Hitech City", name1: "Jubilee Hills", name2: "Jyothi Rao Colony", name3: "KPHB" },
        { name: "Kavadiguda", name1: "Kavuri Hills", name2: "Khairathabad", name3: "Khajaguda" },
        { name: "Kokapet", name1: "Kondapur", name2: "Kothaguda", name3: "Kukatpally" },
        { name: "Lingampally", name1: "Madhapur", name2: "Mallepally", name3: "Manikonda" },
        { name: "Masab Tank", name1: "Mehdipatnam", name2: "Miyapur", name3: "Nalagandla" },
        { name: "Nizampet", name1: "Pragathi Nagar", name2: "Prakash Nagar", name3: "Puppalguada" },
        { name: "Raidurgam", name1: "Sanathnagar", name2: "Secunderabad", name3: "Shamshiguda" },
        { name: "Tolichowki", name1: "West Marredpally", name2: "Yousufguda", name3: "" },
    ];

    return (
        <div id="upper-cont">
            <div id="upper-footer">
                <h3>Areas We Deliver To</h3>
                <div className="branches-grid">
                    {branches.map((data, index) => (
                        <div className="branch-row" key={index}>
                            <div className="branch-item">{data.name}</div>
                            <div className="branch-item">{data.name1}</div>
                            <div className="branch-item">{data.name2}</div>
                            <div className="branch-item">{data.name3}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Branches;
