import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar component

function App() {
  return (
    <div className="App">
      {/* Include Navbar at the top */}
      <Navbar />

      <main>
        <div className="image-container">
          <img 
            src="https://pbs.twimg.com/media/Geu1cMwbsAEWmBO?format=jpg&name=900x900" 
            // src="https://pbs.twimg.com/media/Ge53bWobUAAZdKn?format=jpg&name=medium"
            alt="Telugu Box Office" 
          />
        </div>
        
        <section className="news-section">
          <div className="news-block-container">
            <div className="news-block light-effect">
              <img 
                src="https://assets-in.bmscdn.com/discovery-catalog/events/et00311772-splqewluua-landscape.jpg" 
                alt="Game Changer Pre Release Event" 
              />
              <h3>Game Changer Pre Release Event</h3>
              <p>Get ready for a Sensational Evening like never before!  🔥</p>
              <p>The most iconic celebration for #GameChanger is set to dazzle✨ the USA.</p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Ge1EB-6b0AAW_IG?format=png&name=900x900" 
                alt="Allu Arjun Arrested" 
              />
              <h3>మెగాస్టార్ ఇంట్లో అల్లు అర్జున్... </h3>
              <p>Icon Star చాలా కాలం తరువాత #Pushpa2 షర్ట్స్ లో కాకుండా నార్మల్ గా కనిపించిన బన్నీ... అయితే ఈ సారి విజయ్ దేవరకొండ రౌడీ బ్రాండ్ </p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://images.moneycontrol.com/static-mcnews/2024/03/SSMB29-1.jpg?impolicy=website&width=1600&height=900" 
                alt="SSMB29 UPDATE" 
              />
              <h3>SSMB29 UPDATE</h3>
              <p>2027 RELEASE</p>
              <p>PRIYANKA CHOPRA supposed to be in cast</p>
            </div>
          </div>
        </section>

        <div className="scrolling-titles">
          <span>Naga Vamsi on board for Akhil Akkineni

సితార, నాగార్జున ‘మనం ఎంటర్టైన్మెంట్స్’కలిసి #Akhil6 నిర్మించబోతున్నారు

చిత్తూరు జిల్లాలో రెండు గ్రామాల మధ్య జరిగే కథ... </span>
        </div>
      </main>
    </div>
  );
}

export default App;
