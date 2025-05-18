import React from "react";
import { FaBolt, FaPalette, FaRobot } from "react-icons/fa";

export const FeatureSection = () => {
  return (
    <div className="features-section">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <FaRobot />
          </div>
          <h3>AI-Powered</h3>
          <p>State-of-the-art AI models for stunning animations</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FaBolt />
          </div>
          <h3>Fast Generation</h3>
          <p>Quick processing for rapid results</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <FaPalette />
          </div>
          <h3>Creative Freedom</h3>
          <p>Turn any description into a visual story</p>
        </div>
      </div>
    </div>
  );
};
