import React, { useEffect } from 'react'
import "./Banner.css";
import Aos from 'aos';

const Banner = () => {
  useEffect(() => {
    
    Aos.init({});

}, []);
  return (
    <div className="banner">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <div className="banner-content">
        <h2 className="banner-title" data-aos="fade-right"  data-aos-duration="1500">The Digital India</h2>
        <p className="banner-text" data-aos="fade-right"  data-aos-duration="1500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          lacus a nibh efficitur, et facilisis nisi bibendum.
        </p>
        <div className="banner-buttons">
          <button className="banner-button" data-aos="fade-right"  data-aos-duration="3000">Visit</button>
          <button className="banner-button" data-aos="fade-left"  data-aos-duration="3000">More</button>
        </div>
      </div>
      <div className="banner-image-container vert-move">
        <img
          src="https://images.squarespace-cdn.com/content/v1/62e91f051b4d461f16d033a3/d6c4ae50-71e5-42d5-bf13-5b322cc907ed/sole-proprietorship-vs-private-limited-company-image-1.jpg"
          alt="Banner Image"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
