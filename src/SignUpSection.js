import React from "react";
import "./SignUpSection.css";

const SignUpSection = () => {
  return (<>
    <div className="signup-section">
      <div className="signup-content">
        <h2>Sign up and try Hexnode free for 14 days!</h2>
        <div className="signup-form">
          <input
            type="email"
            placeholder="Your Work Email"
            className="email-input" required
          />
          <button className="get-started-button">GET STARTED</button>
        </div>
        <p className="info-text">
          No credit cards required. <a href="/" className="demo-link">Request a demo &gt;</a>
        </p>
      </div>
    </div>
    <div>
        <footer className="footer p-3">
        <p style={{color:'black',float:'left'}}>
          Terms of use privacy coockies
        </p>
        <p style={{color:'black',float:'right'}}>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
      </footer>
    </div>
    </>  );
};

export default SignUpSection;
