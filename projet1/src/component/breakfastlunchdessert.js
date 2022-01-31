


import React from 'react';
import { Link } from 'react-router-dom';
import "@fontsource/zen-tokyo-zoo";


const Bld = (props) => {

    
    var url = `${props.time}`;
  
   
    
    
    console.log(props.name);
    
    return (
    <div id={props.time}>  
        <div className='menu'>
        <Link  id="time11" to={url} className="btn btn-warning"> {props.time}</Link>
        
            
          </div> 
            <img className={props.time}  src={require(`../assets/image/${props.name}`)} alt="" />
            
            
        </div>
    );
};

export default Bld;