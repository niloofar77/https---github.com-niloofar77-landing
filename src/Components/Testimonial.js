import React from "react";
import ProdfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They are saying</h1>
        <p className="primary-text">llllll</p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProdfilePic}></img>
        <p>mmmmmmmmm</p>
        <div className="testimonials-stars-container">
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
        </div>
        <h2>john Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
