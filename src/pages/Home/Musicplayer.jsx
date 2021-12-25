import React, { useState } from "react";
import "./Musicplayer.css";
import intro from "./Mumtaaz.mp3";
import ListOfNewRelease from "./NewRelease";

function Musicplayer(props) {
  let songg = new Audio(intro);
  const [playsong, setplaysong] = useState(false);
  const [playbutton, setplaybutton] = useState("play");
  const [anime, setanime] = useState("");

  return (
    <>
      {ListOfNewRelease.map((song, index) => {

        const funcplay = () => {
          setplaysong(true);
          {/* song.intro.play(); */}
           songg.play();

          setplaybutton("square");
          console.log(playbutton);
          setanime("anime");
        };

        const funcpause = () => {
          setplaysong(false);
          {/* song.intro.pause(); */}
          songg.pause();
          setplaybutton("play");
          console.log(playbutton);
          setanime("");
        };

        const playy = () => {
          playsong ? funcpause() : funcplay();
        };

        return (
          <>
            <div key={song.Link_index} className="musicplayerwrapper">
              <h2 className="musictitle">{song.Title}</h2>
              <p className="musicartist">{song.FtBy}</p>
              <div className={`musciplayerimgdiv ${anime}`}>
                <a href={song.Link} rel="noreferrer" target="_blank">
                  {" "}
                  <img src={require(`${song.Img}`)} alt="img" />{" "}
                </a>
              </div>

              <i
                className={`fas playclass fa-${playbutton}`}
                onClick={playy}
              ></i>

              <p className="fullsong"> To listen full song tab above image. </p>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Musicplayer;
