import React from "react";
import Contactinfo from "./Contactinfo";
import { NavLink } from "react-router-dom";

function Contact(props) {
  return (
    <>
      <div className="home_main contactmain">
        <h2 className="main_name main_heading"> Just Play Music </h2>
      </div>
      <Contactinfo />
      <div className="homepagebtncontact">
        <NavLink className="nav-link" to="/JustPlayMusicOffical">
          <div
            className="seemore"
            data-aos="flip-down"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="0"
            style={{ color: "#b8a644", marginBottom: "25px" }}
          >
            <span style={{ marginRight: "10px" }}>Go Back To</span>
            <i className="fas fa-home" style={{ color: "#b8a644" }}></i> Home
            Page
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Contact;
