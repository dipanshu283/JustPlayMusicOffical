import React  from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
// import $ from 'jquery';

const Navbar = () => {


  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
       <h2 className='main_name'> JustPlayMusic </h2>
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        // onClick={ function(){
        //   setTimeout(function(){ animation(); });
        // }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item">
              <NavLink className="nav-link " to="/JustPlayMusicOffical" exact>
                <i 
                className="fas fa-home">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-address-book">
                </i>About Us
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service" exact>
                <i 
                className="far fa-clone">
                </i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonial" exact>
                <i 
                className="far fa-chart-bar">
                </i>Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-copy">
                </i>Contact Us
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;