import React , {useState} from 'react';
import Bld from '../component/breakfastlunchdessert';
import Footer from '../component/Footer';
import Navigation from '../component/navigation';
import "../style/menu.css"




const Menu = () => {
   
    const images=[{key: "1",name:"istockphoto-533645537-612x612.jpg" ,time:"breakfast"},{key: "2",name:"HummusBowl-65a0050.jpg",time:"lunch"},{key: "3" ,name:"a.jpg", time:"dinner"}];
    const map = images.map( (item)=>{

           return  <Bld name={item.name} time={item.time} />
    })
    return (
        <div >
            <div>
            <Navigation /></div>
          

            <div  id='image' className='menu' >
                {map}</div>
                <div className='footer2'>
                    <Footer />
                </div>
        </div>
    );
};

export default Menu;