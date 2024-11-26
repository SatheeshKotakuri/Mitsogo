import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MultiAppKiosk from "./MultiAppKiosk";
import AsamKiosk from "./AsamKiosk";
import DigitalSignages from "./DigitalSignages";
import SingleAppKiosk from "./SingleAppKiosk";
import WebBasedKiosk from "./WebBasedKiosk";
import './KioskContainer.css'
const KioskContainer = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="container kiosk-container">
      <div className="row">
        <div className="col-md-12">
          <h1
            style={{
              textAlign: "center",
              color: "black",
              paddingTop: "50px",
            }}
          >
            <strong>Specific kiosk modes for unique use cases</strong>
          </h1>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="row">
        <div className="dropdown-nav">
          <ul className="nav-list">
            <li >
              <Link
                to="/"
                className={activeLink === "/" ? "active" : ""}
                onClick={() => handleLinkClick("/")}
              >
                Single App Kiosk
              </Link>
            </li>
            <li>
              <Link
                to="/MultiAppKiosk"
                className={activeLink === "/MultiAppKiosk" ? "active" : ""}
                onClick={() => handleLinkClick("/MultiAppKiosk")}
              >
                Multi-App Kiosk
              </Link>
            </li>
            <li>
              <Link
                to="/WebBasedKiosk"
                className={activeLink === "/WebBasedKiosk" ? "active" : ""}
                onClick={() => handleLinkClick("/WebBasedKiosk")}
              >
                Web-based Kiosk
              </Link>
            </li>
            <li>
              <Link
                to="/DigitalSignages"
                className={activeLink === "/DigitalSignages" ? "active" : ""}
                onClick={() => handleLinkClick("/DigitalSignages")}
              >
                Digital Signages
              </Link>
            </li>
            <li>
              <Link
                to="/AsamKiosk"
                className={activeLink === "/AsamKiosk" ? "active" : ""}
                onClick={() => handleLinkClick("/AsamKiosk")}
              >
                ASAM Kiosk
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="row">
        <main className="content">
          <Routes>
            <Route path="/" element={<SingleAppKiosk />} />
            <Route path="/MultiAppKiosk" element={<MultiAppKiosk />} />
            <Route path="/WebBasedKiosk" element={<WebBasedKiosk />} />
            <Route path="/DigitalSignages" element={<DigitalSignages />} />
            <Route path="/AsamKiosk" element={<AsamKiosk />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default KioskContainer;
