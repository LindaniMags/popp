import React, { useState } from "react";
import Pop from "./Pop";
import one from "./components/popup/images/1.jpg";
import two from "./components/popup/images/2.jpg";
import air from "./components/popup/images/airbnb.png";
import { BiMedal } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaKitchenSet } from "react-icons/fa6";
import { GiCookingPot } from "react-icons/gi";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guest, setGuest] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="nav">
        <img src={air} alt="logo" />
        <input type="text" placeholder="start your search" />
        <h3>sign up</h3>
      </div>
      <h2>OnTheRocksBB Guesthouse and Ocean Facing Suites</h2>
      <div className="images">
        <div className="img">
          <img src={one} alt="image" />
        </div>
        <div className="img">
          <img src={two} alt="image" />
        </div>
      </div>
      <div className="info-con">
        <div className="info">
          <div className="selection">
            <div className="select">
              <FaBed />
              <p>3</p>
            </div>
            <div className="select">
              <FaBath />
              <p>2</p>
            </div>
            <div className="select">
              <GiCookingPot />
              <p>1</p>
            </div>
          </div>
          <div className="details">
            <div className="detail">
              <BiMedal />
              <p>Superhost</p>
            </div>
            <div className="detail">
              <FaLocationDot />
              <p>Great location</p>
            </div>
            <div className="detail">
              <FaReceipt />
              <p>Free cancellation for 48 hours.</p>
            </div>
          </div>
        </div>
        <div className="input inputs">
          <div className="price">R7500.00</div>
          <div className="form-container">
            <form className="form">
              <div className="dates">
                <div className="from input">
                  <label>From</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={from}
                    onChange={(event) => setFrom(event.target.value)}
                  />
                </div>
                <div className="to input">
                  <label>To</label>
                  <input
                    placeholder="dd-mm-yyyy"
                    type="text"
                    value={to}
                    onChange={(event) => setTo(event.target.value)}
                  />
                </div>
              </div>
              <div className="guest input">
                <label>Guests</label>
                <input
                  placeholder="Number of guests"
                  type="text"
                  value={guest}
                  onChange={(event) => setGuest(event.target.value)}
                />
              </div>

              <button className="submit" onClick={togglePopup} type="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Pop isOpen={isOpen} handleClose={togglePopup} />
    </div>
  );
}
export default App;
