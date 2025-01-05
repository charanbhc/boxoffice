import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Import Navbar component
// import Day1 from './pages/Day1';

function App() {
  return (
    <div className="App">
      {/* Include Navbadsr at the top */}
      <Navbar />

      <main>
        <div className="image-container">
          <img 
            src="https://pbs.twimg.com/media/Geu1cMwbsAEWmBO?format=jpg&name=900x900" 
            // src="https://pbs.twimg.com/media/Ge53bWobUAAZdKn?format=jpg&name=medium"
            alt="Telugu Box Office" 
          />
        </div>
{/*       
        <div className="button-container">
            <Link to="/Day1" className="nav-button">Day 1</Link>
            <Link to="/Day1" className="nav-button">Day 1</Link>
            <Link to="/Day1" className="nav-button">Day 1</Link>
            <Link to="/Day1" className="nav-button">Day 1</Link>
            <Link to="/Day1" className="nav-button">Day 1</Link>
            <Link to="/Day1" className="nav-button">Day 1</Link>
          </div> */}
       

        
        <section className="news-section">
        <div className="news-block-container">

        <div className="news-block light-effect">
  <a 
    href="https://www.youtube.com/watch?v=zHiKFSBO_JE&t=1s" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://img.youtube.com/vi/zHiKFSBO_JE/0.jpg" 
      alt="Retro Title Teaser Thumbnail" 
      className="thumbnail"
    />
  </a>
  <h3>#GameChanger Trailer ▶️</h3>
  <p>You are in for the biggest game that you have ever seen!🔥</p>
</div>



<div className="news-block light-effect">
  <a 
    href="https://youtu.be/fNDRSver0uM?si=gmLA626mI0VvOFMZ" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://img.youtube.com/vi/fNDRSver0uM/0.jpg" 
      alt="GameChanger Trailer Thumbnail" 
      className="thumbnail"
    />
  </a>
  <h3>#DaakuMaharaaj Trailer ▶️</h3>
  <p>Theatres will TREMBLE with MASS MADNESS! ❤️‍🔥</p>
</div>



            <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GgXORvlbcAAcFMF?format=jpg&name=4096x4096" 
                alt="3" 
              />
              <h3>#సంక్రాంతికివస్తున్నాం on 14th JAN, 2025.</h3>
              <p>Trailer Launch On Jan 6th at Collector Ground, Nizamabad</p>
             
            </div>
            
        


            <div className="scrolling-titles">
          <span>Get ready for big surprises, exciting moments and non-stop fun with the Global Star 🔥, #UnstoppablewithNBKS4 Episode 9 Premieres Jan 8th at 7PM on @ahavideoIN.</span>
        </div>


            {/* <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/Gfx58iKbYAAjdRv?format=png&name=900x900" 
                alt="5 " 
              />
              <h3>Countdown for Mass Mania takes off 🚁</h3>
              <p>The Masses Favorite Man is Landing in 1️⃣5️⃣ DAYS 🦁🔥</p>
             
            </div> */}

            {/* <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GfujU7obAAAlSB8?format=jpg&name=large" 
                alt="6" 
              />
              <h3>#DaakuMaharaaj Second Single</h3>
              <p>The magic of breezy and soulful #Chinni keeps soaring! 2 MILLION+ views and counting! ❤️‍🔥 </p>
             
            </div> */}

            {/* <div className="news-block light-effect">
              <img 
                src="https://pbs.twimg.com/media/GfnoTHIawAA-nx8?format=jpg&name=medium" 
                alt="7" 
              />
              <h3>#BlockbusterPongal Lyrical Video coming soon🔥</h3>
              <p>The third single of #SankranthikiVasthunam is going to be a blasting experience for you all💥 </p>
             
            </div> */}
            

          </div>
        </section>

        {/* <div className="scrolling-titles">
          <span>Naveen Polishetty is a “Star Entertainer” for sure. Pre wedding video of #AnaganagaOkaRaju is hilarious bringing forth the amazing comic timing of the actor.</span>
        </div> */}
      </main>
    </div>
  );
}

export default App;
