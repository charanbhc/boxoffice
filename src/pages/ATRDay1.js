import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./ATRDay1.css";

function ATRDay1() {
  const [selectedHero, setSelectedHero] = useState(""); // Track selected hero

  const heroRecords = {
    "WW Day 1 ": {
      "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","RRR","DEVARA *"],
      "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150*"]
    },
    "APTG Day 1 ": {
      "Mahesh Babu": ["DOOKUDU","BUSINESSMAN","SRIMANTUDU *"],
      "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JAI LAVA KUSA *","ARAVINDA SAMETHA *","RRR","DEVARA *"],
      "Pawan Kalyan": ["GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *"],
      "Allu Arjun": ["PUSHPA 2 *"],
      "Chiranjeevi": ["KAIDHI 150","SYE RAA *"]
    },
    // "$1M Movies ": {
    //   "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU","Guntur Karaam"],
    //   "NTR": ["BADSHAH","TEMPER","NANNAKU PREMATHO","JANATHA GARAGE","Jai Lava Kusa","Aravindha Sametha","RRR","DEVARA *"],
    //   "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
    //   "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
    //   "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO ","Radhe Shyam","Adipurush","SALAAR ","KALKI"],
    //   "Allu Arjun": ["PUSHPA 2"],
    //   "Chiranjeevi": ["KAIDHI 150"]
    // },
    "Industry Hits & Non SSR*": {
    //   "Chiranjeevi": [
    //     "Khaidhi",
    //     "Pasivadi Pranam",
    //     "Yamudiki Mogudu",
    //     "Atthaku Yamudu Ammaiki Mogudu",
    //     "Jagadheka Veerudu Athiloka Sundhari",
    //     "Gang Leader",
    //     "Gharana Mogudu",
    //     "Indhra",
    //     "Khaidi No. 150*",
    //     "Sye Raa Narasimha Reddy*"
    // ],
    "Prabhas": ["Baahubali", "Baahubali 2", "Salaar *", "Kalki*"],
    "Ram Charan": ["Magadheera", "Rangasthalam*", "RRR"],
      "Mahesh Babu": ["Pokiri", "Dookudu*", "Srimantudu*"],
      
      "Pawan Kalyan": ["Gabbar Singh*","Attarintiki Daredi"],
      // "Bala Krishna": ["Muddula Mavayya", "Samara Simha Reddy", "Narasimha Naidu"],
     
      "Allu Arjun": ["Ala Vaikunthapurramuloo*", "Pushpa 2*"],
     
      
      "Ntr": ["RRR"],
      // "Venkatesh": ["Chanti"],
      // "Mohan Babu": ["Peddha Rayudu"],
      // "Tarun": ["Nuvve Kavali"]
  
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
      "OS": ["Khaleja","Dookudu", "Businessman","Seethamma Vakitlo Sirimalle Chettu","Aagadu"],
      "USA(Premieres)": ["Sainikudu","Athidhi","Khaleja","Dookudu", "Businessman","Seethamma Vakitlo Sirimalle Chettu","Aagadu"],
      "USA(Premieres+Day1)": ["Khaleja","Dookudu", "Businessman","Seethamma Vakitlo Sirimalle Chettu", "Aagadu"],
      
    },
    "NTR": {
      "Nizam": ["Oosaravelli", "RRR"],
      "UA": ["Yamadonga", "Oosaravelli", "Dhammu", "Janatha Garage", "RRR"],
      "Ceeded": ["Yamadonga", "Oosaravelli", "Dhammu", "Baadshah", "RRR"],
      "Krishna": ["Oosaravelli", "Janatha Garage", "RRR"],
      "Guntur": ["Adhurs", "Oosaravelli", "Dhammu", "Baadshah", "JG", "RRR"],
      "Nellore": ["Yamadonga", "Baadshah", "RRR"],
      "East": ["Adhurs", "Oosaravelli", "Baadshah", "Janatha Garage"],
      "West": ["Adhurs", "Oosaravelli", "Dhammu"],
      "OS": ["RRR"],
      "USA(Premieres)": ["Baadshah","RRR"],
      "USA(Premieres+Day1)": ["RRR"]
   
    },
    "Prabhas": {
      "Nizam": ["Baahubali ", "Baahubali 2", "Saaho"],
      "UA": ["Baahubali", "Baahubali 2"],
      "Ceeded": ["Baahubali", "Baahubali 2"],
      "Krishna": ["Baahubali", "Baahubali 2"],
      "Guntur": ["Baahubali", "Baahubali 2"],
      "Nellore": ["Baahubali", "Baahubali 2", "Saaho"],
      "East": ["Baahubali", "Baahubali 2"],
      "West": ["Baahubali", "Baahubali 2"],
      "OS": ["Baahubali", "Baahubali 2"],
      "USA(Premieres)": ["Baahubali", "Baahubali 2","Kalki"],
      "USA(Premieres+Day1)": ["Baahubali", "Baahubali 2"]
    },
    "Pawan Kalyan": {
      "Nizam": ["Jalsa", "Cameraman Gangatho Rambabu", "Atharintiki Daaredi", "Bheemla Nayak"],
      "UA": ["Jalsa", "Puli", "Cameraman Gangatho Rambabu", "Sardaar Gabbar Singh", "Katamarayudu"],
      "Ceeded": [],
      "Krishna": ["Jalsa", "Puli", "Atharintiki Daaredi", "Gabbar SinghS", "Sardaar Gabbar Singh"],
      "Guntur": ["Atharintiki Daaredi", "Katamarayudu"],
      "Nellore": ["Atharintiki Daaredi", "Katamarayudu"],
      "East": ["Gabbar Singh", "Atharintiki Daaredi", "Sardaar Gabbar Singh", "KTM"],
      "West": ["Atharintiki Daaredi", "Sardaar Gabbar Singh"],
      "OS": ["Jalsa","Atharintiki Daaredi"],
      "USA(Premieres)": ["Jalsa","Panja","Gabbar Singh","Cameraman Gangatho Rambabu","Atharintiki Daaredi"],
      "USA(Premieres+Day1)": ["Jalsa","Atharintiki Daaredi"]
    },
    "Allu Arjun": {
        "Nizam": ["Pushpa","Pushpa 2"],
        "UA": [],
        "Ceeded": [],
        "Krishna": [],
        "Guntur": [],
        "Nellore": [],
        "East": [],
        "West": [],
        "OS": [],
        "USA(Premieres)": [],
        "USA(Premieres+Day1)": []
      },
      "Ramcharan": {
        "Nizam": ["Magadheera", "RRR"],
        "UA": ["Magadheera", "Nayak", "RRR"],
        "Ceeded": ["Chitutha", "Magadheera", "Racha","Vinaya Vidheya Rama(7.35Cr(4.26Cr hires))", "RRR"],
        "Krishna": ["Racha", "RRR"],
        "Guntur": ["Magadheera", "Racha", "RRR"],
        "Nellore": ["Magadheera", "Racha", "Nayak", "RRR"],
        "East": ["Magadheera", "Racha", "Yevadu"],
        "West": ["Racha", "Magadheera", "Nayak"],
        "OS": ["Magadheera", "RRR"],
        "USA(Premieres)": ["Magadheera", "RRR"],
        "USA(Premieres+Day1)": ["Magadheera", "RRR"]
      },
      "APTG Day 1 MB FIXTURES ": {
        "TOP 1": ["DOOKUDU","BUSINESSMAN",],
        "TOP 2": ["SRIMANTUDU"],
        "TOP3": ["GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
        "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
        "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *"],
        "Allu Arjun": ["PUSHPA 2 *"],
        "Chiranjeevi": ["KAIDHI 150","SYE RAA *"]
      },
      // "100CR SHARES": {
      //   "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      //   "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      //   "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      //   "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      //   "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      //   "Allu Arjun": ["PUSHPA 2 *"],
      //   "Chiranjeevi": ["KAIDHI 150"]
      // },
      // "100CR GROSSERS": {
      //   "Mahesh Babu": ["ATHIDHI","KHALEJA","DOOKUDU","BUSINESSMAN","AAGADU","SRIMANTUDU *"],
      //   "NTR": ["YAMADONGA","OOSARAVALLI","DAMMU","BADSHAH","JANATHA GARAGE*","RRR","DEVARA *"],
      //   "Pawan Kalyan": ["JALSA","GABBAR SINGH","CAMERAMAN GANGATHO RAMBABU","ATTARINTIKI DAREDI","SARDAR GABBAR SINGH *","AGNATHAVASI *"],
      //   "Ram Charan": ["MAGADHEERA","RACHA","RRR"],
      //   "Prabhas": ["BAAHUBALI","BAAHUBALI 2","SAAHO *","SALAAR *","KALKI*"],
      //   "Allu Arjun": ["PUSHPA 2 *"],
      //   "Chiranjeevi": ["KAIDHI 150"]
      // },
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
                  <th>Region/Hero</th>
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