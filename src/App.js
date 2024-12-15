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
              <h3>Allu Arjun Arrested</h3>
              <p>Icon Star 
@alluarjun
 along with his family met Megastar 
@KChiruTweets
 garu at his residence this afternoon!</p>
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
          <span>Breaking News: Latest Updates in Business and Finance! | New Startup Innovations Lead the Market | Stay Ahead with Market Trends!</span>
        </div>
      </main>
    </div>
  );
}

export default App;
