import React from 'react';
// import {Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.jpg';

class Navbar extends React.Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <img src={logo} className="App-logo" alt="logo" align="left"/>
      <ul className = "Navbar-nav">
       <li className= "NavItem active">
       <a classname="nav-link"/><Link to="/">Home</Link>
       </li>
       <li className= "NavItem">
       <Link to="/about">About</Link>
       </li>
       <li className = "NavItem"><Link to="/services">services</Link></li>
       <li className ="NavItem"><Link to="/client">Client</Link></li>
      </ul>
      </nav>
      </div>
      )
  }
} 



export default Navbar