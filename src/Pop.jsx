import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Banner from "./components/popup/Banner";
import Options from "./components/popup/Options";
import Itinerary from "./components/popup/Itinerary";
import Processing from "./components/popup/Processing";
import Form from "./components/popup/Form";

// Popup component
function Pop({ isOpen, handleClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup">
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="banner" element={<Banner />} />
        <Route path="options" element={<Options />} />
        <Route path="processing" element={<Processing />} />
        <Route path="itinerary" element={<Itinerary />} />
      </Routes>
      <div className="popup_inner">
        <Link to="/">
          <button onClick={handleClose}>Close Popup</button>
        </Link>
      </div>
    </div>
  );
}

export default Pop;
