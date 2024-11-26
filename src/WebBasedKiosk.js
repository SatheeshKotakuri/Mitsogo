import React from "react";
import "./KioskSection.css"; 

export default function WebBasedKiosk() {
    return(
        <>
         <section className="kiosk-section">
      <div className="content">
        <h2><strong>Explore the new way to manage web apps and websites</strong></h2>
        <ul className="features">
          <li>
            <span className="checkmark">✔</span> Let users access essential and approved web apps, website and files only.
          </li>
          <li>
            <span className="checkmark">✔</span> Make the best use of website kiosk with Hexnode's advanced settings.
          </li>
          <li>
            <span className="checkmark">✔</span> Tailor your experience to match your unique use case.
          </li>
          <li>
            <span className="checkmark">✔</span> From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img
          src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fweb-based-kiosk-image.jpg&w=1200&q=100"
          alt="Phone in hand"
        />
      </div>
    </section>
        </>
    )
}
  