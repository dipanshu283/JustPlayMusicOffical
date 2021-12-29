import React from "react";
import { NavLink } from "react-router-dom";
import Aboutinfo from "../About/Aboutinfo";
import Contactinfo from "../Contact/Contactinfo";
import "./Home.css";
import Musicplayer from "./Musicplayer";
const Home = () => {
  // const mainImg = require('./mainImg.jpg');

  return (
    <>
      <div className="home_main">
        {/* <h1 className="main_heading">Just Play Music Offical. </h1> */}
        <h2
          className="main_name main_heading"
          data-aos="zoom-in-down"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          Just Play Music
        </h2>
      </div>
      <section className="featured">
        <h3 className="feature_heading">featured</h3>
        <p className="release">
          <span className="new">New</span> Releases
        </p>
        <div className="newsongswrapper">
          <Musicplayer />
        </div>
        <NavLink className="nav-link" to="/portfolio" exact>
          <div className="seemore" style={{ color: "#b8a644" }}>
            <span style={{ marginRight: "18px" }}>See More From</span>
            <i
              className="far fa-address-book"
              style={{ marginRight: "6px", color: "#b8a644" }}
            ></i>
            Portfolio
          </div>
        </NavLink>
        <Aboutinfo />
        <Contactinfo />
      </section>
    </>
  );
};
export default Home;
