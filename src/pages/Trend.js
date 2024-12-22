import React, { useState } from "react";
import Navbar from "../components/Navbar";  // Make sure Navbar is correctly referenced
import "./Trend.css";

function Trend() {
  const [someState, setSomeState] = useState(false);  // Example state management, customize as needed

  return (
    <div className="trend-container">
      <Navbar />  {/* Render Navbar */}
      <h1>Trend Page</h1>
      <p>Welcome to the Trend page!</p>
      {/* Additional content or functionality */}
    </div>
  );
}

export default Trend;
