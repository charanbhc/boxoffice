import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./APTG.css";

function APTG() {
  const [selectedMainCategory, setSelectedMainCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const mainCategories = [
    "Nizam",
    "Ceeded",
    "Nellore",
    "Guntur",
    "Krishna",
    "UA",
    "East",
    "West",
  ];

  const subCategories = {
    "Nizam": [
    
      { name: "Nizamabad Town Top 10 Grossers", content: "Nizamabad Town Top 10 Grossers" },
   
    ],
    "Ceeded": [
      { name: "Anantapur Town Day 1", content: "Anantapur Town Day 1" },
      { name: "Nandyal Town Day 1", content: "Nandyal Town Day 1" },
      { name: "Kadapa Town Top 5 Grossers", content: "Kadapa Town Top 5 Grossers" },
      { name: "Adoni Town Top Grossers", content: "Adoni Town Top Grossers" },
      { name: "Guntakal Town Top Grossers", content: "Guntakal Town Top Grossers" },

    ],
    "Nellore": [
     
  

    ],
    "Guntur": [
      { name: "Macherla Town Day 1 Top 10 Grossers", content: "Macherla Town Day 1 Top 10 Grossers" },
      { name: "Chirala+Macherla Towns Top 10 Grossers", content: "Chirala+Macherla Towns Top 10 Grossers" },
      { name: "Chirala Top 10 Grossers", content: "Chirala Top 10 Grossers" },
      { name: "Chirala Town 1st Week Top 10 Grossers", content: "Chirala Town 1st Week Top 10 Grossers" },
      { name: "Chirala Town Day 1 Top Grossers", content: "Chirala Town Day 1 Top Grossers" },
      { name: "Chirala Day 2 Top Gross", content: "Chirala Day 2 Top Gross" },
   
    ],
    "Krishna": [
      { name: "Vijayawada National Plexes 1st Week Top Nett", content: "Vijayawada National Plexes 1st Week Top Nett" },
      { name: "Machilipatnam 1st Week Top 10 Grossers", content: "Machilipatnam 1st Week Top 10 Grossers" },
      { name: "Machilipatnam Day 1 Top 10 Grossers", content: "Machilipatnam Day 1 Top 10 Grossers" },
      { name: "Tiruvuru Centre Top Shares", content: "Tiruvuru Centre Top Shares" },
   

    ],
    "UA": [
  

    ],
    "East": [
      { name: " ", content: " " },
   

    ],
    "West": [
      
       { name: "Tanuku Town Top 10 Grossers", content: "Tanuku Town Top 10 Grossers" },
       { name: "Tadepalligudem Town Top 10 Grossers", content: "Tadepalligudem Town Top 10 Grossers" },
 
    ],
    // Add other categories similarly...
  };

  const topGrossers = {
    "Chirala Town Day 1 Top Grossers": [
      { "name": "#RRR", "gross": "20.34L" },
      { "name": "#Pushpa2TheRule", "gross": "15.65L" },
      { "name": "#Devara", "gross": "14.67L" },
      { "name": "#Kalki2898AD", "gross": "11.81L" },
      { "name": "#VakeelSaab", "gross": "11.48L" },
      { "name": "#Salaar", "gross": "11.18L" },
      { "name": "#Bahubali2", "gross": "11L" },
      { "name": "#GunturKaaram", "gross": "10.69L" },
      { "name": "#SarileruNeekevvaru", "gross": "10.4L" },
      { "name": "#SarkaruVaariPaata", "gross": "10.26L" },
      { "name": "#VeeraSimhaReddy", "gross": "10.17L" }
    ],
    "Chirala Day 2 Top Gross": [
      { "name": "#RRR", "gross": "11.87L" },
      { "name": "#Salaar", "gross": "7.04L" },
      { "name": "#Pushpa2TheRule", "gross": "6.35L" },
      { "name": "#Kalki2898AD", "gross": "6.2L" },
      { "name": "#Devara", "gross": "6.19L" },
      { "name": "#VakeelSaab", "gross": "5.39L" },
      { "name": "#SarileruNeekevvaru", "gross": "5.23L" },
      { "name": "#Acharya", "gross": "5.13L" },
      { "name": "#BRO", "gross": "4.68L" },
      { "name": "#Pushpa", "gross": "4.66L" },
      { "name": "#SVP", "gross": "4.48L" },
      { "name": "#BheemlaNayak", "gross": "4.45L" },
      { "name": "#AVPL", "gross": "4.39L" },
      { "name": "#GunturKaaram", "gross": "4.26L" },
      { "name": "#Adipurush", "gross": "4.23L" },
      { "name": "#KGF2", "gross": "4.18L" }
    ],
    "Chirala Town 1st Week Top 10 Grossers": [
      { "name": "#RRR", "gross": "62,86,270" },
      { "name": "#Pushpa2", "gross": "45,06,115" },
      { "name": "#SarileruNeekevvaru", "gross": "40,95,533" },
      { "name": "#Salaar", "gross": "40,65,247" },
      { "name": "#Kalki", "gross": "40,01,810" },
      { "name": "#Devara", "gross": "37,21,971" },
      { "name": "#AVPL", "gross": "32,38,012" },
      { "name": "#WaltairVeerayya", "gross": "32,24,690" },
      { "name": "#VakeelSaab", "gross": "31,76,543" },
      { "name": "#Baahubali2", "gross": "31,20,000" }
    ],
    "Chirala Top 10 Grossers": [
      { "name": "#RRR", "gross": "1.02Cr" },
      { "name": "#SarileruNeekevvaru", "gross": "71.2L" },
      { "name": "#Pushpa2", "gross": "63.36L (18D)" },
      { "name": "#AVPL", "gross": "62.9L" },
      { "name": "#Kalki2898AD", "gross": "57.3L" },
      { "name": "#Devara", "gross": "54.28L" },
      { "name": "#WaltairVeerayya", "gross": "53.4L" },
      { "name": "#Rangasthalam", "gross": "52.7L" },
      { "name": "#Baahubali2", "gross": "51.9L" },
      { "name": "#Salaar", "gross": "50.4L" }
    ],
    "Chirala+Macherla Towns Top 10 Grossers": [
      { "name": "#RRR", "gross": "1.61Cr" },
      { "name": "#SarileruNeekevvaru", "gross": "1.07Cr" },
      { "name": "#AVPL", "gross": "1.04Cr" },
      { "name": "#Baahubali2", "gross": "1.02Cr" },
      { "name": "#Pushpa2", "gross": "97L (11D)" },
      { "name": "#Devara", "gross": "96.6L" },
      { "name": "#Kalki2898AD", "gross": "93.03L" },
      { "name": "#WaltairVeerayya", "gross": "91.49L" },
      { "name": "#Salaar", "gross": "84.59L" },
      { "name": "#Rangasthalam", "gross": "83.6L" }
    ],
    "Tiruvuru Centre Top Shares": [
      { "name": "#Bb2", "gross": "51L" },
      { "name": "#RRR", "gross": "38L" },
      { "name": "#Avpl", "gross": "37L" },
      { "name": "#Devara", "gross": "28.4L" },
      { "name": "#Sln", "gross": "27L" },
      { "name": "#Bb1", "gross": "26L" }
    ],
    "Machilipatnam Day 1 Top 10 Grossers": [
      { "name": "#Devara", "gross": "35.68L" },
      { "name": "#Pushpa2TheRule (Incl Pre)", "gross": "27.87L" },
      { "name": "#RRR", "gross": "25.81L" },
      { "name": "#Kalki2898AD", "gross": "25.12L" },
      { "name": "#SyeRaa", "gross": "19.7L" },
      { "name": "#AGV", "gross": "19.07L" },
      { "name": "#VakeelSaab", "gross": "19.01L" },
      { "name": "#Baahubali2", "gross": "18.43L" },
      { "name": "#Saaho", "gross": "17.79L" },
      { "name": "#SGS", "gross": "17.21L" }
    ],
    "Machilipatnam 1st Week Top 10 Grossers": [
      { "name": "#RRR", "gross": "89,43,202" },
      { "name": "#Devara", "gross": "79,61,766" },
      { "name": "#Kalki2898AD", "gross": "78,40,160" },
      { "name": "#Pushpa2", "gross": "73,15,929" },
      { "name": "#Baahubali2", "gross": "62,25,372" },
      { "name": "#WaltairVeerayya", "gross": "57,49,920" },
      { "name": "#AVPL", "gross": "56,03,494" },
      { "name": "#Salaar", "gross": "53,93,160" },
      { "name": "#SyeRaa", "gross": "49,32,540" },
      { "name": "#SarileruNeekevvaru", "gross": "48,90,447" }
    ],
    "Vijayawada National Plexes 1st Week Top Nett": [
      { "name": "#Kalki2898AD", "gross": "3.55Cr (8D)" },
      { "name": "#RRR", "gross": "2.83Cr" },
      { "name": "#Pushpa2", "gross": "2.7Cr (8D)" },
      { "name": "#Devara", "gross": "2.25Cr" },
      { "name": "#Salaar", "gross": "1.78Cr" },
      { "name": "#SarkaruVaariPaata", "gross": "1.69Cr (8D)" },
      { "name": "#Adipurush", "gross": "1.61Cr" },
      { "name": "#WaltairVeerayya", "gross": "1.51Cr" },
      { "name": "#GunturKaaram", "gross": "1.5Cr" }
    ],
    "Anantapur Town Day 1": [
      { "name": "#Simha", "gross": "10.63L" },
      { "name": "#Orange", "gross": "11.65L" },
      { "name": "#Dookudu", "gross": "14.32L" },
      { "name": "#Oosaravelli", "gross": "17.45L" },
      { "name": "#Baahubali", "gross": "23.74L" },
      { "name": "#SGS", "gross": "28.63L" },
      { "name": "#Khaidino150", "gross": "29.82L" },
      { "name": "#Baahubali2", "gross": "53.3L" },
      { "name": "#RRR", "gross": "85.26L" },
      { "name": "#Devara", "gross": "92.94L" }
    ],
    "Nandyal Town Day 1": [
      { "name": "#AttarintikiDaredi", "gross": "8.65L" },
      { "name": "#GAV", "gross": "9L" },
      { "name": "#Temper", "gross": "9.5L" },
      { "name": "#Baahubali", "gross": "13.32L" },
      { "name": "#SGS", "gross": "14.3L" },
      { "name": "#KhaidiNo150", "gross": "16.19L" },
      { "name": "#Agnyaathavaasi", "gross": "21.17L" },
      { "name": "#ASVR", "gross": "26.02L" },
      { "name": "#SyeRaa", "gross": "31.2L" },
      { "name": "#VakeelSaab", "gross": "31.33L" },
      { "name": "#RRR", "gross": "64.14L" },
      { "name": "#Pushpa2", "gross": "72L" }
    ],
    "Macherla Town Day 1 Top 10 Grossers": [
      { "name": "#GameChanger", "gross": "12.5L" },
      { "name": "#Pushpa2", "gross": "12.17L" },
      { "name": "#RRR", "gross": "11.25L" },
      { "name": "#VeeraSimhaReddy", "gross": "10.08L" },
      { "name": "#Devara", "gross": "9.9L" },
      { "name": "#Salaar", "gross": "9.1L" },
      { "name": "#Kalki2898AD", "gross": "8.26L" },
      { "name": "#VakeelSaab", "gross": "7.86L" },
      { "name": "#Adipurush", "gross": "7.62L" },
      { "name": "#SarkaruVaariPaata", "gross": "7.26L" }
    ],

    "Nizamabad Town Top 10 Grossers": [
      { "name": "#Pushpa2", "gross": "2.42Cr (28D)" },
      { "name": "#RRR", "gross": "2.4Cr" },
      { "name": "#Baahubali2", "gross": "2.2Cr" },
      { "name": "#Kalki2898AD", "gross": "2.1Cr" },
      { "name": "#Salaar", "gross": "1.8Cr" },
      { "name": "#Hanuman", "gross": "1.7Cr" },
      { "name": "#Pushpa", "gross": "1.36Cr" },
      { "name": "#Maharshi", "gross": "1.35Cr" },
      { "name": "#WaltairVeerayya", "gross": "1.27Cr" },
      { "name": "#Adipurush", "gross": "1.24Cr" }
    ],
    "Kadapa Town Top 5 Grossers": [
      { "name": "#RRR", "gross": "3,14,40,812" },
      { "name": "#Pushpa2", "gross": "3,08,52,004 (28D)" },
      { "name": "#Devara", "gross": "2,36,20,250" },
      { "name": "#Baahubali2", "gross": "2,30,89,976" },
      { "name": "#Kalki2898AD", "gross": "2,19,96,000" }
    ],
    "Adoni Town Top Grossers": [
      { "name": "#RRR", "gross": "1.5Cr" },
      { "name": "#Baahubali2", "gross": "1.22Cr" },
      { "name": "#Pushpa2", "gross": "1Cr (19D)" },
      { "name": "#Devara", "gross": "1Cr" },
      { "name": "#Rangasthalam", "gross": "78.4L" },
      { "name": "#Baahubali", "gross": "78L" }
    ],
    "Tanuku Town Top 10 Grossers": [
      { "name": "#RRR", "gross": "1.71Cr" },
      { "name": "#Baahubali2", "gross": "1.54Cr" },
      { "name": "#AVPL", "gross": "1.36Cr" },
      { "name": "#Baahubali", "gross": "1.08Cr" },
      { "name": "#Kalki", "gross": "1.01Cr" },
      { "name": "#Hanuman", "gross": "97.22L" },
      { "name": "#WaltairVeerayya", "gross": "95.5L" },
      { "name": "#Rangasthalam", "gross": "92.5L" },
      { "name": "#Pushpa2", "gross": "90.94L (18D)" },
      { "name": "#SarileruNeekevvaru", "gross": "90.5L" }
    ],
    "Guntakal Town Top Grossers": [
      { "name": "#RRR", "gross": "1.31Cr" },
      { "name": "#Baahubali2", "gross": "90.8L" },
      { "name": "#Baahubali", "gross": "63.4L" },
      { "name": "#Pushpa2", "gross": "63L+ (17D)" },
      { "name": "#Devara", "gross": "60L" },
      { "name": "#Rangasthalam", "gross": "58.5L" },
      { "name": "#Akhanda", "gross": "56.6L" },
      { "name": "#SyeRaa", "gross": "51.6L" },
      { "name": "#AVPL", "gross": "50.5L" },
      { "name": "#Pushpa", "gross": "49.2L" },
      { "name": "#Salaar", "gross": "48.74L" },
      { "name": "#Maharshi", "gross": "48.36L" },
      { "name": "#KhaidiNo150", "gross": "48L" },
      { "name": "#Kalki2898AD", "gross": "46.7L" },
      { "name": "#KGF2", "gross": "46.4L" }
    ],
    "Tadepalligudem Town Top 10 Grossers": [
      { "name": "#RRR", "gross": "1.24Cr" },
      { "name": "#Baahubali2", "gross": "1.1Cr" },
      { "name": "#AVPL", "gross": "86.06L" },
      { "name": "#WaltairVeerayya", "gross": "74.76L" },
      { "name": "#SarileruNeekevvaru", "gross": "73.5L" },
      { "name": "#Kalki", "gross": "67L" },
      { "name": "#Rangasthalam", "gross": "66.05L" },
      { "name": "#F2", "gross": "64L" },
      { "name": "#Baahubali", "gross": "63.5L" },
      { "name": "#Pushpa2", "gross": "57.43L (15D)" }
    ]
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Main Categories</h1>
        <div className="main-buttons">
          {mainCategories.map((category) => (
            <div key={category} className="main-button">
              <button
                onClick={() =>
                  setSelectedMainCategory(
                    selectedMainCategory === category ? null : category
                  )
                }
                className={`category-btn ${
                  selectedMainCategory === category ? "selected" : ""
                }`}
              >
                {category}
              </button>
              {selectedMainCategory === category && (
                <div className="sub-buttons">
                  {subCategories[category]?.map((subCategory) => (
                    <button
                      key={subCategory.name}
                      onClick={() =>
                        setSelectedSubCategory(
                          selectedSubCategory === subCategory.name
                            ? null
                            : subCategory.name
                        )
                      }
                      className={`sub-category-btn ${
                        selectedSubCategory === subCategory.name ? "selected" : ""
                      }`}
                    >
                      {subCategory.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedSubCategory && topGrossers[selectedSubCategory] && (
          <div className="grossers-content">
            <table className="grossers-table">
              <thead>
                <tr>
                  <th colSpan="3">
                    {
                      subCategories[selectedMainCategory]?.find(
                        (sub) => sub.name === selectedSubCategory
                      )?.content
                    }
                  </th>
                </tr>
                <tr>
                  <th>Movie</th>
                  <th>Gross</th>
                </tr>
              </thead>
              <tbody>
                {topGrossers[selectedSubCategory].map((movie, index) => (
                  <tr key={movie.name}>
                    <td>{movie.name}</td>
                    <td>{movie.gross}</td>
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

export default APTG;
