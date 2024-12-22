import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./APTG.css";

function APTG() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const categories = {
    "Macherla 1st Week Gross ATRs Since 2005":
    [
      "Samba 2004 2.55L",
      "Gudumba Shankar 2004 2.61L",
      "Shankar Dada MBBS 2004 3.15L",
      "Stalin 2006 3.37L",
      "Annavaram 2006 3.22L",
      "Yamadonga 2007 3.54L",
      "Chirutha 2007 4.61",
      "Jalsa 2008 4.81L",
      "Magadheera 2009 7.5L",
      "Businessman 2012 9.21L",
      "Racha 2012 9.53L",
      "Naayak 2013 11L",
      "Yevadu 2014 12.5L",
      "Baahubali: The Beginning 2015 16.6L",
      "Baahubali: The Conclusion 2017 22L",
      "Sarileru Neekevvaru 2020 22.18L",
      "RRR 2022 35.93L"
    ],
    "Khammam City All time day1 records from 2011":[
      "Dookudu 2011 6.85L",
      "Oosaravelli 2011 8.90L",
      "Businessman 2012 9.21L",
      "Dhammu 2012 11L",
      "Baadshah 2013 13.96L",
      "Baahubali: The Beginning 2015 16.6L",
      "Nannaku Prematho 2016 18.01L",
      "Janatha Garage 2016 20.02L",
      "Baahubali 2: The Conclusion 2017 22.28L",
      "Vakeel Saab 2021 30.3L",
      "Bheemla Nayak 2022 49.9L",
      "RRR 2022 89.96L"
    ]
  

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
            <p>Box Office data is compiled from various sources.</p>
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

export default APTG;