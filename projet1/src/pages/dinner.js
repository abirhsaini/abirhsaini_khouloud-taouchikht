import Navigation from '../component/navigation';
import "../style/index.css"
import "../style/breakfast.css"

import img1 from '../assets/image/Italian-Meatball-Soup-17.webp';
import img2 from '../assets/image/Quick_Easy_Chicken_Noodle_Soup_11.webp';
import img3 from '../assets/image/African-Peanut-Soup-11.webp';


import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";

import React from "react";
const Dinner = () => {
  const faireredirection =()=>{ 
    window.location.href="/order";
     }
    
   
    return ( 
        
        <div className="container-md ">
            <div>
            
            
        <Navigation />
        </div>
        <div class="container">
    <nav class="navbar navbar-expand-sm navbar-dark ">
        
        <strong class="brk">our dinner menu</strong>

        
       
       
        
    </nav>
</div>
        <div className='container'>
        <div className="row">
          <div className='col'>
          <p className="o"><strong>Italian Meatball Soups</strong> <br />
          soup + meatballs! A tomato-y broth, noodles and some mini Italian pork meatballs<br />
            <em>$23.00</em></p>
          </div>
          <div className='col'><a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a></div>
            
            <button type="button" onClick={faireredirection} class="btn btn-warning">buy now!!</button>
          
        </div>
        
        <div className='row'>
        <div className="col">
         
          <p className="o"><strong>Quick and Easy Chicken Noodle Soup</strong><br />
          Chicken broth, veggies, some dried herbs.<br />
            <em>$25.00</em></p>
            </div>
            <div className='col'>
            <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
           sw </div>
            <button type="button" class="btn btn-warning" onClick={faireredirection}>buy now!!</button>
          
          </div>
          <div className='row'>
        <div className="col">
          <p className="o"><strong>African Peanut Soup</strong><br />
          Fresh  ginger Jalapeno diced,  Tomato paste Canned crushed tomatoes .Sweet potatoes<br />
            <em>$19.00</em></p>
            </div>
            <div className="col">
          <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>

            </div>
            <button type="button"  onClick={faireredirection} class="btn btn-warning">buy now!!</button>
        
        </div>
      </div>
      </div>
    

    );
};
export default Dinner;