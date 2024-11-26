import "./KioskSection.css"; 
export default function SingleAppKiosk(){
    return(
        <>
        <div>
        <section className="kiosk-section">
      <div className="content">
        <h2><strong>Powerful Single-App Kiosk solutions for enhanced control</strong></h2>
        <ul className="features">
          <li>
            <span className="checkmark">✔</span> Provision the devices to run
            one specialized application, with limited functionalities.
          </li>
          <li>
            <span className="checkmark">✔</span> Customize the device settings
            to cater to a specific use-case each time.
          </li>
          <li>
            <span className="checkmark">✔</span> Use Hexnode’s Advanced Kiosk
            settings for additional restrictions or expanded device
            functionalities while in kiosk mode.
          </li>
          <li>
            <span className="checkmark">✔</span> Empower your administrators
            with full control over the kiosk devices.
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img
          src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fsingle-app-kios-image.jpg&w=1200&q=100"
          alt="Phone in hand"
        />
      </div>
    </section>
    </div>
        </>
    )
}
    