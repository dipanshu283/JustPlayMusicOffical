import React from "react";
import "./Contact.css";
import "./contactusy.png";

const Contact = () => {
  // const png = require("./contactusy.png");

  return (
    <>
      <div className="home_main contactmain">
        <h1 className="main_heading">Just Play Music Offical. </h1>
      </div>
      <div className="contact_wrapper">
        <h1 className="contact_heading">
          <span className="thin">CONTACT</span> Us
        </h1>

        <div className="formimg">
        <div className="wrap">
          <div className="infoo">
            <h2 className="contactfont leavefont">Contact</h2>

            <h4 className="he">
              <i class="fas fa-phone-alt"></i>PHONE{" "}
            </h4>
            <p>+91 992 xxx xxx</p>
            <p>+91 992 xxx xxx</p>
            <h4 className="he">
              <i class="far fa-envelope"></i>Email
            </h4>
            <p>info@justplaymusic.com</p>
            <p></p>
            <h4 className="he">
              <i class="fas fa-street-view"></i>ADDRESS
            </h4>
            <p>64,jail road , vijay nagar , Indore</p>
            <div>
              <a
                href="https://www.youtube.com/c/JustPlayMusicOfficial"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-youtube"></i>
              </a>

              <a
                href="https://instagram.com/justplaymusic.official?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <form action="" onSubmit="">
            <div className="formword">
              <h2 className="leavefont">Leave a Message !</h2>
              <span className="spacing">Full Name</span>
              <br />
              <input
                type="text"
                className="input100"
                name="fullname"
                required
              />
              <br />
              <span className="spacing">Phone Number</span>
              <br />
              <input className="input100" type="number" name="phone" />
              <br />
              <span className="spacing">Enter Email</span>
              <br />
              <input className="input100" type="email" name="email" required />
              <br />
              <span className="spacing">Message</span>
              <br />
              <textarea
                name="message"
                type="text"
                className="input100"
                required
              ></textarea>
              <br />
              <div>
              <button className="submitbtn">SUBMIT</button>
              <span> </span>
              </div>
            
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
