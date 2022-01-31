import React from 'react';
import Input from '../component/input';
import Navigation from '../component/navigation';
import "../style/tout.css"
import Paypal from '../component/Paypal';
import { useState } from 'react';
import "@fontsource/zen-tokyo-zoo";


const  Orderonline2 = () => {
    
    
    const [checkout, setCheckOut] = useState(false);
    return (
        <div>
            <Navigation />
            <div className="b"> <Input  state = "order now" /></div>
            <div className='paypal'>
                <div> <p className='question'> <strong>if you want to pay now </strong> </p></div>
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