import React from 'react';
import "../style/tout.scss"

const Order1 = (props) => {
   
    return (
        <div>
             <span className="title"> <p>{props.title}</p></span>
              <span><img className="image"   src={require(`../assets/image/${props.image}`)} alt="" /></span>
             
              <div className="description"> <p>{props.description}</p></div>
              <div > <button className='button1'>add to my order</button></div>
              <div ><button className='button2'> confirm my order </button></div>
              
        </div>
        
    );
};

export default Order1;