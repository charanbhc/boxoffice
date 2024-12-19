import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./BoxOffice.css";

function BoxOffice() {
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
      "BAAHUBALI 2015 22cr",
      "SRIMANTUDU * 2015 --cr",
      "SARDAR GABBAR SINGH * 2016 21cr",
      "KAIDHI 150 * 2017 23cr",
      "JAI LAVA KUSA * GST issue 2017 22cr",
      "BAAHUBALI 2 2017 43cr",
      "AGNATHAVASI * 2018 26.4cr",
      "ARAVINDA SAMETHA * 2018 26.6cr",
      "SAAHO * 2019 36cr",
      "SYE RAA * 2019 38cr",
      "RRR 2022 74cr",
      "SALAAR * 2023 50cr",
      "DEVARA * 2024 61cr",
      "PUSHPA 2 * 2024 69cr",
    ],
    "APTG 1st Day Top Share Movies    ": [ 
      "RRR 2022 74cr",
      "Pushpa 2 The Rule 2024 70.81CR",
      "Devara 2024 61.65CR",
      "SALAAR 2024 50.49CR",
      "Kalki 2898 AD 2024 44.86CR",
      "Baahubali2 2017 43CR",
      "Guntur Kaaram 2024 38.88CR",
      "Sye Raa Narasimha Reddy 2019 38.75Cr",
      "Saaho 2019 36.52Cr",
      "Sarkaru Vaari Paata 2022 36.01CR",
      "Adi Purush 2023 32.84Cr",
      "Sarileru Neekevvaru 2020 32.77Cr",
      "VakeelSaab 2021 32.24Cr",
      "Acharya 2022 29.50Cr",
      "Aravindha Sametha 2018 26.64Cr",
      "Bheemla Nayak 2022 26.42CR",
      "Agnyaathavaasi 2018 26.40Cr",
      "Vinaya Vidheya Rama 2019 25.99Cr",
      "Ala Vaikunthapurramuloo 2020 25.93Cr",
      "Radhe Shyam 2022 25.49Cr",
      "Veera Simha Reddy 2023 25.35CR",
      "Pushpa 2021 24.90Cr",
      "Maharshi 2019 24.68Cr",
      "BRO The Avatar 2023 23.61CR",
      "Bharat Ane Nenu 2018 23.52C",
      "Khaidi No 150 2017 23.25C",
      "Waltair Veerayya 2023 22.90CR",
      "Baahubali 2015 22.4Cr",
      "Katamarayudu 2017 22.27C",
      "Jai Lavakusa 2017 21.81Cr",
      "Sardar Gabbar Singh 2016 21.70Cr",
      "Janatha Garage 2016 20.50C"],
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

export default BoxOffice;