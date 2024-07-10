import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Testimonial from "./Testimonial";
import { Work } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo}></img>
        </div>
        <div className="footer-icons">
          <BsTwitter></BsTwitter>
          <SiLinkedin></SiLinkedin>
          <BsYoutube></BsYoutube>
          <FaFacebookF></FaFacebookF>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>222566777+</span>
          <span>hello@food.com</span>
          <span>hello@food.com</span>
          <span>hello@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms&conditions</span>
          <span>PrivacyPolicy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
