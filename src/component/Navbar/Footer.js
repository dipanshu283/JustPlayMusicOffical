import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div>
        <a
          href="https://instagram.com/dipanshu__2833?utm_medium=copy_link"
          title="Dipanshu's instagram"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://in.linkedin.com/in/dipanshu-sahu-b50678202?trk=people-guest_people_search-card"
          title="Dipanshu's Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin" style={{backgroundColor:"transparent" , color:"black" , fontSize:"28px"}}></i>
        </a>
      </div>
      <p className="designby">
        Website Design & Development by
        <span className="footername"> DIPANSHU SAHU</span>
      </p>
    </div>
  );
}

export default Footer;
