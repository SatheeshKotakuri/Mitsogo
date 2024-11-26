import React from "react"
import "./KioskSection.css"; 
export default function MultiAppKiosk(){
    return(
        <section className="kiosk-section">
        <div className="content">
          <h2><strong>Elevate efficiency with Multi-App Kiosk</strong></h2>
          <ul className="features">
            <li>
              <span className="checkmark">✔</span> Limit device access to approved apps, ensuring focus and productivity.
            </li>
            <li>
              <span className="checkmark">✔</span> With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.
            </li>
            <li>
              <span className="checkmark">✔</span> With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.
            </li>
            <li>
              <span className="checkmark">✔</span> Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.
            </li>
          </ul>
        </div>
        <div className="image-container">
          <img
            src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fmulti-app-kiosk-image.jpg&w=1200&q=100"
            alt="Phone in hand"
          />
        </div>
      </section>
  )
}
  
  