import "./AboutContetStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/lilac.jpeg"
import React2 from "../assets/IMG_7704.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Siapa Saya?</h1>
        <p>Saya adalah mahasiswa. Saya membuat responsive secure website for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default AboutContent