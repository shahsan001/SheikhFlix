import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-3">
      <div className="container text-center">
        <div className="footer-social mt-2">
          <a href="https://www.facebook.com/ahsanhafeez.ahsanhafeez.75?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-lg mx-2"></i>
          </a>
          <a href="https://www.instagram.com/sh_ahsan_001/profilecard/?igsh=a2c5MXBubWlqZmdu" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-lg mx-2"></i>
          </a>
        </div>
        <div className="footer-text mt-3">
          <p>SheikhFlix App © {new Date().getFullYear()}-2026. All Rights Reserved. Design By: Sheikh Ahsan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
