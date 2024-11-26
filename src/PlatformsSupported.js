import React from "react";
import "./PlatformsSupported.css"; // Import the CSS file for styling

const PlatformsSupported = () => {
  return (
    <div className="platforms-container">
      <h2>Platforms supported</h2>
      <div className="platforms-grid">
        <div className="platform">
          <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/platform/android.svg"
            alt="Android"
            className="icon"
          />
        </div>
        <div className="platform">
          <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/platform/windows.svg"
            alt="Windows"
            className="icon"
          />
        </div>
        <div className="platform">
        <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/platform/ios.svg"
            alt="Android TV"
            className="icon"
          />
        </div>
        <div className="platform">
          <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/platform/android-tv.svg"
            alt="Android TV"
            className="icon"
          />
        </div>
        <div className="platform">
          <img
            src="https://static.hexnode.com/v2/assets/img/ads-pages/platform/apple-tv.svg"
            alt="Apple TV"
            className="icon"
          />
        </div>
        <div className="platform">
          <img
            src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fplatform%2Famazon-fire.png&w=384&q=100"
            alt="Fire TV"
            className="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformsSupported;
