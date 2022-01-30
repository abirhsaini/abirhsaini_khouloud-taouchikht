import React from "react";
import img from "../assets/image/ab-img2.png";
import "../style/About.css";
import "../style/index.css";

import Navigation from "../component/navigation";
import Footer from "../component/Footer";
function About() {
  return (
    <div className="about">
        <Navigation/>
      <div
        className="aboutTop"
        
      ></div>
      <div className="aboutBottom">
        
        <h1>welcome to youfirst</h1>
        <div class="d-flex flex-row">
           <div class="p-2"><img className='photo' src={img} alt='granola' /></div>
           <div class="p-2"><p>
        We would like to take this opportunity to welcome you at our restaurant. We are offering a warm, friendly atmosphere to share a meal with family and friends at any time of the day or evening. All of our dishes are made with quality fresh ingredients, it all starts with the hand-made dough and our toppings are sourced from the best local growers.
        </p></div>
        </div>
        
        
      </div>
       <Footer/> 
    </div>
  );
}

export default About;