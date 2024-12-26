import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./WW.css";

function WW() {
  const [selectedMovie, setSelectedMovie] = useState(""); // Default selection

  const movieCollections = {
    "RRR": [
        { region: "Nizam", collections: "111.85Cr" },
        { region: "Ceeded", collections: "51.04Cr" },
        { region: "UA", collections: "36.40Cr" },
        { region: "East", collections: "16.24Cr" },
        { region: "West", collections: "13.31Cr" },
        { region: "Guntur", collections: "18.21Cr" },
        { region: "Krishna", collections: "14.76Cr" },
        { region: "Nellore", collections: "10.50Cr(GST Inc)" },
        { region: "AP-TG Total", collections: "272.31CR(415.00CR~ Gross)" },
        { region: "KA", collections: "44.50Cr (83.40Cr Gross)" },
        { region: "Tamilnadu", collections: "38.90Cr (77.25Cr Gross)" },
        { region: "Kerala", collections: "11.05Cr (24.25Cr Gross)" },
        { region: "Hindi", collections: "134.50Cr (326Cr Gross)" },
        { region: "ROI", collections: "9.30Cr (18.20Cr Gross)" },
        { region: "OS", collections: "103.50Cr (208.30Cr Gross)" },
        { region: "Total WW Collections", collections: "614.06CR(Gross- 1152.40CR~)" }
      ],
      Devara : [
        { region: "Nizam", collections: "62.90Cr" },
        { region: "Ceeded", collections: "31.85Cr" },
        { region: "UA", collections: "18.95Cr" },
        { region: "East", collections: "10.70Cr" },
        { region: "West", collections: "8.44Cr" },
        { region: "Guntur", collections: "13.66Cr" },
        { region: "Krishna", collections: "9.32Cr" },
        { region: "Nellore", collections: "6.98Cr" },
        { region: "AP-TG Total", collections: "162.80Cr (237.55CR~ Gross)" },
        { region: "KA", collections: "18.25Cr (40CR~ Gross)" },
        { region: "Tamilnadu", collections: "4.16Cr (11.10CR~ Gross)" },
        { region: "Kerala", collections: "97L~ (2.35CR~ Gross)" },
        { region: "Hindi+ROI", collections: "34.55Cr (82CR~ Gross)" },
        { region: "OS", collections: "36.12Cr (77.05CR~ Gross) approx" },
        { region: "Total WW Collections", collections: "256.85CR (Gross - 450.05CR~)" }
      ],
     GunturKaaram : [
        { region: "Nizam", collections: "33.85Cr" },
        { region: "Ceeded", collections: "9.75Cr" },
        { region: "UA", collections: "12.65Cr" },
        { region: "East", collections: "9.80Cr" },
        { region: "West", collections: "6.00Cr" },
        { region: "Guntur", collections: "8.30Cr" },
        { region: "Krishna", collections: "6.48Cr" },
        { region: "Nellore", collections: "3.67Cr" },
        { region: "AP-TG Total", collections: "90.50CR (139.80CR~ Gross)" },
        { region: "KA+ROI", collections: "6.56Cr" },
        { region: "OS", collections: "14.75Cr***" },
        { region: "Total WW Collections", collections: "111.81CR (184.05CR~ Gross)" }
      ],
      Salaar : [
        { region: "Nizam", collections: "71.40Cr" },
        { region: "Ceeded", collections: "22.75Cr" },
        { region: "UA", collections: "17.02Cr" },
        { region: "East", collections: "10.60Cr" },
        { region: "West", collections: "7.35Cr" },
        { region: "Guntur", collections: "9.30Cr" },
        { region: "Krishna", collections: "7.58Cr" },
        { region: "Nellore", collections: "4.73Cr" },
        { region: "AP-TG Total", collections: "150.73CR (234.05CR~ Gross)" },
        { region: "KA", collections: "22.05Cr" },
        { region: "Tamilnadu", collections: "11.50Cr" },
        { region: "Hindi+ROI", collections: "80.90Cr" },
        { region: "Kerala", "collections": "6.90Cr" },
        { region: "OS", collections: "64.55Cr" },
        { region: "Total WW Collections", collections: "337.43CR (Gross- 630.15CR~)" }
      ],
      Kalki : [
        { region: "Nizam", collections: "92.80Cr" },
        { region: "Ceeded", collections: "21.80CR" },
        { region: "UA", collections: "21.73Cr" },
        { region: "East", collections: "12.46Cr" },
        { region: "West", collections: "9.65Cr" },
        { region: "Guntur", collections: "11.32CR" },
        { region: "Krishna", collections: "11.32Cr" },
        { region: "Nellore", collections: "6.19Cr" },
        { region: "AP-TG Total", collections: "187.27CR (296.30CR~ Gross)" },
        { region: "KA", collections: "36.51Cr (74.80CR~ Gross)" },
        { region: "Tamilnadu", collections: "21.91Cr (45.10CR~ Gross)" },
        { region: "Kerala", collections: "13.01Cr (31.80CR~ Gross)" },
        { region: "Hindi+ROI", collections: "149.85Cr~ (342.50CR~ Gross)" },
        { region: "OS", collections: "130.70Cr***** (271CR~ Gross)" },
        { region: "Total WW Collections", collections: "539.25CR (Gross- 1,061.50CR~)" }
      ],
      "Pushpa 2 (20 days)": [
        { "region": "Nizam", "collections": "96.25Cr" },
        { "region": "Ceeded", "collections": "31.55Cr" },
        { "region": "UA", "collections": "23.64Cr" },
        { "region": "East", "collections": "12.72Cr" },
        { "region": "West", "collections": "9.78Cr" },
        { "region": "Guntur", "collections": "15.19Cr" },
        { "region": "Krishna", "collections": "12.54Cr" },
        { "region": "Nellore", "collections": "7.72Cr" },
        { "region": "AP-TG Total", "collections": "209.39CR (315.50CR~ Gross)" },
        { "region": "KA", "collections": "51.00Cr" },
        { "region": "Tamilnadu", "collections": "33.10Cr" },
        { "region": "Kerala", "collections": "7.54Cr" },
        { "region": "Hindi+ROI", "collections": "336.25Cr" },
        { "region": "OS", "collections": "116.55Cr*** Approx" },
        { "region": "Total WW Collections", "collections": "753.83CR (Gross- 1,567.50CR~)" }
      ]
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
                {movieCollections[selectedMovie].map((record, index) => (
                  <tr key={index}>
                    <td
                      style={
                        record.region === "AP-TG Total" || record.region === "Total WW Collections"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region === "AP-TG Total" || record.region === "Total WW Collections"
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
