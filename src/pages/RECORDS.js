import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./RECORDS.css";

function ATRDay1() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial value from URL query
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "";

  const [selectedHero, setSelectedHero] = useState(initialCategory);

  const heroRecords = {
    
    "WW Day 1 ": {

        "Mahesh Babu": ["Khaleja", "Dookudu", "Businessman", "SVSC", "Aagadu", "Srimanthudu *"],
        "Pawan Kalyan": ["Gabbar Singh", "CMGR", "Attarintiki Daredi", "SGS *", "Agnyathavasi *"],
        "Prabhas": ["Baahubali", "Baahubali 2", "Saaho *", "Salaar *", "Kalki*"],
        "NTR": ["Oosaravalli", "Badshah", "RRR", "Devara *"],
        "Ram Charan": ["Magadheera", "Orange", "RRR"],
        "Chiranjeevi": ["Kaidhi 150*"],
        "Allu Arjun": ["Pushpa 2 *"]
      
    },
  "APTG Day 1": {
  "NTR": ["Oosaravalli", "Dammu", "Badshah", "JLK *", "ASVR *", "RRR", "Devara *"],
  "Pawan Kalyan": ["Gabbar Singh", "CMGR", "Attarintiki Daredi", "SGS *", "Agnyathavasi *"],
  "Ram Charan": ["Magadheera", "Racha", "Rrr"],
  "Mahesh Babu": ["Dookudu", "Businessman", "Srimanthudu *"],
  "Prabhas": ["Baahubali", "Baahubali 2", "Saaho *", "Salaar *"],
  "Allu Arjun": ["Pushpa 2 *"],
  "Chiranjeevi": ["Kaidhi 150", "Sye Raa *"]
},
"All Time Top3 ": {
  "Mahesh Babu": ["Okkadu", "Pokiri", "Dookudu", "Businessman", "Srimanthudu", "SLN"],
  "Prabhas": ["Baahubali", "Baahubali 2", "Saaho", "Salaar", "Kalki"],
  "NTR": ["Aadi", "Simhadri", "Yamadonga", "JG", "RRR"],
  "Pawan Kalyan": ["Kushi", "Jalsa", "Gabbar Singh", "Attarintiki Daredi"],
  "Ram Charan": ["Magadheera", "Racha", "Rangasthalam", "RRR"],
  "Allu Arjun": ["Ala Vaikunthapurramuloo", "Pushpa 2"]
},
  "All Time Top3 (Non SSR)": {
    "Mahesh Babu": ["Okkadu", "Pokiri", "Dookudu", "Businessman", "Srimanthudu", "BAN", "Maharshi", "SLN"],
    "Prabhas": ["Baahubali", "Baahubali 2", "Saaho", "Salaar", "Kalki"],
    "NTR": ["Aadi", "Simhadri", "Yamadonga", "JG", "RRR"],
    "Pawan Kalyan": ["Kushi", "Jalsa", "Gabbar Singh", "Attarintiki Daredi"],
    "Ram Charan": ["Magadheera", "Racha", "Rangasthalam", "RRR"],
    "Allu Arjun": ["Ala Vaikunthapurramuloo", "Pushpa 2"]
  },
    "$1M Movies ": {
      "Mahesh Babu": ["Dookudu","SVSC","1","Aagadu","Srimanthudu","Brahmotsavam","Spyder","BAN","Maharshi","SLN","SVP","Guntur Karaam"],
      "Nani": ["Eega","Bhale Bhale Magadivoi","Nenu Local","Ninnu Kori","MCA","Jersey","Ante Sundaraniki","Dasara","Hi Nanna","Saripodhaa Sanivaaram"],
      "NTR": ["Baadshah","Temper","Nannaku Prematho","Janatha Garage","Jai Lava Kusa","Aravindha Sametha","RRR","Devara"],
      "Pawan Kalyan": ["Gabbar Singh","Attharintiki Dharedi","Sardaar Gabbarsingh","Katamarayudu","Agnyathavaasi","Bheemla Naayak","Bro"],
      "Prabhas": ["Baahubali","Baahubali 2","Saaho","Radhe Shyam","Adipurush","Salaar","Kalki"],
      "Allu Arjun": ["Race Gurram","S/O Satyamurthy","Duvvada Jagannadham","Ala Vaikunthapuramuloo","Pushpa","Pushpa 2"],
      "Ram Charan": ["Dhruva","Rangasthalam","RRR"],
    },
    "Nizam Day 1": {
      "Mahesh Babu":["Dookudu", "Businessman", "Aagadu", "Srimanthudu*", "Maharshi*", "SVP*"],
      "NTR": ["Oosaravelli", "Janatha Garage*", "Jai Lava Kusa*", "Aravinda Sametha*", "RRR", "Devara*" ],
      "Prabhas": ["Baahubali", "Baahubali 2", "Saaho", "Adipurush*", "Salaar*"],
      "Pawan Kalyan": ["CMGR", "Atharintiki Daaredi", "Agnyaathavaasi*","Bheemla Nayak"],
      "Ram Charan": ["Magadheera", "RRR"],
      "Allu Arjun": ["Pushpa", "Pushpa 2"],
    },

    "USA(Premieres)	 ": {
      "Mahesh Babu": ["Khaleja","Dookudu", "Businessman","SVSC","Aagadu"],
      "Pawan Kalyan": ["Panja","Gabbar Singh","CMGR","Atharintiki Daaredi"],
      "Prabhas": ["Baahubali", "Baahubali 2","Kalki"],
      "Ram Charan": ["Magadheera","Orange", "RRR"],
      "NTR": ["Baadshah","RRR"],
    },

  
    "ATR Mahesh Babu": {
      "Nizam ★": ["Athidhi", "Dookudu", "Businessman", "Aagadu"],
      "UA": ["Dookudu", "Businessman"],
      "Ceeded": [],
      "Krishna": ["Dookudu", "Businessman", "Sarileru Neekevvaru"],
      "Guntur": ["Athidhi","Dookudu", "Businessman", "Aagadu"],
      "Nellore": [],
      "East ★": ["Khaleja","Dookudu", "Businessman", "SVSC","1","Aagadu",],
      "West ★": ["Khaleja","Dookudu", "Businessman", "Aagadu"],
      "OS ★": ["Khaleja","Dookudu", "Businessman","SVSC","Aagadu"],
      "USA(Premieres) ★": ["Sainikudu","Athidhi","Khaleja","Dookudu", "Businessman","SVSC","Aagadu"],
      "USA(Premieres+Day1) ★": ["Khaleja","Dookudu", "Businessman","SVSC", "Aagadu"],
      
    },
    "ATR NTR": {
      "Nizam": ["Oosaravelli", "RRR"],
      "UA ★": ["Yamadonga", "Oosaravelli", "Dhammu", "Janatha Garage", "RRR"],
      "Ceeded ★": ["Yamadonga", "Oosaravelli", "Dhammu", "Baadshah", "RRR"],
      "Krishna": ["Oosaravelli", "Janatha Garage", "RRR"],
      "Guntur ★": ["Adhurs", "Oosaravelli", "Dhammu", "Baadshah", "JG", "RRR"],
      "Nellore": ["Yamadonga", "Baadshah", "RRR"],
      "East": ["Adhurs", "Oosaravelli", "Baadshah", "Janatha Garage"],
      "West": ["Adhurs", "Oosaravelli", "Dhammu"],
      "OS": ["RRR"],
      "USA(Premieres)": ["Baadshah","RRR"],
      "USA(Premieres+Day1)": ["RRR"]
   
    },
    "ATR Prabhas": {
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
    "ATR Pawan Kalyan": {
      "Nizam ★": ["Jalsa", "CMGR", "AD", "Bheemla Nayak"],
      "UA ★": ["Jalsa", "Puli", "CMGR", "SGS", "Katamarayudu"],
      "Ceeded": [],
      "Krishna ★": ["Jalsa", "Puli", "AD", "Gabbar Singh", "SGS"],
      "Guntur": ["AD", "Katamarayudu"],
      "Nellore": ["AD", "Katamarayudu"],
      "East": ["Gabbar Singh", "AD", "SGS", "KTM"],
      "West": ["AD", "SGS"],
      "OS": ["Jalsa","AD"],
      "USA(Premieres)": ["Jalsa","Panja","Gabbar Singh","CMGR","AD"],
      "USA(Premieres+Day1)": ["Jalsa","AD"]
    },
    "ATR Ramcharan": {
      "Nizam": ["Magadheera", "RRR"],
      "UA": ["Magadheera", "Nayak", "RRR"],
      "Ceeded ★": ["Chitutha", "Magadheera", "Racha","VVR", "RRR"],
      "Krishna": ["Racha", "RRR"],
      "Guntur": ["Magadheera", "Racha", "RRR"],
      "Nellore ★": ["Magadheera", "Racha", "Nayak", "RRR"],
      "East": ["Magadheera", "Racha", "Yevadu"],
      "West": ["Racha", "Magadheera", "Nayak"],
      "OS": ["Magadheera", "RRR"],
      "USA(Premieres)": ["Magadheera", "RRR"],
      "USA(Premieres+Day1)": ["Magadheera", "RRR"]
    },
    "ATR Allu Arjun": {
        "Nizam": ["Pushpa","Pushpa 2"],
        "UA": ["Pushpa 2"],
        "Ceeded": [],
        "Krishna": ["Pushpa 2"],
        "Guntur": [],
        "Nellore": [],
        "East": [],
        "West": [],
        "OS": [],
        "USA(Premieres)": [],
        "USA(Premieres+Day1)": []
      },
      "APTG Day 1 Fixtures MB": {
        "TOP 1": ["Dookudu", "Businessman"],
        "TOP 2": ["Aagadu","Srimanthudu"],
        "TOP 3": ["1", "Bharath Ane Nenu"],
        "TOP 4 ★": ["Brahmotsavam", "Maharshi", "SLN", "Guntur Kaaram", "SVP"],
        "TOP 7": ["SVSC"],
        "TOP 9": ["Spyder"]
      },
      
      "APTG Day 1 Fixtures NTR": {
        "TOP 1 ★": ["Oosaravalli", "Dammu", "Badshah", "RRR"],
        "TOP 2": ["ASVR", "Devara"],
        "TOP 3 ★": ["Shakthi", "Ramaiah Vastavaiah", "Rabhasa", "Temper", "JG", "JLK"],
        "TOP 4": ["Naannaku Prematho"]
  },
  "APTG Day 1 Fixtures PK": {
    "TOP 1": ["Gabbar Singh","CMGR","Atharintiki Daaredi"],
    "TOP 2 ★": ["Panja","SGS","Agnyaathavaasi"],
    "TOP 3": ["Katamarayudu"],
    "TOP 4": ["Gopala Gopala"],
    "TOP 5": ["Vakeel Saab"],
    "TOP 7": ["Teenmar","Bheemla Nayak"],
    "TOP 19": ["Bro"]
},

"APTG Day 1 Fixtures PRABHAS": {
  "TOP 1": ["Baahubali","Baahubali 2"],
  "TOP 2": ["Saaho","Salaar"],
  "TOP 3": ["Kalki"],
  "TOP 6": ["Adipurush"],
  "TOP 13": ["Radhe Shyam"]
},
"Industry Hits Since 2000": {
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
  "Ram Charan": ["Magadheera", "Rangasthalam *", "RRR"],
  "Prabhas": ["Baahubali", "Baahubali 2"],
  "Mahesh Babu": ["Pokiri", "Srimantudu *"],
  "Allu Arjun": ["Ala Vaikunthapurramuloo *", "Pushpa 2(Indian IH)"],
  "Chiranjeevi": ["Indra","Khaidi No. 150 *"],
  "Bala Krishna": ["Narasimha Naidu	"],
  "Tarun": ["Nuvve Kavali"],
  "Pawan Kalyan": ["Attarintiki Daredi"],
  "NTR": ["RRR"],
  "Venkatesh": ["Sankranthiki Vasthunam"]
    // "Bala Krishna": ["Muddula Mavayya", "Samara Simha Reddy", "Narasimha Naidu"],
  
 
    // "Venkatesh": ["Chanti"],
    // "Mohan Babu": ["Peddha Rayudu"],
  

  },
    
      "100CR SHARES": {
        "Prabhas": ["Baahubali","Baahubali 2","Saaho","Adipurush","Salaar","Kalki"],
        "Mahesh Babu": ["Bharath Ane Nenu","Maharshi","SLN","SVP","Guntur Kaaram"],
        "Allu Arjun": ["Ala Vaikunthapurramu loo","Pushpa","Pushpa 2"],
        "Chiranjevi":["Khaidi 150","SyeRaa","Waltair Veerayya"],
        "Ram Charan": ["Rangasthalam","RRR","Game Changer"],
        "NTR": ["RRR","Devara"],
      },
      // "Overall Breakeven ": {
      //   "Mahesh Babu": ["Rajakumarudu", "Okkadu", "Pokiri", "Dookudu", "Businessman", "Srimanthudu"],
      //   "NTR": ["Student no 1","Aadi","Simhadri","Yamadonga","Brindavanam"],
      //   "Pawan Kalyan": ["GokulamLoSeetha","Suswagatham","TholiPrema","Thammudu","Kushi","GS","AD"],
      //   "Ram Charan": ["Magadheera","Rangasthalam"],
      //   "Prabhas": ["Varsham","Chatrapathi","Darling","Mr.Perfect","Mirchi","BB1","BB2"],
      //   "Allu Arjun": ["Gangotri","Aarya","Desamudhuru","Parugu","Julayi","Race gurram"]
      
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
    const selected = event.target.value;
    setSelectedHero(selected);
    navigate(`?category=${encodeURIComponent(selected)}`); // Update the URL
  };

  useEffect(() => {
    // When the URL changes manually, update selection
    const query = new URLSearchParams(location.search);
    const category = query.get("category") || "";
    setSelectedHero(category);
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="hero-select" className="dropdown-label">
            Select a category:
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

        {selectedHero && heroRecords[selectedHero] && (
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
                {Object.entries(heroRecords[selectedHero]).map(([region, movies]) => (
                  <tr key={region}>
                    <td>{region}</td>
                    <td>{movies.join(", ")}</td>
                    <td>{movies.length}</td>
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