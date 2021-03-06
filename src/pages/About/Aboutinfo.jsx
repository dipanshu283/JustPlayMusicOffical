import React from "react";
import Ourteam from "./Ourteam";
import "./About.css";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Aboutinfo(props) {
  return (
    <>
      <div className="contact_wrapper about_wrapper">
        <h1 className="contact_heading">
          <span className="thin">ABOUT</span> Us
        </h1>

        <p
          className="ourteamheading"
          data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="1500"
          data-aos-delay="0"
        >
          Our story
        </p>

        <p
          className="paraa"
          data-aos="fade-left"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="1500"
          data-aos-delay="0"
        >
          JUST PLAY MUSIC Production have stepped ahead to help several artists
          to showcase their talent and reach to a broader platform of audience.
          JUST PLAY MUSIC Production is a Punjabi , hindi music production
          company led by the team members namely, Aksh Sawarne (Owner), Himanshu
          Sahu (Co-Owner), . Commencing our projects from 2019, we have come so
          far to establish our name in the field of music production. We have an
          aim to give favourable opportunities to new talents. Keeping this
          goal, we have launched several shining stars in the field of music.
        </p>
        <div className="parashowhide">
          <p
            className="paraa"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
          >
            We believe that Punjabi music industry should be flourished
            throughout the developed world. We value the new talents and also
            let the whole world to recognise such faces for their superior
            talent.
          </p>
          <p
            className="paraa"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
          >
            We are a community of esteemed and creative folks eager to inspire
            new talents and support their artistic work to be appreciated by the
            worldwide audience. We are a home to an array of incredible and
            contemporary work of talented music artists. Our team members work
            with a positive conscience to put their utmost efforts and bring up
            the soul to the extraordinary results.
          </p>
          <p
            className="paraa"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
          ></p>
          <p
            className="paraa"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="1500"
            data-aos-delay="0"
          >
            It???s our pride to witness that our hard work has resulted in the
            fruitful outcomes.
          </p>
        </div>

        <NavLink
          className="nav-link readmore "
          to="/about"
          style={{ margin: "20px", borderRadius: "9px" }}
          exact
        >
          <div
            className="seemore btnshowhide"
            data-aos="flip-down"
            data-aos-easing="ease"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="0"
            style={{ color: "#b8a644" }}
          >
            <span style={{ margin: "18px" }}>Read More</span>
          </div>
        </NavLink>

        <Ourteam />
      </div>
    </>
  );
}

export default Aboutinfo;
