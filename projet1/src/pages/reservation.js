import React from 'react';
import ReactDOM  from 'react-dom';
import Input from '../component/input';
import Navigation from '../component/navigation';
import "../style/tout.css"


const Reservation = () => {
    return (
        <div className='reservation'>
            <div className="a"> <Navigation  /></div>
           
            <div className="b"><Input state="book a table"
             /></div>
            

            </div>
    );
};


export default Reservation;