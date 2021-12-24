import React, { useState } from "react";
import "./Musicplayer.css";
import song from "./Mumtaaz.mp3";

function Musicplayer(props) {

    let songg =  new Audio(song);
    const [playsong, setplaysong] = useState(false);
    const [playbutton , setplaybutton] = useState("play");
    const [anime , setanime] = useState("");

    const funcplay=()=>{

        setplaysong(true);
        songg.play();
        // song.pause();

        setplaybutton("square");
        console.log(playbutton);
        setanime("anime");

    }

    const funcpause = ()=>{
        setplaysong(false);
        songg.pause();
        setplaybutton("play");
        console.log(playbutton);
        setanime("");

    }



    const play=()=>{
        (playsong)? funcpause(): funcplay();
    }
  
  return (
    <>
      <div className="musicplayerwrapper">
        <h2 className="musictitle">Mumtaaz</h2>
        <p className="musicartist">Ft. Aksh Sawarne</p>
        <div className={`musciplayerimgdiv ${anime}`}>
        <a href="https://youtu.be/Q2D5_xGXdfE?list=RDQ2D5_xGXdfE" rel="noreferrer" target="_blank" > <img src={require("./mumtaaz.png")} alt="img" /> </a>
        </div>
        {/* <audio src={require("./music.mp3")}></audio> */}

        <i className={`fas playclass fa-${playbutton}`} onClick={play}></i>

        <p className="fullsong"> To listen full song tab above image.  </p>
      </div>
    </>
  );
}

export default Musicplayer;
