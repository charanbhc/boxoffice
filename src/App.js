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
                alt="Game Changer Pre Release Event" 
              />
              <h3>Let's go  "RETRO" </h3>
              <p>#Retro title teaser reaches 'The One' crore hearts... 🙏🏼 </p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202412/67626b225cd3d-its-pushpa-raj-at-box-office-allu-arjuns-film-to-soon-cross-1-500-crore-worldwide-182636720-16x9.png?size=948:533" 
                alt="Allu Arjun Arrested" 
              />
              <h3>HIGHEST GROSSER OF INDIAN CINEMA 2024</h3>
              <p>Pushpa 2 is the FASTEST INDIAN FILM EVER to collect 1700cr WORLDWIDE in 21 days ❤️‍🔥</p>
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="Nagarjuna Satisfied Revanth Reddy‘s Ego The Most" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>
            
            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="Nagarjuna Satisfied Revanth Reddy‘s Ego The Most" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>
            <div className="scrolling-titles">
          <span>The blockbuster, star-studded #GameChangerGlobalEvent that took Dallas by storm is coming to you!. Catch the #GameChanger Mega MASS'ive Pre-Release Event telecast on @ZeeTVTelugu at 4 PM this Saturday! Don't miss it!</span>
        </div>
            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="Nagarjuna Satisfied Revanth Reddy‘s Ego The Most" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="Nagarjuna Satisfied Revanth Reddy‘s Ego The Most" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>

            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfv424VaoAAewGk?format=png&name=900x900" 
                alt="Nagarjuna Satisfied Revanth Reddy‘s Ego The Most" 
              />
              <h3>New Year With RAMANA gadu 😎</h3>
              <p>#GunturKaaram 31st Bookings on 🔥🔥🔥 </p>
             
            </div>
            

          </div>
        </section>

        <div className="scrolling-titles">
          <span>The blockbuster, star-studded #GameChangerGlobalEvent that took Dallas by storm is coming to you!. Catch the #GameChanger Mega MASS'ive Pre-Release Event telecast on @ZeeTVTelugu at 4 PM this Saturday! Don't miss it!</span>
        </div>
      </main>
    </div>
  );
}

export default App;
