import "./KioskSection.css"; 
export default function AsamKiosk(){
    return(
        <>
        <section className="kiosk-section">
      <div className="content">
        <h2><strong>Unlock the power of Autonomous Single App Mode (ASAM)</strong></h2>
        <ul className="features">
          <li>
            <span className="checkmark">✔</span> A feature that empowers your iOS app to seamlessly secure itself in the foreground.
          </li>
          <li>
            <span className="checkmark">✔</span> Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.
          </li>
          <li>
            <span className="checkmark">✔</span> Create focused, efficient and secure digital environments to match your requirements.
          </li>
          <li>
            <span className="checkmark">✔</span> Configure ASAM effortlessly and elevate your user experience like never before.
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img
          src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fhexnode-kiosk%2Fasam-kiosk-image.jpg&w=1200&q=100"
          alt="Phone in hand"
        />
      </div>
    </section>
        </>
    )
} 