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
    "APTG Top Share Movies Day 1": [ 
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
    "World Wide Top Share Movies Day 1":[
        "Pushpa 2 The Rule 2024 160.01CR",
        "RRR 2022 135CR",
        "Baahubali2 2017 123C",
        "Devara Part 1 2024 98.60CR",
        "SALAAR 2024 97.49CR",
        "Kalki 2898 AD 2024 96.16CR",
        "Saaho 2019 73.64CR",
        "Adi Purush 2023 70.11CR",
        "Sye Raa Narasimha Reddy 2019 53.72CR",
        "Guntur Kaaram 2024 52.03CR",
        "Baahubali 2015 46C",
        "Sarkaru Vaari Paata 2022 45.21CR",
        "Sarileru Neekevvaru 2020 43.16CR",
        "Radhe Shyam 2022 39.37CR",
        "Agnyaathavaasi 2018 39.30C",
        "Pushpa 2021 38.49CR",
        "Aravindha Sametha 2018 37.20C",
        "Ala Vaikunthapurramuloo 2020 36.83CR",
        "Vakeel Saab 2021 36.46CR",
        "Bheemla Nayak 2022 36.37CR",
        "Khaidi No 150 2017 35.22C",
        "Bharat Ane Nenu 2018 35.20C",
        "Acharya 2022 35.05CR",
        "Maharshi 2019 32.2CR",
        "Vinaya Vidheya Rama 2019 31.31C",
        "Veera Simha Reddy 2023 31.05CR",
        "Rangasthalam 2018 30.02CR",
        "BRO The Avatar 2023 30.01CR",
        "Jai Lava Kusa 2017 29.40CR",
        "Waltair Veerayya 2023 29.30CR",
        "Janatha Garage 2016 28.70CR",
        "Sardar Gabbar Singh 2016 28.40CR",
        "Katamarayudu 2017 27.80C"
    ],
    "Tollywood Day 1 World Wide Top Grossing Movies": [
      "Pushpa 2 The Rule 2024 285.55CR",
      "RRR 2022 235CR",
      "Baahubali2 2017 215CR",
      "Kalki 2898 AD 2024 183.20CR",
      "Salaar 2024 167CR",
      "Devara Part 1 2024 157CR",
      "Adi Purush 2023 137CR",
      "Saaho 2019 126CR",
      "Sye Raa Narasimha Reddy 2019 85CR",
      "Guntur Kaaram 2024 79.30CR",
      "Baahubali 2015 73C",
      "Sarkaru Vaari Paata 2022 70CR",
      "Sarileru Neekevvaru 2020 67CR",
      "Radhe Shyam 2022 67CR",
      "Pushpa 2021 63CR",
      "Agnyaathavaasi 2018 60.50C",
      "Aravindha Sametha 2018 58C",
      "Bheemla Nayak 2022 56.50CR",
      "Bharat Ane Nenu 2018 55C",
      "Ala Vaikunthapurramuloo 2020 55CR",
      "Vakeel Saab 2021 52.40CR",
      "Acharya 2022 52CR",
      "Khaidi No 150 2017 50.50C",
      "Veera Simha Reddy 2023 50.10CR",
      "Waltair Veerayya 2023 49.10CR",
      "BRO The Avatar 2023 48.50CR",
      "Maharshi 2019 48.2CR",
      "Jai Lava Kusa 2017 46.80CR",
      "Rangasthalam 2018 45.1CR",
      "Vinaya Vidheya Rama 2019 42.3C",
      "SPYder 2017 41.30CR",
      "Janatha Garage 2016 41.2CR",
      "Sardar Gabbar Singh 2016 41CR",
      "Katamarayudu 2017 39.30C",
      "Dasara 2023 38.40C"
    ],
    "South Day 1 World Wide Top Grossing Movies": [
      "Pushpa 2 The Rule 2024 285.55CR",
      "RRR 2022 235CR",
      "Baahubali2 2017 215CR",
      "Kalki 2898 AD 2024 183.20CR",
      "Salaar 2024 167CR",
      "KGF Chapter 2 2022 164.20CR",
      "Devara Part 1 2024 157CR",
      "LEO Movie 2023 146.15CR",
      "Adi Purush 2023 137CR",
      "Saaho 2019 126CR",
      "The Greatest Of All Time 2024 104.75CR",
      "2Point0 2018 95CR",
      "Jailer 2023 91.10CR",
      "Kabali 2016 87.5CR",
      "Beast 2022 86.15CR",
      "Sye Raa Narasimha Reddy 2019 85CR",
      "Ponniyin Selvan1 2022 82.30CR",
      "Guntur Kaaram 2024 79.30CR",
      "Baahubali 2015 73.40CR",
      "Sarkaru Vaari Paata 2022 70CR",
      "Vettaiyan 2023 68.35CR",
      "Sarkar 2018 67CR",
      "Sarileru Neekevvaru 2020 67CR",
      "Radhe Shyam 2022 67CR",
      "Pushpa 2021 63CR",
      "Bigil 2019 62.85CR",
      "Vikram Hit List 2022 61.13CR",
      "Agnyaathavaasi 2018 60.50CR",
      "Ponniyin Selvan2 2023 59.12CR",
      "Aravindha Sametha 2018 58CR",
      "Bheemla Nayak 2022 56.50CR",
      "Bharat Ane Nenu 2018 55CR",
      "Ala Vaikunthapurramuloo 2020 55CR",
      "Vakeel Saab 2021 52.4CR",
      "Darbar 2020 52CR",
      "Acharya 2022 52CR",
      "Annaatthe 2021 50.85CR",
      "Khaidi No 150 2017 50.50CR",
      "Valimai 2022 50.20CR",
      "Veera Simha Reddy 2023 50.10CR",
      "Master 2021 50.02CR",
      "Waltair Veerayya 2023 49.10CR",
      "BRO The Avatar 2023 48.50CR",
      "Maharshi 2019 48.2CR",
      "Varisu 2023 47.52CR",
      "Mersal 2017 47.15CR",
      "Jai Lava Kusa 2017 46.80CR",
      "Rangasthalam 2018 45.10CR"
    ],
    
    
    

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