import Navigation from '../component/navigation';
import "../style/index.css"
import "../style/breakfast.css"

import img1 from '../assets/image/CHICKEN STEAKHOUSE.jpg';
import img2 from '../assets/image/FISH ROYALE.jpg';
import img3 from '../assets/image/MUSHROOM XXL.jpg';

import img4 from '../assets/image/DOUBLE BARBECUE XXL.jpg';
import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";
import { Link } from 'react-scroll';

import React from "react";
const Lunch = () => {
  const faireredirection =()=>{ 
    window.location.href="http://localhost:3000/order";
     }
    
   
    return ( 
        
        <div className="container-md ">
            <div>
            
            
        <Navigation />
        </div>
        <div class="container">
    <nav class="navbar navbar-expand-sm navbar-dark ">
        
        <strong class="brk">our lunch menu</strong>

        
    </nav>
</div>
    <div className="container">
        <div className="row">
         <div className="col">
            <Link to='/about'>
          
          <p className="o"><strong>CHICKEN STEAKHOUSE</strong> <br />
          onions, lettuce, tomato, BBQ Sauce, delicious 4 Half's veal bacon, Swiss cheese<br />
            <em>$32.00</em></p>
            </Link> 
            </div>
            <div className="col">
            <a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a>
          </div>
        
        <button type="button"  onClick={faireredirection} class="btn btn-warning">buy now!!</button>
        </div>
       
      <div className="row">    
        
        <div className="col">
            <Link to='/about'>
            
          <p className="o"><strong>FISH ROYALE  </strong><br />
          half dozen layers on top of which a 7 warm and toasted bun, lettuce, fish patty, Tartar Sauce and a soft bun at the base<br />
            <em>$40.00</em></p>
            </Link> 
            </div>
            <div className="col">
          <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
          </div>
        
        <button type="button" onClick={faireredirection} class="btn btn-warning">buy now!!</button>
        </div>
        <div className="row">
        <div className="col">
            <Link to='/about'>
          
          <p className="o"><strong>MUSHROOM XXLr</strong><br />
          flame-grilled beef patties, topped with  special mushroom sauce, served on a sesame seed bun<br />
            <em>$45.00</em></p>
            
            </Link>
            </div>
            <div className="col">
            <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>
            </div>
            <button type="button"  onClick={faireredirection} class="btn btn-warning">buy now!!</button>
        
        </div>
        <div class="row">
        <div className="col">
        <Link to='/about'>
          
          <p className="o"><strong>DOUBLE BARBECUE XXLr</strong><br />
          fire-grilled beef patties topped with tasty BBQ sauce and melted cheese<br />
            <em>$38.00</em></p>
           
            </Link>
            </div>
            <div className="col">
            <a className="photo3"><img className="photo" src={img4} alt="raspberry-oatmeal-breakfast-bars " /></a>
            </div>
            <button type="button" onClick={faireredirection} class="btn btn-warning">buy now!!</button>
        
        </div>
       </div> 
        
      
    </div>

    );
};
export default Lunch;