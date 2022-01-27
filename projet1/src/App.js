import Home from "./pages/home";
import About from "./pages/about";
import Reservation from "./pages/reservation";
import Menu from "./pages/menu";
import Ordenonline1 from "./pages/Ordenonline1";
import {BrowserRouter ,Switch ,Route} from "react-router-dom";
import "./style/tout.scss"
import Orderonline2 from "./pages/orderonline2";


function App() {
  return ( <div className="brows">
    <BrowserRouter>
    <meta name="color-scheme" content="dark light"></meta>
    <Switch>
      
      <Route path="/menu" exact component={Menu} />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/reservation" exact component={Reservation} />
      <Route path="/orderonline/myorder" exact component={Orderonline2} />
      <Route path="/orderonline/myorder2" exact component={Ordenonline1} />
      
    </Switch>
    </BrowserRouter></div>
  );
}

export default App;



