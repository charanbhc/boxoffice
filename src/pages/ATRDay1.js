import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ATRDay1.css";

function ATRDay1() {
  const [selectedHero, setSelectedHero] = useState(""); // Track selected hero

  const heroRecords = {
    "Day 1 ": {
      "Mahesh Babu": ["DOOKUDU","BUSINESSMAN","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JAI LAVA KUSA *","ARAVINDA SAMETHA *","RRR","DEVARA *"],
      "Pawan Kalyan": ["GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150","SYE RAA *"]
    },
    "WW Day 1 ": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150"]
    },
    "$1M Movies ": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150"]
    },
    "INDUSTRY HITS & NON SSR": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150"]
    },
    "100CR SHARES": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150"]
    },
    "100CR GROSSERS": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150"]
    },
    "Mahesh Babu": {
      "Nizam": ["Athidhi", "Dookudu", "Businessman", "Aagadu"],
      "UA": ["Dookudu", "Businessman"],
      "Ceeded": [],
      "Krishna": ["Dookudu", "Businessman", "Sarileru Neekevvaru"],
      "Guntur": ["Athidhi","Dookudu", "Businessman", "Aagadu"],
      "Nellore": [],
      "East": ["Khaleja","Dookudu", "Businessman", "Seethamma Vakitlo Sirimalle Chettu","1 Nenokkadine","Aagadu",],
      "West": ["Khaleja","Dookudu", "Businessman", "Aagadu"],
      "OS": ["Khaleja","Dookudu", "Businessman", "Aagadu"]
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
            <p>Box Office data is compiled from various sources.</p>
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