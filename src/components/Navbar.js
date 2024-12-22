import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home'); // State to track active tab

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setActiveTab('Home')}>
            TELUGU BO 
          </Link>
        </div>
        <ul className="nav-links">
          {['Home', 'BoxOffice', 'Trend', 'Contact'].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => setActiveTab(tab)}
            >
              <Link to={tab === 'Home' ? '/' : `/${tab.toLowerCase()}`}>
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
