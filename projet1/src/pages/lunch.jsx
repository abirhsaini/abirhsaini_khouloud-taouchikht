import Navigation from '../component/navigation';
import "../style/index.scss"
import "../style/breakfast.scss"
import Produit from '../component/produit';
import img1 from '../assets/image/CHICKEN STEAKHOUSE.jpg';
import img2 from '../assets/image/FISH ROYALE.jpg';
import img3 from '../assets/image/MUSHROOM XXL.jpg';

import img4 from '../assets/image/DOUBLE BARBECUE XXL.jpg';
import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";

import React from "react";
const Lunch = () => {
    
    
   
    return ( 
        
        <div className="container-md ">
            <div>
            
            
        <Navigation />
        </div>
        <div class="container">
    <nav class="navbar navbar-expand-sm navbar-dark ">
        
        <strong class="brk">our lunch menu</strong>

        
       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Burgers <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="#">Sandwich</a>
            <a class="nav-item nav-link" href="#">American</a>
            
          </div>
        </div>
        
    </nav>
</div>
        <div className="plat1">
          <a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a>
          <p className="o"><strong>CHICKEN STEAKHOUSE</strong> <br />
          onions, lettuce, tomato, BBQ Sauce, delicious 4 Half's veal bacon, Swiss cheese<br />
            <em>$32.00</em></p>
            
         
          
          
        </div>
        <div className="plat2">
          <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
          <p className="o"><strong>FISH ROYALE  </strong><br />
          half dozen layers on top of which a 7" warm & toasted bun, lettuce, fish patty, Tartar Sauce and a soft bun at the base<br />
            <em>$40.00</em></p>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
        <div className="plat3">
          <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>
          <p className="o"><strong>MUSHROOM XXLr</strong><br />
          flame-grilled beef patties, topped with  special mushroom sauce, served on a sesame seed bun<br />
            <em>$45.00</em></p>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
        <div className="plat3">
          <a className="photo3"><img className="photo" src={img4} alt="raspberry-oatmeal-breakfast-bars " /></a>
          <p className="o"><strong>DOUBLE BARBECUE XXLr</strong><br />
          fire-grilled beef patties topped with tasty BBQ sauce and melted cheese<br />
            <em>$38.00</em></p>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
        
        
      </div>
    

    );
};
export default Lunch;