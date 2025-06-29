import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Closing.css";




function WW() {
  const [selectedMovie, setSelectedMovie] = useState("");
  

 

  const movieCollections = {
    SVSC: [
      { region: "AP Share", collections: "6.78Cr(9.8cr gross)" },
  
      { region: "USA", collections: "$564k(3.1Cr Gross)" },
      { region: "Total WW Collections", collections: "12.9Cr Gross" }
    ],
   
  };
  const handleSelection = (event) => {
    setSelectedMovie(event.target.value);
  
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
             
              </tbody>
            </table>

          
          </div>
        )}
      </div>
    </div>
  );
}

export default WW;
