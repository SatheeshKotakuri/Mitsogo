import React, { useEffect, useState } from 'react';
import './App.css';
import pic from './images/hexnode-kiosk.webp';
import { Link } from 'react-router-dom';

import TestimonialSlider from './TestimonialSlider';
import PlatformsSupported from './PlatformsSupported';
import SignUpSection from './SignUpSection';
import AutoScrollLogos from './AutoScrollLogos';
import Kisok from './Kisok';
import KioskContainer from './KioskContainer';



function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (<>


    {/* Navbar */}
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="hlo">
      <div className="container-fluid">
        <h1 className="navbar-brand" id="sat">
          hexnode
        </h1>

        <Link to="/FreeTrail">
          <button className="btn btn-outline-success" type="submit" id="button">
            14 DAY FREE TRIAL
          </button>
        </Link>



      </div>
    </nav>

    <div className="container-fluid  text-light " style={{backgroundColor:"#020A19"}}>
      {/* First Row: Left Content, Right Image */}
      <div className="row pt-5 ">
        <div className="col-md-5" style={{ paddingLeft: '40px', paddingTop: '150px' }}>
          <h1 id="d">
            Turn your devices into <br />
            kiosks in a few minutes <br />
            with Hexnode UEM
          </h1>
          <br />
          <form className="d-flex flex-column flex-sm-row" role="search">
            <input
              className="form-control me-2"
              type="email"
              placeholder="Your Work Email"
              aria-label="Search"
              required
              id="b"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              id="c"
            >
              GET STARTED NOW!
            </button>
          </form>
        </div>
        <div className="col-md-6 ">
          <img src={pic} alt="kiosk" className="img-fluid" />
        </div>
      </div>
    </div>
    <div className="container-fluid">
  <div className="row justify-content-around p-2 align-items-center" style={{backgroundColor:"#1A1C2B"}}>
    <div className="col-md-3 column border-end">
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
      >
        <h2>IDC</h2>
        <p>
          Hexnode is listed as a leader and a major<br />
          player in IDC MarketScape UEM Vendors<br />
          Assessment Reports 2024.
        </p>
      </a>
    </div>
    <div className="col-md-3 column border-end">
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
      >
        <h2>Gartner</h2>
        <p>
          Hexnode mentioned as a Notable Vendor in<br />
          Midmarket Context: Magic Quadrant for<br />
          Unified Endpoint Management tools 2022.
        </p>
      </a>
    </div>
    <div className="col-md-3 column">
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
      >
        <h2>Forrester</h2>
        <p>
          Forrester includes Hexnode as a Notable<br />
          vendor in The Unified Endpoint<br />
          Management Landscape, Q3 2023.
        </p>
      </a>
    </div>
  </div>
</div>
     <KioskContainer/>
    <Kisok />
    <TestimonialSlider />
    <AutoScrollLogos />
    <PlatformsSupported />
    <SignUpSection />
  </>
  );
}

export default App;
