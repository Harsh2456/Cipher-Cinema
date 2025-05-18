import React from "react";
import { FaMagic } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <FaMagic className="brand-icon" />
          <span>AI Video Generator</span>
        </div>
        <p>© 2025 Cipher Cinema. All rights reserved.</p>
      </div>
    </footer>
  );
};
