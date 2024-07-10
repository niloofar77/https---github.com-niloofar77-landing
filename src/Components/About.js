import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground}></img>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage}></img>
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food is an importent part of balenced diet
        </h1>
        <p className="primary-text">lorem llll</p>
        <p className="primary-text">lorem llll</p>
        <div className="about-buttons-container">
          <button className="secondary-button">learn More</button>
          <buuton className="watch-video-buuton">
            <BsFillPlayCircleFill></BsFillPlayCircleFill>Watch Videos
          </buuton>
        </div>
      </div>
    </div>
  );
};
