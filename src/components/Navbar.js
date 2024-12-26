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
            LOVE CINEMAA
          </Link>
        </div>
        <ul className="nav-links">
          {['/', '/boxoffice', '/aptg', '/ATRDay1','/PreReleaseBusiness','/Day1','/WW','/Contact'].map((path, index) => (
            <li
              key={path}
              className={activeTab === path ? 'active-tab' : ''}
              onClick={() => handleTabClick(path)}
            >
              <Link to={path}>
                {['Home', 'BoxOffice', 'APTG Town Records', 'ATR Teritory','Pre-Release Business','Day 1','WW','Contact'][index]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
