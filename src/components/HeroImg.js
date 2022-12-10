import "./HeroImgStyles.css"

import React from 'react';

import IntroImg from "../assets/IMG_7704.jpeg"
import { Link } from "react-router-dom"


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
       <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, IM A STUDENT</p>
            <h1>Mahasiswa</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg