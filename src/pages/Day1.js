import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Day1.css";
import SVSC1 from "../assets/SVSC_APTGDay1.jpeg";
import SVSC2 from "../assets/SVSC_WW.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Day1() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialMovie = queryParams.get("movie") || "";

  const [selectedMovie, setSelectedMovie] = useState(initialMovie);
  const [currentSVSC, setCurrentSVSC] = useState(0);
  const SVSCImages = [SVSC1, SVSC2];

  const movieCollections = {
    SVSC: [
      { region: "AP Share", collections: "6.78Cr(9.8cr gross)" },
  
      { region: "USA", collections: "$564k(3.1Cr Gross)" },
      { region: "Total WW Collections", collections: "12.9Cr Gross" }
    ],
    "Daaku Maharaaj": [
      { region: "Nizam", collections: "4.07Cr" },
      { region: "Ceeded", collections: "5.25Cr" },
      { region: "UA", collections: "1.92Cr" },
      { region: "East", collections: "1.95Cr" },
      { region: "West", collections: "1.75Cr" },
      { region: "Guntur", collections: "4.00Cr" },
      { region: "Krishna", collections: "1.86Cr" },
      { region: "Nellore", collections: "1.51Cr" },
      { region: "AP-TG Total", collections: "22.31Cr**" },
      { region: "KA", collections: "" },
      { region: "Tamilnadu", collections: "" },
      { region: "Kerala", collections: "" },
      { region: "Hindi", collections: "" },
      { region: "ROI", collections: "" },
      { region: "OS", collections: "" },
      { region: "Total WW Collections", collections: "" }
    ],
    "Game Changer": [
      { region: "Nizam", collections: "8.84Cr" },
      { region: "Ceeded", collections: "5.32Cr" },
      { region: "UA", collections: "****" },
      { region: "East", collections: "4.15Cr" },
      { region: "West", collections: "1.95Cr" },
      { region: "Guntur", collections: "3.41Cr" },
      { region: "Krishna", collections: "2.69Cr" },
      { region: "Nellore", collections: "2.01Cr" },
      { region: "AP-TG Total", collections: "28.37Cr*****" },
      // { region: "KA", collections: "" },
      // { region: "Tamilnadu", collections: "" },
      // { region: "Kerala", collections: "" },
      // { region: "Hindi", collections: "" },
      // { region: "ROI", collections: "" },
      // { region: "OS", collections: "" },
      // { region: "Total WW Collections", collections: "" }
    ],
    RRR: [
        { region: "Nizam", collections: "23.35Cr (35.80Cr Gross)" },
        { region: "Ceeded", collections: "17Cr (4.27Cr hires) (21Cr Gross)" },
        { region: "UA", collections: "7.42Cr" },
        { region: "East", collections: "5.39Cr (2.65Cr Hires)" },
        { region: "West", collections: "5.93Cr (3.20Cr Hires)" },
        { region: "Guntur", collections: "7.80Cr (3.90Cr Hires)" },
        { region: "Krishna", collections: "4.21Cr (81L Hires)" },
        { region: "Nellore", collections: "3.01Cr (61L Hires)" },
        { region: "AP-TG Total", collections: "74.11CR (105CR Gross) (15.44Cr Hires)" },
        { region: "KA", collections: "8.15Cr (85L Hires) (16.10Cr Gross)" },
        { region: "Tamilnadu", collections: "4.95Cr (10.10Cr Gross)" },
        { region: "Kerala", collections: "1.74Cr (3.85Cr Gross)" },
        { region: "Hindi", collections: "9.25Cr (23.50Cr Gross)" },
        { region: "ROI", collections: "2.80Cr (6Cr Gross)" },
        { region: "OS", collections: "34Cr (69Cr Gross)" },
        { region: "Total WW Collections", collections: "135.00CR (Gross - 235CR+)" }
      ],
    Devara: [
      { region: "Nizam", collections: "22.64Cr (inc Special Shows and hires)" },
      { region: "Ceeded", collections: "10.37Cr (1.95Cr~ hires)" },
      { region: "UA", collections: "6.45Cr" },
      { region: "East", collections: "4.73Cr (96L~ Hires)" },
      { region: "West", collections: "4.20Cr (1.21Cr~ Hires)" },
      { region: "Guntur", collections: "7.24Cr (4Cr~ Hires, Mgs)" },
      { region: "Krishna", collections: "3.53Cr (91L~ Hires)" },
      { region: "Nellore", collections: "2.49Cr (95L~ Hires)" },
      { region: "AP-TG Total", collections: "61.65Cr (82.20Cr~ Gross) (11.23Cr Hires, Mgs, SGs)" },
      { region: "KA", collections: "6.40Cr (11.70Cr Gross)" },
      { region: "Tamilnadu", collections: "1.05Cr (2.45Cr~ Gross)" },
      { region: "Kerala", collections: "25L~ (61L~ Gross)" },
      { region: "Hindi+ROI", collections: "4.55Cr (11.4Cr~ Gross)" },
      { region: "OS", collections: "24.70Cr (48.7Cr~ Gross)****approx" },
      { region: "Total WW Collections", collections: "98.60Cr (Gross - 157.00Cr~)" }
    ],
    "Guntur Kaaram": [
      { region: "Nizam", collections: "16.45Cr (inc Hires, special shows)" },
      { region: "Ceeded", collections: "3.31Cr" },
      { region: "UA", collections: "4.05Cr" },
      { region: "East", collections: "4.01Cr (1.38Cr~ hires)" },
      { region: "West", collections: "2.60Cr (1.41Cr~ Hires)" },
      { region: "Guntur", collections: "4.36Cr (1.36Cr Hires,mgs)" },
      { region: "Krishna", collections: "2.56Cr (60L hires)" },
      { region: "Nellore", collections: "1.54Cr (68L hires)" },
      { region: "AP-TG Total", collections: "38.88CR (52.50CR~ Gross)(6.78Cr Hires,mgs)" },
      { region: "KA+ROI", collections: "2.55Cr" },
      { region: "OS", collections: "10.60Cr***" },
      { region: "Total WW Collections", collections: "52.03CR (79.30CR~ Gross)" }
    ],
    Salaar: [
      { region: "Nizam", collections: "22.55Cr" },
      { region: "Ceeded", collections: "6.45CR" },
      { region: "UA", collections: "4.72Cr" },
      { region: "East", collections: "4.70Cr" },
      { region: "West", collections: "3.10Cr (80L Hires)" },
      { region: "Guntur", collections: "4.50Cr (1.60Cr Hires)" },
      { region: "Krishna", collections: "2.42Cr" },
      { region: "Nellore", collections: "1.85Cr (51L Hires)" },
      { region: "AP-TG Total", collections: "50.29CR (71CR~ Gross)(3.96Cr Hires)" },
      { region: "KA", collections: "6.00Cr (11.60Cr Gross)" },
      { region: "Tamilnadu", collections: "2.85Cr (6.25Cr~ Gross)" },
      { region: "Kerala", collections: "2.10Cr (4.75Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "9.45Cr (20Cr~ Gross)" },
      { region: "OS", collections: "26.80Cr (53.50Cr~ Gross)" },
      { region: "Total WW Collections", collections: "97.49CR (Gross- 167CR+)" }
    ],
    Kalki: [
      { region: "Nizam", collections: "19.60Cr" },
      { region: "Ceeded", collections: "5.12CR" },
      { region: "UA", collections: "5.48Cr" },
      { region: "East", collections: "3.95Cr" },
      { region: "West", collections: "2.91Cr" },
      { region: "Guntur", collections: "3.24CR" },
      { region: "Krishna", collections: "2.85Cr" },
      { region: "Nellore", collections: "1.71Cr" },
      { region: "AP-TG Total", collections: "44.86CR (70.20CR~ Gross)" },
      { region: "KA", collections: "5.75Cr (12.10Cr Gross)" },
      { region: "Tamilnadu", collections: "2.35Cr (5.50Cr~ Gross)" },
      { region: "Kerala", collections: "1.35Cr (2.90Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "12.85Cr (30Cr~ Gross)" },
      { region: "OS", collections: "29Cr (62.50Cr~ Gross)" },
      { region: "Total WW Collections", collections: "96.16CR (Gross- 183.20CR~)" }
    ],
    "Pushpa 2": [
      { region: "Nizam", collections: "25.60Cr (INC Hires, Premieres)" },
      { region: "Ceeded", collections: "12.48Cr (3.38Cr Hires)" },
      { region: "UA", collections: "7.70Cr (Inc Hires)" },
      { region: "East", collections: "4.90Cr (2.10Cr Hires)" },
      { region: "West", collections: "4.45Cr (1.85Cr Hires)" },
      { region: "Guntur", collections: "7.60Cr (3Cr Hires)" },
      { region: "Krishna", collections: "5.20Cr (1.84Cr~ Hires)" },
      { region: "Nellore", collections: "2.88Cr (1.05Cr Hires)" },
      { region: "AP-TG Total", collections: "70.81CR (97.50CR~ Gross)(15.27Cr~ Hires)" },
      { region: "KA", collections: "12.05Cr (22Cr Gross)" },
      { region: "Tamilnadu", collections: "5.90Cr (11.05Cr~ Gross)" },
      { region: "Kerala", collections: "2.85Cr (6.35Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "36.40Cr (81.60Cr~ Gross)" },
      { region: "OS", collections: "32.00Cr (67.05Cr~ Gross)***Approx" },
      { region: "Total WW Collections", collections: "160.01CR (Gross- 285.55CR~)" }
    ],
    "Sarkaru Vaari Paata": [
      { "region": "Nizam", "collections": "12.24Cr" },
      { "region": "Ceeded", "collections": "4.70Cr (1.40Cr Hires)" },
      { "region": "UA", "collections": "3.74Cr (31L~ Hires, MGS)" },
      { "region": "East", "collections": "3.25Cr (80L~ Hires)" },
      { "region": "West", "collections": "2.74Cr (1.3Cr~ Hires)" },
      { "region": "Guntur", "collections": "5.83Cr (3.55Cr Hires, MGS)" },
      { "region": "Krishna", "collections": "1.95Cr (31L Hires)" },
      { "region": "Nellore", "collections": "1.56Cr (34L Hires)" },
      { 
        "region": "AP-TG Total", 
        "collections": "36.01Cr (50.10Cr~ Gross)(8.01Cr Hires, MGS)" 
      },
      { "region": "KA+ROI", "collections": "2.70Cr" },
      { "region": "OS", "collections": "6.50Cr" },
      { 
        "region": "Total WW Collections", 
        "collections": "45.21Cr (70CR~ Gross)" 
      }
    ],
    "Sarileru Neekevvaru": [
      { "region": "Nizam", "collections": "8.67Cr" },
      { "region": "Ceeded", "collections": "4.15Cr (45L Hires)" },
      { "region": "UA", "collections": "4.40Cr" },
      { "region": "East", "collections": "3.35Cr (90L Hires)" },
      { "region": "West", "collections": "2.72Cr (1.15Cr Hires)" },
      { "region": "Guntur", "collections": "5.14Cr (3.95Cr Inc. Hires, SG, MG)" },
      { "region": "Krishna", "collections": "3.07Cr (65L Inc. Hires, SG, MG)" },
      { "region": "Nellore", "collections": "1.27Cr (32L Hires)" },
      {
        "region": "AP-TG Total",
        "collections": "32.77Cr (8.02Cr Hires, 60L Worth Hires, SG, MG Added)"
      },
      { "region": "KA", "collections": "3.75Cr (2Cr Worth Hires Added)" },
      { "region": "ROI", "collections": "52L" },
      { "region": "OS", "collections": "6.12Cr" },
      { "region": "Total WW Collections", "collections": "43.16Cr (67Cr~ Gross)" }
    ],
    "Maharshi": [
      { "region": "Nizam", "collections": "6.38C" },
      { "region": "Ceeded", "collections": "2.89C" },
      { "region": "UA", "collections": "2.88C" },
      { "region": "Guntur", "collections": "4.41C" },
      { "region": "West", "collections": "2.46C" },
      { "region": "Krishna", "collections": "1.39C" },
      { "region": "East", "collections": "3.20C" },
      { "region": "Nellore", "collections": "1.07C" },
      { "region": "AP-TG Total", "collections": "24.68C (34Cr Gross)" },
      { "region": "Karnataka", "collections": "3.34C (6Cr Gross)" },
      { "region": "ROI", "collections": "0.93C" },
      { "region": "USA", "collections": "2.64C (4.8Cr Gross)" },
      { "region": "ROW", "collections": "0.61C" },
      { "region": "Total WW Collections", "collections": "32.2C (48Cr Gross)" }
    ],
      "Vakeel Saab": [
        { "region": "Nizam", "collections": "8.75Cr" },
        { "region": "Ceeded", "collections": "4.50Cr" },
        { "region": "UA", "collections": "3.85Cr (GST - 37L)" },
        { "region": "East", "collections": "3.10Cr (Hires – 90L)" },
        { "region": "West", "collections": "4.50Cr (Hires, MG - 3.41Cr)" },
        { "region": "Guntur", "collections": "3.94Cr (Hires – 1.8Cr)" },
        { "region": "Krishna", "collections": "1.90Cr (Hires + GST - 34L)" },
        { "region": "Nellore", "collections": "1.70Cr (Hires – 41L)" },
        {
          "region": "AP-TG Total",
          "collections": "32.24CR (44Cr~ Gross) (6Cr Hires)"
        },
        { "region": "KA+ROI", "collections": "1.82Cr (Approx)" },
        { "region": "OS", "collections": "2.40Cr (Approx)" },
        { "region": "Total WW Collections", "collections": "36.46CR (52.4Cr~ Gross)" }
      ],
      "Bheemla Nayak": [
        { "region": "Nizam", "collections": "11.85Cr" },
        { "region": "Ceeded", "collections": "3.28Cr" },
        { "region": "UA", "collections": "1.88Cr" },
        { "region": "East", "collections": "1.95Cr" },
        { "region": "West", "collections": "3.02Cr (2Cr Hires)" },
        { "region": "Guntur", "collections": "2.51Cr (1.45Cr Hires)" },
        { "region": "Krishna", "collections": "0.89Cr" },
        { "region": "Nellore", "collections": "1.04Cr (24L Hires)" },
        {
          "region": "AP-TG Total",
          "collections": "26.42CR (38CR~ Gross) (3.69CR Hires)"
        },
        { "region": "KA+ROI", "collections": "3.10Cr" },
        { "region": "OS", "collections": "6.85Cr" },
        { "region": "Total WW Collections", "collections": "36.37CR (56.50CR~ Gross)" }
      ],
      "BRO The Avatar": [
        { "region": "Nizam", "collections": "8.45Cr (inc GST)" },
        { "region": "Ceeded", "collections": "2.70Cr" },
        { "region": "UA", "collections": "2.60Cr (inc GST)" },
        { "region": "East", "collections": "2.45Cr (inc GST) (68L~ Hires)" },
        { "region": "West", "collections": "2.98Cr (inc GST) (1.81Cr~ Hires)" },
        { "region": "Guntur", "collections": "2.51Cr (inc GST) (1.18Cr Hires)" },
        { "region": "Krishna", "collections": "1.21Cr (inc GST)" },
        { "region": "Nellore", "collections": "71L (inc GST)" },
        {
          "region": "AP-TG Total",
          "collections": "23.61CR (35.50CR~ Gross) (3.67CR Hires)"
        },
        { "region": "KA+ROI", "collections": "2.10Cr" },
        { "region": "OS", "collections": "4.30Cr" },
        { "region": "Total WW Collections", "collections": "30.01CR (48.50CR~ Gross)" }
      ],
        "Saaho": [
          { "region": "Nizam", "collections": "9.41Cr" },
          { "region": "Ceeded", "collections": "4.7Cr" },
          { "region": "Guntur", "collections": "4.7Cr (2.5Cr Hires)" },
          { "region": "Krishna", "collections": "2.51Cr" },
          { "region": "UA", "collections": "4.37Cr (60L Hires)" },
          { "region": "East", "collections": "4.45Cr (2Cr Hires)" },
          { "region": "West", "collections": "3.82Cr (55L Hires)" },
          { "region": "Nellore", "collections": "2.56Cr (1.6Cr Hires)" },
          {
            "region": "AP-TG Total",
            "collections": "36.52Cr (7.25Cr Hires) (52.1Cr Gross)"
          },
          { "region": "Karnataka", "collections": "7.1Cr" },
          { "region": "Tamil", "collections": "1.92Cr" },
          { "region": "Kerala", "collections": "0.55Cr" },
          { "region": "Hindi & ROI", "collections": "14.9Cr" },
          { "region": "USA", "collections": "5.85Cr" },
          { "region": "ROW", "collections": "6.80Cr" },
          {
            "region": "Total WW Collections",
            "collections": "73.64Cr (126Cr Gross)"
          }
        ],
        "Radhe Shyam": [
          { "region": "Nizam", "collections": "10.80Cr" },
          { "region": "Ceeded", "collections": "3.50Cr (40L Hires)" },
          { "region": "UA", "collections": "1.95Cr" },
          { "region": "East", "collections": "2.60Cr (60L Hires)" },
          { "region": "West", "collections": "2.01Cr (60L Hires)" },
          { "region": "Guntur", "collections": "2.60Cr (1.10Cr Hires)" },
          { "region": "Krishna", "collections": "0.95Cr" },
          { "region": "Nellore", "collections": "1.08Cr (11L Hires)" },
          {
            "region": "AP-TG Total",
            "collections": "25.49Cr (37Cr~ Gross) (2.81Cr Hires)"
          },
          { "region": "Karnataka", "collections": "2.70Cr" },
          { "region": "Tamilnadu", "collections": "0.30Cr" },
          { "region": "Kerala", "collections": "0.08Cr" },
          { "region": "Hindi", "collections": "2.25Cr" },
          { "region": "ROI", "collections": "0.80Cr" },
          { "region": "OS", "collections": "7.75Cr" },
          {
            "region": "Total WW Collections",
            "collections": "39.37Cr (67Cr~ Gross)"
          }
        ],

          "Adipurush": [
            { "region": "Nizam", "collections": "13.68Cr" },
            { "region": "Ceeded", "collections": "3.52Cr" },
            { "region": "UA", "collections": "3.72Cr" },
            { "region": "East", "collections": "2.78Cr" },
            { "region": "West", "collections": "2.24Cr" },
            { "region": "Guntur", "collections": "4Cr (1.21Cr Hires)" },
            { "region": "Krishna", "collections": "2Cr" },
            { "region": "Nellore", "collections": "90L" },
            {
              "region": "AP-TG Total",
              "collections": "32.84Cr (49.90Cr~ Gross) (2Cr~ Hires added in Several Places)"
            },
            { "region": "Karnataka", "collections": "4.65Cr" },
            { "region": "Tamilnadu", "collections": "0.76Cr" },
            { "region": "Kerala", "collections": "0.26Cr" },
            { "region": "Hindi+ROI", "collections": "18.80Cr~" },
            { "region": "OS", "collections": "12.80Cr~" },
            {
              "region": "Total WW Collections",
              "collections": "70.11Cr (137.00Cr~ Gross)"
            }
          ],
         "Ala Vaikunthapurramuloo" : [
            { "region": "Nizam", "collections": "6.01Cr" },
            { "region": "Ceeded", "collections": "4.02Cr (82L Hires)" },
            { "region": "UA", "collections": "2.87Cr" },
            { "region": "East", "collections": "2.98Cr (1.21Cr Hires, SGs, MGs)" },
            { "region": "West", "collections": "2.78Cr (1.82Cr Hires, SGs, MGs)" },
            { "region": "Guntur", "collections": "3.41Cr (1.56Cr Hires, SGs, MGs)" },
            { "region": "Krishna", "collections": "2.57Cr (68L Hires, SGs, MGs)" },
            { "region": "Nellore", "collections": "1.29Cr (30L Hires)" },
            {
              "region": "AP-TG Total",
              "collections": "25.93Cr (6.39Cr Hires)"
            },
            { "region": "Karnataka", "collections": "3.32Cr (2.07Cr Hires)" },
            { "region": "ROI", "collections": "1.25Cr" },
            { "region": "OS", "collections": "6.33Cr" },
            {
              "region": "Total WW Collections",
              "collections": "36.83Cr (55Cr~ Gross)"
            }
          ]
        
        
    
      
    
    
  };

  const handleSelection = (event) => {
    const selected = event.target.value;
    setSelectedMovie(selected);
    navigate(`?movie=${encodeURIComponent(selected)}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const movie = query.get("movie") || "";
    setSelectedMovie(movie);
  }, [location.search]);

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

        {selectedMovie && movieCollections[selectedMovie] && (
          <div className="records-table">
            <h2>{selectedMovie}</h2>
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
                        record.region.includes("Total")
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region.includes("Total")
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

            {selectedMovie === "SVSC" && (
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <button
                    onClick={prevImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "-40px",
                      transform: "translateY(-50%)",
                      background: "none",
                      color: "#ffcc00",
                      fontSize: "2em",
                      cursor: "pointer",
                      border: "none"
                    }}
                  >
                    <FaChevronLeft />
                  </button>

                  <img
                    src={SVSCImages[currentSVSC]}
                    alt={`SVSC ${currentSVSC + 1}`}
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
                    }}
                  />

                  <button
                    onClick={nextImage}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-40px",
                      transform: "translateY(-50%)",
                      background: "none",
                      color: "#ffcc00",
                      fontSize: "2em",
                      cursor: "pointer",
                      border: "none"
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Day1;