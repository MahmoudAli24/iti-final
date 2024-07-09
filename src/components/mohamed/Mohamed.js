import React from "react";
import "./Mohamed.css";
import visa from "../../assets/mohamed/img-3.jpeg";
import apple from "../../assets/mohamed/img-6.jpeg";
import logo3 from "../../assets/mohamed/img-1.jpeg";
import logo4 from "../../assets/mohamed/img-9.jpeg";
import logo5 from "../../assets/mohamed/img-4.jpeg";
import logo6 from "../../assets/mohamed/img-8.jpeg";
import img5 from "../../assets/mohamed/img-5.jpeg";
import img2 from "../../assets/mohamed/img-7.jpeg";

function mohamed() {
  return (
    <div>
      <div className="main">
        <p
          style={{ fontSize: "60px", fontWeight: "bold", paddingLeft: "80px" }}
        >
          <span style={{ color: "darkblue" }}>
            For Your Website With <br />
            CMS
          </span>{" "}
          <span className="underlined-text">Agency</span>
        </p>
        <p />
        <p style={{ fontSize: "24px", paddingLeft: "80px" }}>
          We Help Businesses Create And Manage Their
          <br />
          Online Presence
        </p>
        <div className="buttons">
          <button className="contact-button">Contact Us</button>
          <button className="contact-button">
            <i className="fa-solid fa-play fa-xs" />
            &nbsp;Watch Videos
          </button>
        </div>
        <div className="contact-image">
          <img src={img2} alt="img" className="small-image" />
        </div>
        <div className="partners">
          <p>Our Trusted Partner</p>
          <div className="partner-logos">
            <img src={visa} alt="Logo 1" />
            <img src={apple} alt="Logo 2" />
            <img src={logo3} alt="Logo 3" />
            <img src={logo4} alt="Logo 4" />
            <img src={logo5} alt="Logo 5" />
            <img src={logo6} alt="Logo 6" />
          </div>
        </div>
        <div className="photo-text-section">
          <img src={img5} className="section-photo" />
          <div className="section-text">
            <h2 style={{ color: "darkblue" }}>
              We Help You <br />
              The Company Growth
            </h2>
            <p>
              Working With CMS Agency Has Been A Game Changer For Our
              <br /> Business.Our Website Traffic Has Increased Significantly
              Since
              <br /> They Took Over Our SEO Efforts."-Jane Doe,Owner Of XYZ{" "}
              <br />
              Company
            </p>
            <a href className="learn-more-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mohamed;
