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
          <span>Every re-release of #MaheshBabu is working well, but that doesn't mean it should be taken advantage of. THREE RE-RELEASES LINED UP IN THE SPAN OF A MONTH: #BharatAneNenu – APRIL 26 | #Khaleja – MAY 30 | #Athidi – MAY 31 </span>
        </div>


         
            

          </div>
        </section>

     
      </main>
    </div>
  );
}

export default App;
