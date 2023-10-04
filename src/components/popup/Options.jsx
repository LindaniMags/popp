import React from "react";
import close from "./images/cancel.png";
import { Link } from "react-router-dom";
import { LuBedDouble } from "react-icons/lu";
import { RiShieldUserLine } from "react-icons/ri";
import { MdOutlineAttractions } from "react-icons/md";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { MdOutlineCarRental } from "react-icons/md";

const Options = () => {
  return (
    <div className="container opt-con">
      <div className="options">
        <div className="xbtn">
          <Link to="/home">
            <img src={close} alt="close" />
          </Link>
        </div>

        <div className="items">
          <Link to="/form">
            <div className="item">
              <RiShieldUserLine className="opt-icons" />
              <h2>Travel insurance</h2>
            </div>
          </Link>
          <Link to="/form">
            <div className="item">
              <LuBedDouble className="opt-icons" />
              <h2>Hotel</h2>
            </div>
          </Link>
          <Link to="/form">
            <div className="item">
              <MdOutlineAttractions className="opt-icons" />
              <h2>Attractions</h2>
            </div>
          </Link>
          <Link to="/form">
            <div className="item">
              <MdOutlineAirplanemodeActive className="opt-icons" />
              <h2>Flights</h2>
            </div>
          </Link>
          <a
            href="https://lindanimags.github.io/carland/"
            rel="noopener"
            target="_blank"
          >
            <div className="item">
              <MdOutlineCarRental className="opt-icons" />
              <h2>Car Rental</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
