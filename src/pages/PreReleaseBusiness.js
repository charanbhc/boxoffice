import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./PreReleaseBusiness.css";

function PreReleaseBusiness() {
  const [selectedMovie, setSelectedMovie] = useState(""); // Default selection

  const movieCollections = {

    "Pre Release Business WW": [
      { region: "Pushpa 2 The Rule 2024", collections: "617CR" },
      { region: "RRR Movie", collections: "451Cr" },
      { region: "Kalki2898AD", collections: "370CR" },
      { region: "Baahubali2", collections: "352cr" },
      { region: "Salaar", collections: "345CR" },
      { region: "Saaho", collections: "270cr" },
      { region: "ADIPURUSH", collections: "240CR" },
      { region: "Radhe Shyam", collections: "202.80Cr" },
      { region: "SyeRaa Narasimha Reddy", collections: "187.25Cr" },
      { region: "Devara Part 1", collections: "182.55CR" },
      { region: "Pushpa Part 1", collections: "144.9CR" },
      { region: "GunturKaaram", collections: "132.00CR" },
      { region: "Acharya", collections: "131.20CR" },
      { region: "SPYder", collections: "124.3cr+" },
      { region: "Agnyaathavaasi", collections: "123.6cr" },
      { region: "Sarkaru Vaari Paata", collections: "120CR" },
      { region: "Baahubali1", collections: "118cr" },
      { region: "Bheemla Nayak", collections: "106.75Cr" },
      { region: "Maharshi", collections: "100CR" },
      { region: "BharatAneNenu", collections: "100cr" },
      { region: "Sarileru Neekevvaru", collections: "99.30Cr" },
      { region: "BRO THE MOVIE", collections: "97.50CR" },
      { region: "Aravindha Sametha", collections: "91cr" },
      { region: "God Father", collections: "91CR/73Cr(Team)" },
      { region: "Vinaya Vidheya Rama", collections: "90cr" },
      { region: "VakeelSaab", collections: "89.35Cr" },
      { region: "KhaidiNo150", collections: "89Cr" },
      { region: "LIGER", collections: "88.40CR" },
      { region: "Waltair Veerayya", collections: "88CR" },
      { region: "Sardar Gabbar Singh", collections: "87.7cr" },
      { region: "JaiLavaKusa", collections: "86Cr" },
      { region: "KaatamaRayudu", collections: "84.5cr" },
      { region: "Ala Vaikunthapurramuloo", collections: "84.34Cr" },
      { region: "Rangasthalam", collections: "80Cr" },
      { region: "Bhola Shankar", collections: "79.60Cr" },
      { region: "DJ- Duvvada Jagannatham", collections: "79Cr+" },
      { region: "Veera Simha Reddy", collections: "73CR" },
    ],
    "All Time/Non-BB Record Pre-Release Business": [
      { "region": "Magadheera", "collections": "40CR (Approx)" },
      { "region": "Camera Man Gangato Rambabu", "collections": "43CR" },
      { "region": "Seethamma Vakitlo Sirimalle Chettu", "collections": "47CR" },
      { "region": "Attarintiki Daredi", "collections": "52CR" },
      { "region": "1Nenokkadine", "collections": "53CR" },
      { "region": "Aagadu", "collections": "56CR" },
      { "region": "Baahubali", "collections": "86CR" },
      { "region": "Srimanthudu", "collections": "59CR" },
      { "region": "Sardaar Gabbar Singh", "collections": "81CR" },
      { "region": "Khaidi No 150", "collections": "89CR" },
      { "region": "Baahubali2", "collections": "190CR" },
      { "region": "Spyder", "collections": "98CR" },
      { "region": "Agnyaathavaasi", "collections": "125CR" },
      { "region": "Saaho", "collections": "172CR" }
    ],
    
    "Pre Release Business APTG": [
      { "region": "Pushpa2TheRule 2024", "collections": "213CR" },
      { "region": "RRRMovie 2022", "collections": "191CR" },
      { "region": "KALKI2898AD 2024", "collections": "168CR" },
      { "region": "Salaar 2023", "collections": "145CR" },
      { "region": "Baahubali2 2017", "collections": "122CR" },
      { "region": "Saaho 2019", "collections": "121.6CR" },
      { "region": "AdiPurush 2023", "collections": "120CR" },
      { "region": "Devara Part 1 2024", "collections": "112.55CR" },
      { "region": "Acharya 2022", "collections": "107.50CR" },
      { "region": "SyeRaa 2019", "collections": "106.8CR" },
      { "region": "RadheShyam 2022", "collections": "105.20CR" },
      { "region": "GunturKaaram 2024", "collections": "102.00CR" },
      { "region": "Pushpa1 2021", "collections": "101.75CR" },
      { "region": "SarkaruVaariPaata 2022", "collections": "97.50CR" },
      { "region": "Agnyaathavaasi 2018", "collections": "91.80CR" },
      { "region": "BheemlaNayak 2022", "collections": "88.75CR" },
      { "region": "BROTheAvatar 2023", "collections": "80.50CR" },
      { "region": "VakeelSaab 2021", "collections": "74.35CR" }
    ],
    "Pre Release Business Nizam": [
      { "region": "Pushpa2TheRule 2024", "collections": "100CR" },
      { "region": "RRRMovie 2022", "collections": "70CR" },
      { "region": "KALKI2898AD 2024", "collections": "65CR" },
      { "region": "Salaar 2023", "collections": "60CR" },
      { "region": "AdiPurush 2023", "collections": "50CR" },
      { "region": "Devara Part 1 2024", "collections": "44.00CR" },
      { "region": "GunturKaaram 2024", "collections": "42.00CR" },
      { "region": "Baahubali2 2017", "collections": "40CR" },
      { "region": "Saaho 2019", "collections": "40CR" },
      { "region": "Acharya 2022", "collections": "38CR" },
      { "region": "RadheShyam 2022", "collections": "36.50CR" },
      { "region": "Pushpa 2021", "collections": "36CR" },
      { "region": "SarkaruVaariPaata 2022", "collections": "36CR" },
      { "region": "BheemlaNayak 2022", "collections": "35CR" },
      { "region": "BROTheAvatar 2023", "collections": "30CR" },
      { "region": "Agnyaathavaasi 2018", "collections": "29.50CR" },
      { "region": "SyeRaa 2019", "collections": "28CR" }
    ],
    "NTR Pre Release Business": [
      { "region": "Shakti 2011", "collections": "38.5CR" },
      { "region": "Oosaravelli 2011", "collections": "32CR" },
      { "region": "Dhammu 2012", "collections": "36CR" },
      { "region": "Baadshah 2013", "collections": "46CR" },
      { "region": "Ramayya Vastavayya 2013", "collections": "46CR" },
      { "region": "Rabhasa 2014", "collections": "45CR" },
      { "region": "Temper 2015", "collections": "43CR" },
      { "region": "Nannaku Prematho 2016", "collections": "52CR" },
      { "region": "Janatha Garage 2016", "collections": "63CR" },
      { "region": "Jai lavakusa 2017", "collections": "84CR" },
      { "region": "Aravinda Sametha 2018", "collections": "91CR" },
      { "region": "RRR 2022", "collections": "451CR" },
      { "region": "Devara 2024", "collections": "182.25CR" }
    ],
    "MB Pre Release Business": [
      { "region": "Dookudu", "collections": "32.5CR" },
      { "region": "Businessman", "collections": "38CR" },
      { "region": "Seethamma Vakitlo Sirimalle Chettu", "collections": "47CR" },
      { "region": "1 Nenokkadine", "collections": "53CR" },
      { "region": "Aaagadu", "collections": "56CR" },
      { "region": "Srimanthudu", "collections": "59CR" },
      { "region": "Brahmotsavam", "collections": "76CR" },
      { "region": "Spyder", "collections": "98CR" },
      { "region": "Bharat Ane Nenu", "collections": "100CR" },
      { "region": "Maharshi", "collections": "98CR" },
      { "region": "Sarileru Neekevvaru", "collections": "102CR" },
      { "region": "Sarkaru Vaari Pata", "collections": "CR" },
      { "region": "Guntur Kaaram", "collections": "CR" }
    ],
    "Prabhas Pre Release Business": [
      { "region": "Mr Perfect", "collections": "18CR" },
      { "region": "Rebel", "collections": "34CR" },
      { "region": "Mirchi", "collections": "32CR" },
      { "region": "Baahubali", "collections": "86CR" },
      { "region": "Baahubali2", "collections": "190CR" },
      { "region": "Saaho", "collections": "172CR" },
      { "region": "Radhe Shyam", "collections": "CR" },
      { "region": "Adipurush", "collections": "CR" },
      { "region": "Salaar", "collections": "CR" },
      { "region": "Kalki", "collections": "CR" }
    ],
    "PK Pre Release Business": [
      { "region": "Teenmaar", "collections": "26CR" },
      { "region": "Panjaa", "collections": "32.5CR" },
      { "region": "Gabbarsingh", "collections": "32CR" },
      { "region": "Camera Man Gangato Rambabu", "collections": "43CR" },
      { "region": "Atharintiki Daaredi", "collections": "52CR" },
      { "region": "Gopala Gopala", "collections": "47CR" },
      { "region": "Sardaar Gabbar Singh", "collections": "81CR" },
      { "region": "Katamrayudu", "collections": "84CR" },
      { "region": "Agnyathavasi", "collections": "125CR" },
      { "region": "Vakeel Saab", "collections": "84CR" },
      { "region": "Bheemla Nayak", "collections": "84CR" },
      { "region": "Bro", "collections": "84CR" },
    ],
    "Correct RC Pre Release Business": [
      { "region": "Chirutha", "collections": "26CR" },
      { "region": "Magadheera", "collections": "32.5CR" },
      { "region": "Orange", "collections": "32CR" },
      { "region": "Racha", "collections": "43CR" },
      { "region": "Naayak", "collections": "52CR" },
      { "region": "Zanjeer", "collections": "47CR" },
      { "region": "Yevadu", "collections": "81CR" },
      { "region": "Govindudu Andarivadele", "collections": "84CR" },
      { "region": "Bruce Lee: The Fighter", "collections": "125CR" },
      { "region": "Dhruva", "collections": "84CR" },
      { "region": "Rangasthalam", "collections": "84CR" },
      { "region": "Vinaya Vidheya Rama", "collections": "84CR" },
      { "region": "RRR", "collections": "84CR" },
      { "region": "Game Changer", "collections": "84CR" }
    ],
    "Correct AA Pre Release Business": [
      { "region": "Badrinath", "collections": "26CR" },
      { "region": "Julayi", "collections": "26CR" },
      { "region": "Iddarammayilatho", "collections": "26CR" },
      { "region": "Race Gurram", "collections": "26CR" },
      { "region": "S/O Satyamurthy", "collections": "32.5CR" },
      { "region": "Sarrainodu", "collections": "32CR" },
      { "region": "DJ: Duvvada Jagannadham", "collections": "43CR" },
      { "region": "Naa Peru Surya", "collections": "52CR" },
      { "region": "Ala Vaikunthapurramuloo", "collections": "47CR" },
      { "region": "Pushpa: The Rise", "collections": "81CR" },
      { "region": "Pushpa 2: The Rule", "collections": "84CR" }
    ],
    

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

