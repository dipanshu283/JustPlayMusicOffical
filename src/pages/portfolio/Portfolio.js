import React ,{useState} from "react";
import intro1 from "./Mumtaaz.mp3";
import "./portfolio.css"
const Portfolio = () => {
  let song1 = new Audio(intro1);
  const [playsong, setplaysong] = useState(false);
  const [playbutton, setplaybutton] = useState("play");
  const [anime, setanime] = useState("");
  const funcplay = () => {
    setplaysong(true);
    song1.play();

    setplaybutton("square");
    console.log(playbutton);
    setanime("anime");
  };

  const funcpause = () => {
    setplaysong(false);
    song1.pause();
    setplaybutton("play");
    console.log(playbutton);
    setanime("");
  };
  return (
    <>
      <div className="home_main contactmain ">
        <h1 className="main_heading">Just Play Music Offical. </h1>
      </div>
      <div className="contact_wrapper ">
        <h1 className="contact_heading">
          <span className="thin">PORTFOLIO</span>
        </h1>
    <div className="musicwrapperr">
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
      </div>
      </div>
    </>
  );
};
export default Portfolio;
