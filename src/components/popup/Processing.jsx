import React from "react";
import { Link } from "react-router-dom";

const Processing = () => {
  return (
    <div className=" container opt-con pros-con">
      <div className="process-con">
        <h1>We have begun creating your well-rounded itinerary</h1>
        <div className="process-btns">
          <Link to="/itinerary">
            <button className="btns">Preview Itinerary</button>
          </Link>
          <Link to="/options">
            <button className="btns">Continue Planning</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Processing;
