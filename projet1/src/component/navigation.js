import React from 'react';
import { NavLink } from 'react-router-dom';
import "../style/tout.css";
import { Navbar, NavbarBrand} from 'react-bootstrap';
import ReorderIcon from "@material-ui/icons/Reorder"

const Navigation = () => {
   
    return (
        <div className="Navigation">
            <Navbar>

            <div  className="container-fluid">
            <NavbarBrand className="myRed">
                
            <NavLink className={"youfirst"} exact to="/" activeClassName='nan-active' >you first </NavLink>
            
            
            
            <NavLink  className={"exo"} exact to="about" activeClassName='nan-active'> about us </NavLink>
            <NavLink className={"exo"} exact to="Contact" activeClassName='nan-active'> contact </NavLink>
           
            
            <NavLink className={"exo"} exact to="reservation" activeClassName='nan-active'> reservation </NavLink>
            <NavLink className={"exo"} exact to="menu" activeClassName='nan-active>'>menu</NavLink>
            <NavLink className={"exo"} exact to="/" activeClassName='nan-active'>home</NavLink>
            </NavbarBrand>
            </div>
            </Navbar>
        </div>
    );
};

export default Navigation;