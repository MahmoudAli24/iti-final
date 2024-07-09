import React from "react";
import "./Amira.css";

function Amira() {
  return (
    <>
      <div className="bg-container">
        <div className="pricing-plans-container">
          <h1 className="heading">Choose Your Best Plan </h1>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            mollitia nesciunt excepturi dolorem sunt quis enim omnis
            perspiciatis. Ab cupiditate dolorem aliquid illum facere
            perspiciatis exercitationem est similique excepturi totam?
          </p>
          <div className="top-buttoms">
            <button className="button-header-white">Monthly</button>
            <button className="button-header-green">Yrarly</button>
          </div>
          <br />
          <br />
          <br />
          <div className="pricing-plan-card-container">
            <div className="pricing-plan-card">
              <h2 className="Basic">BASIC</h2>
              <div className="price-container">
                <p className="price">
                  <i />
                  $50<sup className="sup-element"> /1 Month</sup>
                </p>
              </div>
              <ul className="features-list">
                <i className="fa-solid fa-bookmark"> Free Domain</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Monthly Bandwith</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSD Slorage ITB</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSI certificate</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Google Analysics</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Full Support</i>
                <br />
                <br />
              </ul>
              <button className="button-element">SELECT PLAN</button>
            </div>
            <div className="pricing-plan-card-standard">
              <h2 className="standard">STANDARD</h2>
              <div className="price-container">
                <p className="price-standard">
                  <i />
                  $100<sup className="sup-element"> /6 Month</sup>
                </p>
              </div>
              <ul className="features-list-standard">
                <i className="fa-solid fa-bookmark"> Free Domain</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Monthly Bandwith</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSD Slorage ITB</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSI certificate</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Google Analysics</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Full Support</i>
                <br />
                <br />
              </ul>
              <button className="button-element business-plan-button-element">
                SELECT PLAN
              </button>
            </div>
            <div className="pricing-plan-card">
              <h2 className="premium">PRENIUM</h2>
              <div className="price-container">
                <p className="price-premium">
                  <i />
                  $200<sup className="sup-element"> /12 Month</sup>
                </p>
              </div>
              <ul className="features-list">
                <i className="fa-solid fa-bookmark"> Free Domain</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Monthly Bandwith</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSD Slorage ITB</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> SSI certificate</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Google Analysics</i>
                <br />
                <br />
                <i className="fa-solid fa-bookmark"> Full Support</i>
                <br />
                <br />
              </ul>
              <button className="button-element">SELECT PLAN</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Amira;
