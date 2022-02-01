import Home from "./pages/home";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Menu from "./pages/menu";
import Break from "./pages/Break";
import Lunch from "./pages/lunch";
import Dinner from "./pages/dinner";
import Contact from "./pages/Contact";
import Order from "./pages/order";


import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import "./style/tout.css"
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'




function App() {
  return ( 
  <div className="brows">
    
    <BrowserRouter>
    <Switch>
    
      <Route path="/" exact component={Home} />
      <Route path="/menu" exact component={Menu} />
      <Route path="/reservation" exact component={Reservation} />
      <Route path="/about" exact component={About} />
      
      <Route path="/lunch" exact component={Lunch} />
     < Route path="/breakfast" exact component={Break} />
      <Route path="/dinner" exact component={Dinner} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/order" exact component={Order} />
      
    </Switch>
    </BrowserRouter></div>
  );
}

export default App;



