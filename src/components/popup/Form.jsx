import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Itinerary.module.css";
import { BiSearchAlt } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [guest, setGuest] = useState(null);

  const [content, setContent] = useState("CONTENT");
  return (
    <div className={styles.form_container}>
      <div className={styles.form_elements}>
        <div className={styles.place}>
          <label>Location</label>
          <input
            type="text"
            placeholder="place"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className={styles.check}>
          <p>Check-in</p>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className={styles.check}>
          <p>Check-out</p>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className={styles.search_con}>
          <div className={styles.guests}>
            <p>Who</p>
            <input
              type="text"
              placeholder="Guests"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
          </div>
          <div className={styles.search}>
            <BiSearchAlt />
            <button className={styles.button}>Search</button>
          </div>
        </div>
      </div>
      <div className={styles.sam}>
        <h1>Summary</h1>
        <div>
          <h3>Location: </h3>
          <p>{location}</p>
        </div>
        <div>
          <h3>Check-in: </h3>
          <p>{from}</p>
        </div>
        <div>
          <h3>Check-out: </h3>
          <p>{to}</p>
        </div>
        <div>
          <h3>Guests: </h3>
          <p>{guest}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
