import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (tabPath) => {
    setActiveTab(tabPath);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => handleTabClick('/')}>
           తెలుగు CINEMA 
          </Link>
        </div>

        <ul className="nav-links">
          {['/','/PreReleaseBusiness','/WW','/Day1','/aptg', '/boxoffice', '/ATRDay1','/Contact'].map((path, index) => (
            <li
              key={path}
              className={activeTab === path ? 'active-tab' : ''}
              onClick={() => handleTabClick(path)}
            >
              <Link to={path}>
                {['Home','Pre Rls B','Closing','Day 1','APTG', 'Archives', 'RECORDS','Contact'][index]}
              </Link>
            </li>
          ))}
        </ul>


      </nav>
    </div>
  );
}

export default Navbar;
