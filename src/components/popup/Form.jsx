import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="form-container">
      <form className="form">
        <div className="location input">
          <label>Location</label>
          <input
            placeholder="Place"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
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
        <Link to="/processing">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
