import Navigation from '../component/navigation';
import "../style/index.scss"
import "../style/breakfast.scss"
import Produit from '../component/produit';
import img1 from '../assets/image/c.jpg';
import img2 from '../assets/image/d.jpg';
import img3 from '../assets/image/e.j';
import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rate from "../component/Rate";
import "react-bootstrap";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
const Break = () => {
  const [rating, setRating] = useState(0);

    
   
    return ( 
        
        <div className="container-md ">
            <div>
            
            
        <Navigation />
        </div>
        <div className="container">
    <nav className="navbar navbar-expand-sm navbar-dark ">
        
        <strong className="brk">our breakfast menu</strong>

        
       
        
        
    </nav>
</div>
        <div className="plat1">
          <a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a>
          <Link to="/Contact">
          <p className="o"><strong>Morning eggs</strong> <br />
            Baked Eggs with Swiss Chard and Green Olives<br />
            <em>$13.00</em></p>
            <h2>Rate me</h2>
          <p>Rating component</p>
          </Link>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} /> 
         
          
          
        </div>
        <div className="plat2">
        <Link to="/Contact">
          <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
          
          <p className="o"><strong>Granola </strong><br />
            with Figs, Almonds and Coconut<br />
            <em>$20.00</em></p>
            </Link>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
        <div className="plat3">
        <Link to="/Contact">
          <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>
          <p className="o"><strong>Raspberry Breakfast Bar</strong><br />
            Blackberries, Blueberries,Plums Peaches and nectarines<br />
            <em>$19.00</em></p>
            </Link>
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
}
export default Break;