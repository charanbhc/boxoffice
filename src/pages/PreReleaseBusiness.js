import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./PreReleaseBusiness.css";

function PreReleaseBusiness() {
  const [selectedMovie, setSelectedMovie] = useState(""); // Default selection

  const movieCollections = {
    RRR: [
      { region: "Nizam", collections: "70Cr" },
      { region: "Ceeded", collections: "37Cr" },
      { region: "UA", collections: "22Cr" },
      { region: "East", collections: "14Cr" },
      { region: "West", collections: "12Cr" },
      { region: "Guntur", collections: "15Cr" },
      { region: "Krishna", collections: "13Cr" },
      { region: "Nellore", collections: "8Cr" },
      { region: "AP-TG Total", collections: "191CR" },
      { region: "KA", collections: "41Cr" },
      { region: "Tamilnadu", collections: "35Cr" },
      { region: "Kerala", collections: "9Cr" },
      { region: "Hindi", collections: "92Cr" },
      { region: "ROI", collections: "8Cr" },
      { region: "OS", collections: "75Cr" },
      { region: "Total WW", collections: "451CR" }
    ],
    
    Salaar: [
      { region: "Nizam", collections: "60Cr" },
      { region: "Ceeded", collections: "24Cr" },
      { region: "UA", collections: "17.20Cr" },
      { region: "East", collections: "11Cr" },
      { region: "West", collections: "8.20Cr" },
      { region: "Guntur", collections: "10.20Cr" },
      { region: "Krishna", collections: "8Cr" },
      { region: "Nellore", collections: "5.40Cr" },
      { region: "AP-TG Total", collections: "144CR" },
      { region: "KA", collections: "30Cr" },
      { region: "Tamilnadu", collections: "12Cr" },
      { region: "Kerala", collections: "6Cr" },
      { region: "Hindi", collections: "75Cr" },
      { region: "ROI", collections: "3Cr" },
      { region: "OS", collections: "75Cr" },
      { region: "Total WW", collections: "345CR" }
    ],
    GunturKaaram: [
      { region: "Nizam", collections: "42Cr" },
      { region: "Ceeded", collections: "13.75Cr" },
      { region: "UA", collections: "14Cr" },
      { region: "East", collections: "8.6Cr" },
      { region: "West", collections: "6.5Cr" },
      { region: "Guntur", collections: "7.65Cr" },
      { region: "Krishna", collections: "6.50Cr" },
      { region: "Nellore", collections: "4Cr" },
      { region: "AP-TG Total", collections: "102CR" },
      { region: "KA+ROI", collections: "9Cr" },
      { region: "OS", collections: "20Cr" },
      { region: "Total WW", collections: "132CR" }
    ],
    Devara: [
      { region: "Nizam", collections: "44Cr" },
      { region: "Ceeded", collections: "22Cr" },
      { region: "UA", collections: "12.40Cr" },
      { region: "East", collections: "7.75Cr" },
      { region: "West", collections: "6.50Cr" },
      { region: "Guntur", collections: "8.50Cr" },
      { region: "Krishna", collections: "7.20Cr" },
      { region: "Nellore", collections: "4.20Cr" },
      { region: "AP-TG Total", collections: "112.55CR" },
      { region: "KA", collections: "16Cr" },
      { region: "Tamilnadu", collections: "6Cr" },
      { region: "Kerala", collections: "1Cr" },
      { region: "Hindi+ROI", collections: "20Cr" },
      { region: "OS", collections: "27Cr" },
      { region: "Total WW", collections: "182.25CR" }
    ],
    Kalki: [
      { region: "Nizam", collections: "65Cr" },
      { region: "Ceeded", collections: "27Cr" },
      { region: "UA", collections: "21Cr" },
      { region: "East", collections: "14Cr" },
      { region: "West", collections: "10Cr" },
      { region: "Guntur", collections: "12Cr" },
      { region: "Krishna", collections: "12Cr" },
      { region: "Nellore", collections: "7Cr" },
      { region: "AP-TG Total", collections: "168CR" },
      { region: "KA", collections: "25Cr" },
      { region: "Tamilnadu", collections: "16Cr" },
      { region: "Kerala", collections: "6Cr" },
      { region: "Hindi+ROI", collections: "85Cr" },
      { region: "OS", collections: "70Cr" },
      { region: "Total WW", collections: "370CR" }
    ],
    Pushpa2: [
      { region: "Nizam", collections: "100Cr" },
      { region: "Ceeded", collections: "30Cr" },
      { region: "UA", collections: "23Cr" },
      { region: "East", collections: "14.40Cr" },
      { region: "West", collections: "10.80Cr" },
      { region: "Guntur", collections: "15.20Cr" },
      { region: "Krishna", collections: "12.40Cr" },
      { region: "Nellore", collections: "7.20Cr" },
      { region: "AP-TG Total", collections: "213CR" },
      { region: "KA", collections: "32Cr" },
      { region: "Tamilnadu", collections: "52Cr" },
      { region: "Kerala", collections: "20Cr" },
      { region: "Hindi+ROI", collections: "200Cr" },
      { region: "OS", collections: "100Cr" },
      { region: "Total WW", collections: "617CR" }
    ]
  };
  
  console.log(movieCollections);
  

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
            <p>Pre Release Business</p>
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
                        record.region === "AP-TG Total" || record.region === "Total WW"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region === "AP-TG Total" || record.region === "Total WW"
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

export default PreReleaseBusiness;
