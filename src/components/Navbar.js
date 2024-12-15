import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home'); // State to track active tab

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">Telugu BOX OFFICE</a>
        </div>
        <ul className="nav-links">
          {['Home', 'Movies', 'News', 'Contact'].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => setActiveTab(tab)}
            >
              <a href={`#${tab.toLowerCase()}`}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
