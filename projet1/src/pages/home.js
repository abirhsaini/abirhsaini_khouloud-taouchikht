import Navigation from '../component/navigation';
import "../style/index.css";
import "../style/reservation.css";
import "../style/index.css";
import "../style/home.css";

import Footer from "../component/Footer";

import img from "../assets/image/restaurant-open-sign.jpg";
import img2 from "../assets/image/Pur-Restaurant-Paris.jpg";

const Home = () => {
    return ( 
    <div className = "home" >
        <div className = 'header' >
        <Navigation />
        </div> <div className = 'h2' >

        <div className = "rectangle" >
        <div class="d-flex flex-row">
           <div class="p-2"><img className='photo' src={img} alt='granola' /></div>
           <div class="p-2"><p className = "a" > open time: 
           </p> <p className = 'ab' > Monday– Friday… 11 am– 3 pm <br/> Saturday… 11 am– <br/> 11 pm sunday… 11 am– 12 pm </p>
        </div>
           
  
            </div>
        
        
        </div> <div className = 'rectangle2' >
        <div class="d-flex flex-row">
           <div class="p-2"><img className='photo' src={img2} alt='granola' /></div>
           <div class="p-2"><p> Quality Restaurant <br /> Fresh Food <br /> Good Service </p></div>
        </div>
         
        </div>

        </div>
        <Footer/> 

        </div>
        

    );
}
export default Home;