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

       

        
        <section className="news-section">
        <div className="news-block-container">

        <div className="news-block light-effect">
  <a 
    href="https://www.youtube.com/watch?v=SI_PhNII7Mc" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://img.youtube.com/vi/SI_PhNII7Mc/maxresdefault.jpg"
      alt="Thumbnail 1" 
      className="thumbnail"
    />
  </a>
  <h3>#AA22xA6 ▶️</h3>
  <p>You are in for the biggest game that you have ever seen!🔥</p>
</div>



<div className="news-block light-effect">
  <a 
    href="https://www.youtube.com/watch?v=2y_DH5gIrCU"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src="https://img.youtube.com/vi/2y_DH5gIrCU/maxresdefault.jpg"
      alt="Thumbnail 2" 
      className="thumbnail"
    />
  </a>
  <h3>#Peddi ▶️</h3>
  <p>Theatres will TREMBLE with MASS MADNESS! ❤️‍🔥</p>
</div>


<div className="news-block light-effect">
  <a 
    href="https://www.youtube.com/watch?v=kAtfaaUgDRU "
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src=" https://img.youtube.com/vi/kAtfaaUgDRU/maxresdefault.jpg"
      alt="Thumbnail 3" 
      className="thumbnail"
    />
  </a>
  <h3>#HIT3 Trailer ▶️</h3>
  <p>Taking charge worldwide from 01-May-2025. ❤️‍🔥</p>
</div>




            <div className="scrolling-titles">
          <span>I'm Dedicating This Award To All My Fans 🙏 I Will Make My Fans More More Mad Proud 🔥 #FirstGaddarAwardForAA || #Akhanda2 Teaser Trending #1 in Youtube from 5 Days++.....RECORD IN TFI Senior Hero's💥💥💥💥</span>
        </div>


         
            

          </div>
        </section>

     
      </main>
    </div>
  );
}

export default App;
