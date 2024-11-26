import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="kiosk-container">
      <nav className="navbar" id="navbar1">
        <ul>
          <li
            className="dropdown"
            onMouseEnter={() => toggleDropdown("singleApp")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/" className="nav-link">
              Single App Kiosk
            </Link>
            {activeDropdown === "singleApp" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/feature1">Feature 1</Link>
                </li>
                <li>
                  <Link to="/feature2">Feature 2</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => toggleDropdown("multiApp")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/MultiAppKiosk" className="nav-link">
              Multi-App Kiosk
            </Link>
            {activeDropdown === "multiApp" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/featureA">Feature A</Link>
                </li>
                <li>
                  <Link to="/featureB">Feature B</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/WebBasedKiosk" className="nav-link">
              Web-based Kiosk
            </Link>
          </li>
          <li>
            <Link to="/DigitalSignages" className="nav-link">
              Digital Signages
            </Link>
          </li>
          <li>
            <Link to="/AsamKiosk" className="nav-link">
              ASAM Kiosk
            </Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/" element={<div>Single App Kiosk</div>} />
          <Route path="/MultiAppKiosk" element={<div>Multi-App Kiosk</div>} />
          <Route path="/WebBasedKiosk" element={<div>Web-based Kiosk</div>} />
          <Route path="/DigitalSignages" element={<div>Digital Signages</div>} />
          <Route path="/AsamKiosk" element={<div>ASAM Kiosk</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default Navbar;
