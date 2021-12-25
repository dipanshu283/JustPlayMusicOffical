import React from "react";
import "./Home.css";
import Musicplayer from "./Musicplayer";
const Home = () => {
  // const mainImg = require('./mainImg.jpg');
  return (
    <>
      <div className="home_main">
        <h1 className="main_heading">Just Play Music Offical. </h1>
        {/* <p className="main_pera">
          We collaborate with artists to develop new music with an origianl
          perspective!
        </p> */}
      </div>
      <section className="featured">
        <h3 className="feature_heading">featured</h3>
        <p className="release">
          <span className="new">New</span> Releases
        </p>
        <div className="newsongswrapper">
        <Musicplayer/>
        </div>
      </section>
    </>
  );
};
export default Home;
