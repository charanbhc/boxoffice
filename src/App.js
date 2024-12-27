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
                src="https://pbs.twimg.com/media/GfvyYayaEAAl4qB?format=jpg&name=medium " 
                alt="1" 
              />
              <h3>Let's go  "RETRO" </h3>
              <p>#Retro title teaser reaches 'The One' crore hearts... 🙏🏼 </p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/67626b225cd3d-its-pushpa-raj-at-box-office-allu-arjuns-film-to-soon-cross-1-500-crore-worldwide-182636720-16x9.png?size=948:533" 
                alt="2" 
              />
              <h3>HIGHEST GROSSER OF INDIAN CINEMA 2024</h3>
              <p>Pushpa 2 is the FASTEST INDIAN FILM EVER to collect 1700cr WORLDWIDE in 21 days ❤️‍🔥</p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="3" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>
            
            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GfxYIDqbwAAWYo9?format=jpg&name=large" 
                alt="4" 
              />
              <h3>#RRRBehindAndBeyondOnNetflix</h3>
              <p>Respect you have for SSR will grow a thousand times after watching #RRRBehindAndBeyond which was just released.</p>
             
            </div>


            <div className="scrolling-titles">
          <span>The blockbuster, star-studded #GameChangerGlobalEvent that took Dallas by storm is coming to you!. Catch the #GameChanger Mega MASS'ive Pre-Release Event telecast on @ZeeTVTelugu at 4 PM this Saturday! Don't miss it!</span>
        </div>


            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfx58iKbYAAjdRv?format=png&name=900x900" 
                alt="5 " 
              />
              <h3>Countdown for Mass Mania takes off 🚁</h3>
              <p>The Masses Favorite Man is Landing in 1️⃣5️⃣ DAYS 🦁🔥</p>
             
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GfujU7obAAAlSB8?format=jpg&name=large" 
                alt="6" 
              />
              <h3>#DaakuMaharaaj Second Single</h3>
              <p>The magic of breezy and soulful #Chinni keeps soaring! 2 MILLION+ views and counting! ❤️‍🔥 </p>
             
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GfnoTHIawAA-nx8?format=jpg&name=medium" 
                alt="7" 
              />
              <h3>#BlockbusterPongal Lyrical Video coming soon🔥</h3>
              <p>The third single of #SankranthikiVasthunam is going to be a blasting experience for you all💥 </p>
             
            </div>
            

          </div>
        </section>

        <div className="scrolling-titles">
          <span>Naveen Polishetty is a “Star Entertainer” for sure. Pre wedding video of #AnaganagaOkaRaju is hilarious bringing forth the amazing comic timing of the actor.</span>
        </div>
      </main>
    </div>
  );
}

export default App;
