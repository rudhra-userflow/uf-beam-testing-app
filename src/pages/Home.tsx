import { useState } from "react";
import "./styles/Home.css";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const showFlow = () => {
    if ((window as any).userflow) {
      (window as any).userflow.start("a9fa1056-b86b-47a0-83c7-4ad1b1bfb9c3");
    } else {
      console.error("Userflow is not available");
    }
  };

  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Welcome to Home Page</h1>
        <p className="home-description">Userflow is initialized for this page.</p>
      </div>
      
      <div className="home-content">
        <div className="checkbox-section">
          <div className="checkbox-container">
            <input
              id="box1"
              type="checkbox"
              className="checkbox-input"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="box1" className="checkbox-label">
              I agree to the terms and conditions
            </label>
          </div>
          <p className="checkbox-help">
            Please check the box to enable the Userflow demo
          </p>
        </div>
        
        <button
          className={`btn-primary ${!isChecked ? 'btn-disabled' : ''}`}
          disabled={!isChecked}
          onClick={showFlow}
        >
          Start Userflow
        </button>
      </div>
    </div>
  );
}
