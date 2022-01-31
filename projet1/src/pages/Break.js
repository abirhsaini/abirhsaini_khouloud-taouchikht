import Navigation from '../component/navigation';

import "../style/breakfast.css";

import img1 from '../assets/image/Baked-Eggs-with-Swiss-Chard-and-Green-Olives-14.webp';
import img2 from '../assets/image/Granola-with-Figs-Almonds-and-Coconut-1.webp';
import img3 from '../assets/image/raspberry-oatmeal-breakfast-bars-7.webp';
import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-bootstrap";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const faireredirection =()=>{ 
  window.location.href="/order";
   }
const Break = () => {
  

    
   
    return ( 
        
        <div className="body ">
            <div>
            
            
        <Navigation />
        </div>
        <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark ">
        
        <strong className="brk">our breakfast menu</strong>

        
       
        
        
    </nav>
</div>
    <div className='container'>
        
      <div className="row">
        <div className='col'>
          
          <p className="o"><strong>Morning eggs</strong> <br />
            Baked Eggs with Swiss Chard and Green Olives<br />
            <em>$13.00</em></p>
            
          
          </div>
          <div className='col'>
          <a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a>
          </div>
          
          <button type="button" onClick={faireredirection} class="btn btn-warning">buy now!!</button>
         
         
          
          
        </div>
        
        
        <div className="row">
        
          
         <div className='col'>
         
          <p className="o"><strong>Granola </strong><br />
            with Figs, Almonds and Coconut<br />
            <em>$20.00</em></p>
            
            </div> 
            <div className='col'>
            <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
            </div>
            
            <button type="button" class="btn btn-warning" onClick={faireredirection}>buy now!!</button>
            
        </div>
        
        <div className="row">
        <div className="col">
        <Link to="/Contact">
          
          <p className="o"><strong>Raspberry Breakfast Bar</strong><br />
            Blackberries, Blueberries,Plums Peaches and nectarines<br />
            <em>$19.00</em></p>
            </Link>
            
        </div>
        <div className="col">
        <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>
        
        </div>
        <button type="button" class="btn btn-warning" onClick={faireredirection}>buy now!!</button>
        
      </div>
      </div>
    
</div>
    );
}
export default Break;
 