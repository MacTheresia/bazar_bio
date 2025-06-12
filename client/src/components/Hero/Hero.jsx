import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?organic,market')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 100, 0, 0.6)",
          padding: "3rem 2rem",
          borderRadius: "12px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Bienvenue sur <span style={{ color: "#A8E6A3" }}>Bazar Bio</span>
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Produits 100% naturels et éco-responsables pour toute la famille 🌿
        </p>
        <a
          href="#products"
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#A8E6A3",
            color: "#004D00",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Voir nos produits
        </a>
      </div>
    </section>
  );
}
