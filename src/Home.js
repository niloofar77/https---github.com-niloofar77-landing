import React from "react";
import { Navbar } from "./Components/Navbar";
import bannerBackground from "./Assets/home-banner-background.png";
import bannerImage from "./Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
export const Home = () => {
  return (
    <div className="Home-container">
      <Navbar></Navbar>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={bannerBackground}></img>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your faviorite food delivered hot &Fresh
          </h1>
          <p className="primary-text">lkkkkkk</p>
          <button className="secondary-button">
            Order now
            <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={bannerImage}></img>
        </div>
      </div>
    </div>
  );
};
