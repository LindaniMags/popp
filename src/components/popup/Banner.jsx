import React from "react";
import { Link } from "react-router-dom";
import hero from "./images/Rectangle 1.png";

const Banner = () => {
  return (
    <div className="container opt-con hero-con">
      <div className="modalx">
        <div className="hero">
          <div className="image">
            <img src={hero} alt="icon" />
          </div>
          <div className="text">
            <p className="larger">Would you also like to book</p>
            <div className="outer">
              <p className="line">these services</p>
              <div className="inner">
                <span>flight tickets</span>
                <span>attractions</span>
                <span>travel insurance</span>
                <span>hotel</span>
                <span>flight tickets</span>
              </div>
            </div>
            <p className="medium">while we automatically create a</p>
            <p className="small">
              <span>well-rounded itinerary </span>for you
            </p>
            <div className="banner-btns">
              <Link to="/options">
                <button className="btns">Yes</button>
              </Link>
              <Link to="/home" className="dismiss">
                Dismiss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
