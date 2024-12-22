import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ATRDay1.css";

function ATRDay1() {
  const [selectedHero, setSelectedHero] = useState(""); // Track selected hero

  const heroRecords = {
    
    "Mahesh Babu": {
      "Nizam": ["Dookudu", "Businessman", "Aagadu"],
      "UA": ["Dookudu", "Businessman", "SLN"],
      "Ceeded": [],
      "Krishna": ["Dookudu", "Businessman"],
      "Guntur": ["Dookudu", "Businessman", "Aagadu"],
      "Nellore": [],
      "East": ["Dookudu", "Businessman", "Seethamma Vakitlo Sirimalle Chettu","1 Nenokkadine"],
      "West": ["Dookudu", "Businessman", "Aagadu"]
    },
    "NTR": {
      "Nizam": ["Oosaravelli", "RRR"],
      "UA": ["Yamadonga", "Oosaravelli", "Dhammu", "Janatha Garage", "RRR"],
      "Ceeded": ["Yamadonga", "Adhurs", "Oosaravelli", "Dhammu", "Baadshah", "RRR"],
      "Krishna": ["Oosaravelli", "Janatha Garage", "RRR"],
      "Guntur": ["Adhurs", "Oosaravelli", "Dhammu", "Baadshah", "JG", "RRR"],
      "Nellore": ["Yamadonga", "Baadshah", "RRR"],
      "East": ["Adhurs", "Oosaravelli", "Baadshah", "Janatha Garage"],
      "West": ["Adhurs", "Oosaravelli", "Dhammu"],
   
    },
    "Prabhas": {
      "Nizam": ["Baahubali ", "Baahubali 2", "Saaho"],
      "UA": ["Baahubali", "Baahubali 2"],
      "Ceeded": ["Baahubali", "Baahubali 2"],
      "Krishna": ["Baahubali", "Baahubali 2"],
      "Guntur": ["Baahubali", "Baahubali 2"],
      "Nellore": ["Baahubali", "Baahubali 2", "Saaho"],
      "East": ["Baahubali", "Baahubali 2"],
      "West": ["Baahubali", "Baahubali 2"]
    },
    "Pawan Kalyan": {
      "Nizam": ["Jalsa", "Cameraman Gangatho Rambabu", "Atharintiki Daaredi", "Bheemla Nayak"],
      "UA": ["Jalsa", "Puli", "Cameraman Gangatho Rambabu", "Sardaar Gabbar Singh", "KTM"],
      "Ceeded": [],
      "Krishna": ["Jalsa", "Puli", "Atharintiki Daaredi", "Gabbar SinghS", "Sardaar Gabbar Singh"],
      "Guntur": ["Atharintiki Daaredi", "Katamarayudu"],
      "Nellore": ["Atharintiki Daaredi", "Katamarayudu"],
      "East": ["Gabbar Singh", "AAtharintiki DaarediD", "Sardaar Gabbar Singh", "KTM"],
      "West": ["Gabbar Singh", "AAtharintiki DaarediD", "Sardaar Gabbar Singh"]
    },
    "Allu Arjun": {
        "Nizam": ["Pushpa","Pushpa 2"],
        "UA": [],
        "Ceeded": [],
        "Krishna": [],
        "Guntur": [],
        "Nellore": [],
        "East": [],
        "West": []
      },
      "Ramcharan": {
        "Nizam": ["Magadheera", "RRR"],
        "UA": ["Magadheera", "Nayak", "RRR"],
        "Ceeded": ["Chitutha", "Magadheera", "Racha", "RRR"],
        "Krishna": ["Racha", "RRR"],
        "Guntur": ["Magadheera", "Racha", "RRR"],
        "Nellore": ["Magadheera", "Racha", "Nayak", "RRR"],
        "East": ["Magadheera", "Racha", "Yevadu"],
        "West": ["Racha", "Magadheera", "Nayak"]
      }
  };

  const handleSelection = (event) => {
    setSelectedHero(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="hero-select" className="dropdown-label">
            Select a hero:
          </label>
          <select
            id="hero-select"
            className="dropdown-select"
            value={selectedHero}
            onChange={handleSelection}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            {Object.keys(heroRecords).map((hero) => (
              <option key={hero} value={hero}>
                {hero}
              </option>
            ))}
          </select>
        </div>

        {selectedHero && (
          <div className="records-table">
            <h2>{selectedHero}</h2>
            <p>ATR Day1 records are displayed below.</p>
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Movies</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(heroRecords[selectedHero]).map((region) => (
                  <tr key={region}>
                    <td>{region}</td>
                    <td>{heroRecords[selectedHero][region].join(", ")}</td>
                    <td>{heroRecords[selectedHero][region].length}</td>
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

export default ATRDay1;