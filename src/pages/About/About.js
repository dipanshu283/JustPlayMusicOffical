import React from 'react'
import Ourteam from './Ourteam';
import Collaborate from "./Collaborate"
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
    <div className="home_main contactmain aboutmain">
    <h2 className="main_name main_heading"> Just Play Music </h2>

    </div>

    <div className="contact_wrapper about_wrapper">
        <h1 className="contact_heading">
          <span className="thin">ABOUT</span> Us
        </h1>

        <p className="ourteamheading">Our story</p>

        <p className="paraa">
          JUST PLAY MUSIC Production have stepped ahead to help several artists
          to showcase their talent and reach to a broader platform of audience.
          JUST PLAY MUSIC Production is a Punjabi , hindi music production
          company led by the team members namely, Aksh Sawarne (Owner), Guru
          Mankan (Co-Owner), Himanshu Sahu (Producer ,Head Management) and Karan
          Juneja (Manager). Commencing our projects from 2019, we have come so
          far to establish our name in the field of music production. We have an
          aim to give favourable opportunities to new talents. Keeping this
          goal, we have launched several shining stars in the field of music.
        </p>
<p className='paraa'>
We believe that Punjabi music industry should be flourished throughout the developed world. We value the new talents and also let the whole world to recognise such faces for their superior talent.</p><p className='paraa'>
We are a community of esteemed and creative folks eager to inspire new talents and support their artistic work to be appreciated by the worldwide audience.
We are a home to an array of incredible and contemporary work of talented music artists. Our team members work with a positive conscience to put their utmost efforts and bring up the soul to the extraordinary results.</p><p className='paraa'>
</p><p className='paraa'>
 It’s our pride to witness that our hard work has resulted in the fruitful outcomes.</p>


        <Ourteam />
        <Collaborate/>

        <NavLink className="nav-link" to="/JustPlayMusicOffical">
          <div className="seemore" style={{ color: "#b8a644" , marginBottom:"25px" }}>
            <span style={{ marginRight: "10px" }}>Go Back To</span><i 
                className="fas fa-home" style={{ color: "#b8a644"}}>
                </i> Home Page
          </div>
        </NavLink>
      </div>
   
      </>
  )
}
export default About;