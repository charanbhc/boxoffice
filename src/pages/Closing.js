import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Closing.css";
import SVSC1 from "../assets/SVSC_APTGDay1.jpeg";
import SVSC2 from "../assets/SVSC_WW.jpeg"; // Add more images as needed

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function WW() {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [currentSVSC, setCurrentSVSC] = useState(0);

  const SVSCImages = [SVSC1, SVSC2];

  const movieCollections = {
    SVSC: [
      { region: "AP Share", collections: "6.78Cr(9.8cr gross)" },
  
      { region: "USA", collections: "$564k(3.1Cr Gross)" },
      { region: "Total WW Collections", collections: "12.9Cr Gross" }
    ],
   
  };
  const handleSelection = (event) => {
    setSelectedMovie(event.target.value);
    setCurrentSVSC(0); // Reset to first image when new movie is selected
  };

  const nextImage = () => {
    setCurrentSVSC((prev) => (prev + 1) % SVSCImages.length);
  };

  const prevImage = () => {
    setCurrentSVSC((prev) => (prev - 1 + SVSCImages.length) % SVSCImages.length);
  };

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="movie-select" className="dropdown-label">
            Select a movie:
          </label>
          <select
            id="movie-select"
            className="dropdown-select"
            value={selectedMovie}
            onChange={handleSelection}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {Object.keys(movieCollections).map((movie) => (
              <option key={movie} value={movie}>
                {movie}
              </option>
            ))}
          </select>
        </div>

        {selectedMovie && (
          <div className="records-table">
            <h2>{selectedMovie}</h2>
            <p>World Wide</p>
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Collections</th>
                </tr>
              </thead>
              <tbody>
                {movieCollections[selectedMovie].map((record, index) => (
                  <tr key={index}>
                    <td
                      style={
                        record.region === "AP-TG Total" ||
                        record.region === "Total WW Collections"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region === "AP-TG Total" ||
                        record.region === "Total WW Collections"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.collections}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          
          </div>
        )}
      </div>
    </div>
  );
}

export default WW;
