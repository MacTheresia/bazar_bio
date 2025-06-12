import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} BazarBio. Tous droits réservés.
        </p>
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>
            Accueil
          </a>
          <a href="#" style={styles.link}>
            Produits
          </a>
          <a href="#" style={styles.link}>
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#205c34",
    color: "white",
    padding: "1rem 0",
    marginTop: "2rem",
    textAlign: "center",
  },
  container: {
    maxWidth: "960px",
    margin: "0 auto",
  },
  text: {
    margin: "0.5rem 0",
  },
  nav: {
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
