import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import mail from "./images/mail.png";
import whatsapp from "./images/whatsapp.png";
import hotel1 from "./images/hotel1.png";

const Itinerary = () => {
  return (
    <div className="itinerary-con">
      <div className="ite-con">
        <h1>2 DAYS TRIP TO CAPETOWN</h1>
        <div className="data-con">
          <div className="header">
            <h2>Day 1</h2>
            <h3>12 December 2023, Tuesday</h3>
          </div>
          <div className="data">
            <div className="time-con">
              <p>11:00 am</p>
              <div className="service-con">
                <div className="service-icon">
                  <LuBedDouble />
                </div>
                <div className="dots">
                  <div className="dot">
                    <BsThreeDotsVertical />
                  </div>
                  <div className="dot">
                    <BsThreeDotsVertical />
                  </div>
                  <div className="dot">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </div>
            <div className="check-in">
              <p>Check-in at The Cape Town, Marriott Crystal Trowels</p>
              <div className="check-in-details">
                <div className="check-data">
                  <p>Room type </p>
                  <p>Suite</p>
                </div>
                <div className="check-data">
                  <p>Number of guests</p>
                  <p>1</p>
                </div>
                <div className="check-data">
                  <p>Length of stay</p>
                  <p>3 nights</p>
                </div>
              </div>
            </div>
            <div className="partner-logo">
              <img src={hotel1} alt="icon" />
            </div>
          </div>
        </div>
        <div className="iten-btns">
          <Link to="/options">
            <button className="ite-btn btns">Continue Planning</button>
          </Link>
          <Link to="/options">
            <button className="ite-btn btns">Done Planning</button>
          </Link>
        </div>
        <div className="share-con">
          <h3>Share your Itinerary with your love one(s)</h3>
          <div className="socials">
            <img src={whatsapp} alt="whatsapp" />
            <img src={mail} alt="email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
