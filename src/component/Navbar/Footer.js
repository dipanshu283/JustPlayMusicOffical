import React from "react";
import "./Footer.css";

function Footer(props) {

  return (
    <div className="footer">
    <a href="https://instagram.com/dipanshu__2833?utm_medium=copy_link" title="Dipanshu's instaId" target="_blank" rel="noreferrer">
      <i className="fab fa-instagram"></i> 
      </a>
      <p className="designby">
        Website Design & Development by<span className="footername"> DIPANSHU SAHU</span>
      </p>
    </div>
  );
}

export default Footer;
