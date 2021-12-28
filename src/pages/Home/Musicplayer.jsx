import React, { useState } from "react";
import "./Musicplayer.css";
import intro from "./Mumtaaz.mp3";

function Musicplayer(props) {
  let songg = new Audio(intro);
  const [playsong, setplaysong] = useState(false);
  const [playbutton, setplaybutton] = useState("play");
  const [anime, setanime] = useState("");
  const funcplay = () => {
    setplaysong(true);
    songg.play();

    setplaybutton("square");
    console.log(playbutton);
    setanime("anime");
  };

  const funcpause = () => {
    setplaysong(false);
    songg.pause();
    setplaybutton("play");
    console.log(playbutton);
    setanime("");
  };

  return (
    <>
      <div className="musicplayerwrapper">
        <h2 className="musictitle">MUMTAAZ</h2>
        <p className="musicartist">Aksh Sawarne</p>
        <div className={`musciplayerimgdiv ${anime}`}>
          <a
            href="https://youtu.be/Q2D5_xGXdfE?list=RDQ2D5_xGXdfE"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="introimg"
              src={require("./mumtaaz.png")}
              alt="img"
            />
          </a>
        </div>

        <i
          className={`fas playclass fa-${playbutton}`}
          onClick={(e) => {
            console.log(e);
            playsong ? funcpause() : funcplay();
          }}
        ></i>

        <p className="fullsong"> To listen full song tab above image. </p>
      </div>
    </>
  );
}

export default Musicplayer;
