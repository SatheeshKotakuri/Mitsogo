import React from "react"
import "./KioskSection.css"; 
export default function DigitalSignages (){
    return(
        <>
         <section className="kiosk-section">
      <div className="content">
        <h2><strong>Capture attention with Digital Signage Kiosks</strong></h2>
        <ul className="features">
          <li>
            <span className="checkmark">✔</span> Transform your devices into captivating digital signage kiosks that grab attention.
          </li>
          <li>
            <span className="checkmark">✔</span> Engage your audience with vibrant images and seamless video streaming.
          </li>
          <li>
            <span className="checkmark">✔</span> Customize media files with trimming, muting, and background music.
          </li>
          <li>
            <span className="checkmark">✔</span> Advertise and show off your brand aesthetics to attract customers in different ways.
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img
          src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fdigital-signage-kiosk-image.jpg&w=1200&q=100"
          alt="Phone in hand"
        />
      </div>
    </section>
        </>
    )
}
   

  