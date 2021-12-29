import React from "react";
import "./ourteam.css";
import { TeamMember } from "./TeamMember";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function Ourteam(props) {
  const insta = require("./imginsta.png");
  return (
    // <div className="ourteamwrapper">
    <>
      <p className="ourteamheading"
         data-aos="fade-right"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="1500"
          data-aos-delay="0">the team</p>

      <div className="memberwrapper">
        {TeamMember.map((member, index) => {
          return (
            <div key={index}
              data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-once="false"
          data-aos-duration="1500"
          data-aos-delay="0"
             className="memberbox">
              <img src={member.img} width="300px" height="400px" alt="" />
              <h5 className="m_name">
                {member.name}
                <a href={member.instaid} target="_blank" rel="noreferrer" >
                <img
                className="insta"
                  src={insta}
                  alt=""
                  width="20px"
                  height="20px"
                  style={{ marginBottom: "6px", marginLeft: "8px" }}
                />
                </a>
              </h5>
              <p className="m_profession"> {member.profession} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Ourteam;
