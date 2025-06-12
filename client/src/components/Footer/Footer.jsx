import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">Contactez-nous</h2>
        <div className="footer-info-item">
          <LocationOnIcon className="footer-icon" />
          <span>123 Rue Verte, Antananarivo, Madagascar</span>
        </div>
        <div className="footer-info-item">
          <EmailIcon className="footer-icon" />
          <span>contact@bazarbio.mg</span>
        </div>
        <div className="footer-info-item">
          <PhoneIcon className="footer-icon" />
          <span>+261 34 12 345 67</span>
        </div>
      </div>
    </footer>
  );
}
