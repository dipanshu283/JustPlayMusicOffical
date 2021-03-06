import React, { useState } from "react";
import intro1 from "./mumtaznewintro.m4a";
import intro2 from "./Jaavinanew.m4a";
import "./portfolio.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
const Portfolio = () => {
  let song1 = new Audio(intro1);
  let song2 = new Audio(intro2);
  const [playsong, setplaysong] = useState(false);
  const [playsong2, setplaysong2] = useState(false);
  // const [playbutton, setplaybutton] = useState("play");
  // const [playbutton2, setplaybutton2] = useState("play");
  const [anime, setanime] = useState("");
  const [anime2, setanime2] = useState("");
  const funcplay = () => {
    setplaysong(true);
    song1.play();

    // setplaybutton("square");
    // console.log(playbutton);
    setanime("anime");
  };

  const funcpause = () => {
    setplaysong(false);
    song1.pause();
    // setplaybutton("play");
    // console.log(playbutton);
    setanime("");
  };
  const funcplay2 = () => {
    setplaysong2(true);
    song2.play();

    // setplaybutton2("square");
    // console.log(playbutton);
    setanime2("anime");
  };

  const funcpause2 = () => {
    setplaysong2(false);
    song2.pause();
    // setplaybutton2("play");
    // console.log(playbutton);
    setanime2("");
  };
  return (
    <>
      <div className="home_main contactmain ">
        <h2 className="main_name main_heading"> Just Play Music </h2>
      </div>
      <div className="contact_wrapper ">
        <h1 className="contact_heading">
          <span className="thin">PORTFOLIO</span>
        </h1>
        <div
          className="musicwrapperr"
          style={{ marginBottom: "40px", marginTop: "40px" }}
        >
          <div
            className="musicplayerwrapper"
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
          >
            <h2 className="musictitle">MUMTAZ</h2>
            <p className="musicartist">Simarjeet Kaur , Mani Singh</p>
            <div className={`musciplayerimgdiv ${anime}`}>
              <img
                className="introimg"
                src={require("./mumtaz.png")}
                alt="img"
                onClick={(e) => {
                  console.log(e);
                  playsong ? funcpause() : funcplay();
                }}
              />
            </div>

            <a
              href="https://youtu.be/Q2D5_xGXdfE?list=RDQ2D5_xGXdfE"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
              target="_blank"
              title=" Song Youtube Link"
            >
              <i className={`fas playclass fa-play`}></i>
            </a>

            <p className="fullsong"> To listen full song tab play icon. </p>
          </div>
          <div
            className="musicplayerwrapper "
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
            style={{ marginBottom: "40px", marginTop: "40px" }}
          >
            <h2 className="musictitle">JAANI NA</h2>
            <p className="musicartist">Guru Mankan</p>
            <div className={`musciplayerimgdiv ${anime2}`}>
              <img
                className="introimg"
                src={require("./jaavinaimg.jpg")}
                alt="img"
                onClick={(e) => {
                  console.log(e);
                  playsong2 ? funcpause2() : funcplay2();
                }}
              />
            </div>
            <a
              href="https://youtu.be/N5ufpsQ56pM"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
              target="_blank"
              title=" Song Youtube Link"
            >
              <i className={`fas playclass fa-play`}></i>
            </a>

            <p className="fullsong"> To listen full song tab above image. </p>
          </div>
        </div>
        <NavLink className="nav-link" to="/JustPlayMusicOffical">
          <div
            className="seemore"
            data-aos="flip-down"
            data-aos-easing="ease"
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
};
export default Portfolio;
