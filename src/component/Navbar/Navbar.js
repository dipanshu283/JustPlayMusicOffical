import React, { useState } from "react";
import "./Navbar.css";
import { sideBarData } from "./Navitems";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {IconContext} from "react-icons"

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const logo = require("./justplaymusic.png");

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/JustPlayMusicOffical" exact>
        <img src={logo} alt="logo" width="50px" style={{marginLeft:"20px"}}/>


      </NavLink>

      <IconContext.Provider  value={{color:"#fff"}}>

      <div className="navbarr">
        <NavLink className="menu-bars" to="# ">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavLink>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} style={{zIndex:"3"}}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </NavLink>
          </li>

          {sideBarData.map((item , index)=>{

            return(
              <li key={index} className={item.cNmae}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })}

        </ul>
      </nav>
      </IconContext.Provider>

       <button 
        className="navbar-toggler"
        type="button" data-toggle="collapse" aria-label="Toggle navigation">
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
                </i> <span className='coloor'>Home</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" exact>
                <i 
                className="far fa-address-book">
                </i> <span className='coloor'>Portfolio</span>
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i 
                className="far fa-clone">
                </i> <span className='coloor'>About Us</span>
              </NavLink>
            </li>
       
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-copy">
                </i> <span className='coloor'>Contact Us</span>
              </NavLink>
            </li>
        </ul>
      </div> 
    </nav>
  );
};
export default Navbar;
