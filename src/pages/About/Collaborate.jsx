import React from "react";
import { Collaboration } from "./Collaboration";
import "./ourteam.css";

function Collaborate(props) {
  const insta = require("./imginsta.png");
  return (
    // <div className="ourteamwrapper">
    <>
      <p className="ourteamheading">Collaborate Artist</p>

      <div className="memberwrapper">
        {Collaboration.map((member, index) => {
          return (
            <div key={index} data-aos="zoom-in"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="memberbox">
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

export default Collaborate;
