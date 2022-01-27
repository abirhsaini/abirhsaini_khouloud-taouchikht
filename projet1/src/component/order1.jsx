import React from 'react';
import "../style/tout.scss"
import  {useHistory } from 'react-router-dom'

const Order1 = (props) => {

     const faireredirection =()=>{ 
    window.location.href="http://localhost:3000/orderonline/myorder";
     }
    return (
        <div>
             <span className="title"> <p>{props.title}</p></span>
              <span><img className="image"   src={require(`../assets/image/${props.image}`)} alt="" /></span>
             
              <div className="description"> <p>{props.description}</p></div>
              <div > <button   className='button1'>add to my order</button></div>
              <div ><button onClick={faireredirection} className='button2'> confirm my order </button></div>
              
        </div>
        
    );
};

export default Order1;