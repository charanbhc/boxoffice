import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Movies.css";

function Movies() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const categories = {
    "Day 1 APTG - 2011": [
      "DOOKUDU 2011 --cr",
      "OOSARAVALLI 2011 --cr",
      "BUSINESSMAN 2012 --cr",
      "RACHA 2012 --cr",
      "DAMMU 2012 --cr",
      "GABBAR SINGH 2012 --cr",
      "CAMERAMAN GANGATHO RAMBABU 2012 --cr",
      "BADSHAH 2013 --cr",
      "ATTARINTIKI DAREDI 2013 --cr",
      "AAGADU 2014 --cr",
      "BAAHUBALI 2015 --cr",
      "SRIMANTUDU * 2015 --cr",
      "SARDAR GABBAR SINGH * 2016 --cr",
      "KAIDHI 150 * 2017 --cr",
      "JAI LAVA KUSA * Gross 2017 --cr",
      "BAAHUBALI 2 2017 --cr",
      "AGNATHAVASI * 2018 --cr",
      "ARAVINDA SAMETHA * 2018 --cr",
      "SAAHO * 2019 --cr",
      "SYE RAA * 2019 --cr",
      "RRR 2022 74cr",
      "SALAAR * 2023 50cr",
      "DEVARA * 2024 61cr",
      "PUSHPA 2 * 2024 69cr",
    ],
    "WW DAY 1": [],
    // Add more categories as needed
  };

  const handleSelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="category-select" className="dropdown-label">
            Select a category:
          </label>
          <select
            id="category-select"
            className="dropdown-select"
            value={selectedCategory}
            onChange={handleSelection}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="records-table">
            <h2>{selectedCategory}</h2>
            <p>* Non BB or BB2 or RRR</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Movie</th>
                  <th>Year</th>
                  <th>Collection</th>
                </tr>
              </thead>
              <tbody>
                {categories[selectedCategory].map((movie, index) => {
                  const parts = movie.split(" "); // Splitting movie details
                  const title = parts.slice(0, -2).join(" "); // Extracting title
                  const year = parts[parts.length - 2]; // Extracting year
                  const collection = parts[parts.length - 1]; // Extracting collection

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="multi-line-content">
                          {title}
                        </div>
                      </td>
                      <td>{year}</td>
                      <td>{collection}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;