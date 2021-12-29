import React, { useState } from "react";
import "./Musicplayer.css";
import intro from "./mumtaznewintro.m4a";

function Musicplayer(props) {
  let songg = new Audio(intro);
  const [playsong, setplaysong] = useState(false);
  // const [playbutton, setplaybutton] = useState("play");
  const [anime, setanime] = useState("");
  const funcplay = () => {
    setplaysong(true);
    songg.play();

    // setplaybutton("square");
    // console.log(playbutton);
    setanime("anime");
  };

  const funcpause = () => {
    setplaysong(false);
    songg.pause();
    // setplaybutton("play");
    // console.log(playbutton);
    setanime("");
  };

  return (
    <>
      <div className="musicplayerwrapper">
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
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}

          >
        <i
          className={`fas playclass fa-play`}
        ></i>
          </a>

        <p className="fullsong"> To listen full song tab play icon. </p>
      </div>
    </>
  );
}

export default Musicplayer;
