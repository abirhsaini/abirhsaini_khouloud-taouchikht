import React from 'react';
import Input from '../component/input';
import Navigation from '../component/navigation';
import "../style/tout.css"

const  Orderonline2 = () => {
    
    return (
        <div>
            <Navigation />
            <div className="b"> <Input  state = "order now" /></div>
        </div>
    );
};

export default Orderonline2;