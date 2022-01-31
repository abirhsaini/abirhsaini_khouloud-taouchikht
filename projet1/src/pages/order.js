import React from 'react';
import Input from '../component/input';
import Navigation from '../component/navigation';
import "../style/tout.css"
import Paypal from '../component/Paypal';
import { useState } from 'react';


const  Orderonline2 = () => {
    
    
    const [checkout, setCheckOut] = useState(false);
    return (
        <div>
            <Navigation />
            <div className="b"> <Input  state = "order now" /></div>
            <div className='paypal'>
            {checkout ? (
        <Paypal />
             ) : (
        <button className='pay'
          onClick={() => {
            setCheckOut(true);
          }}
        >
          buy online
        </button>
      )}
      </div>
        </div>
        
    );
};

export default Orderonline2;