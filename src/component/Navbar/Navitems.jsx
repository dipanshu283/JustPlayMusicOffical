import React from "react";
import *as FaIcons from "react-icons/fa"
import *as AiIcons from "react-icons/ai"
import *as IoIcons from "react-icons/io"


export const sideBarData = [

    {
        title:'Home',
        path :'/JustPlayMusicOffical',
        icon:<AiIcons.AiFillHome/>,
        cNmae :"nav-text"
    },
    {
        title:'Portfolio',
        path :'/portfolio',
        icon:<FaIcons.FaCartPlus/>,
        cNmae :"nav-text"
    },
    {
        title:'About Us',
        path :'/about',
        icon:<IoIcons.IoMdPeople/>,
        cNmae :"nav-text"
    },
    {
        title:'Contact Us',
        path :'/contact',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cNmae :"nav-text"
    },



]