import React , {useState}  from "react";
import "./Contact.css";
import "./contactusy.png";
import emailjs from 'emailjs-com';
import { useRef } from "react";


const Result  = ()=>{

  return(

  <p>Your Message has successfully sent. We will contact you soon..</p>
  )
};

const Contact = () => {

  const imginsta = require("./imginsta.png");



  const FORM = useRef();
  console.log(FORM);

  const [result , showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y2lj63l', 'template_bwdxa4a', e.target, 'user_0l7ZLjVSY91iP7xoxqeKY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
    };

    setTimeout(() => {

      showResult(false)
      
    }, 4000);

  return (
    <>
      <div className="contact_wrapper">

        <h1 className="contact_heading blackbg">
          <span className="thin">CONTACT</span> Us
        </h1>

        <div className="formimg">
        <div className="wrap">
          <div className="infoo">
            <h2 className="contactfont leavefont">Contact</h2>

            <h4 className="he">
              <i className="fas fa-phone-alt"></i> PHONE
            </h4>
            <p>+91 992 xxx xxx</p>
            <p>+91 992 xxx xxx</p>
            <h4 className="he">
              <i className="far fa-envelope"></i> Email
            </h4>
            <p>info@justplaymusic.com</p>
            <p></p>
            <h4 className="he">
              <i className="fas fa-street-view"></i> ADDRESS
            </h4>
            <p>64,jail road , vijay nagar , Indore</p>
            <h4 className="he">
              <i className="fas fa-user-alt"></i> SOCIAL MEDIA
              <div>
              <a
                href="https://www.youtube.com/c/JustPlayMusicOfficial"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://instagram.com/justplaymusic.official?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={imginsta} width="25px" height="25px" style={{marginBottom:"10px"}} className="insta" alt="img"></img>
              </a>
            </div>
            </h4>
          
          </div>
          <form href={FORM} action="" onSubmit={sendEmail}>
            <div className="formword">
              <h2 className="leavefont">Leave a Message !</h2>
              <span className="spacing">Full Name</span>
              <br />
              <input
                type="text"
                className="input100"
                name="fullname"
                placeholder="Enter Your Name"
                required
              />
              <br />
              <span className="spacing">Phone Number</span>
              <br />
              <input className="input100" type="number" name="phone" placeholder="Enter Phone Number" />
              <br />
              <span className="spacing">Enter Email</span>
              <br />
              <input className="input100" type="email" name="email" placeholder="Enter Your Mail " required />
              <br />
              <span className="spacing">Message</span>
              <br />
              <textarea
                name="message"
                type="text"
                className="input100"
                placeholder="Enter Your Message"
                rows="4"
                required
              ></textarea>
              <br />
              <div>
              <button className="submitbtn"> <i className="far fa-envelope"></i> SEND MESSAGE</button>
                
                <span> {result? <Result/> :null} </span> 
      
            
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