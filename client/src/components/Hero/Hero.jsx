import React from "react";
import backgroundVert from "../../assets/backgroundVert.jpg";
import "../../styles/Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundVert})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Bienvenue sur <span className="hero-highlight">Bazar Bio</span>
        </h1>
        <p className="hero-description">
          Produits 100% naturels et éco-responsables pour toute la famille 🌿
        </p>
        <a href="#products" className="hero-button">
          Voir nos produits
        </a>
      </div>
    </section>
  );
}
