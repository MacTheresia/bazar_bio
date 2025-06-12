import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/Header.css";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(true);
  const navigate = useNavigate();

  // Temporaire - sera remplacé par le vrai état d'authentification
  const isLoggedIn = false; 

  const tooltipStyle = {
    tooltip: {
      sx: {
        bgcolor: "#205c34",
        color: "white",
        fontSize: 13,
        borderRadius: "8px",
        px: 1.2,
        py: 0.5,
        "& .MuiTooltip-arrow": {
          color: "#205c34",
        },
      },
    },
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      setShowDropdown(!showDropdown);
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">BazarBio</h1>

        <form className="search-form">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
          />
        </form>

        <nav className="nav-icons">
          <Tooltip
            title="Accueil"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <Link to="/" className="nav-item">
              <HomeIcon fontSize="medium" />
            </Link>
          </Tooltip>

          <Tooltip
            title="Panier"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <Link to="/panier" className="nav-item">
              <ShoppingCartIcon fontSize="medium" />
            </Link>
          </Tooltip>
          <Tooltip
            title="Favoris"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <Link to="/favoris" className="nav-item">
              <FavoriteIcon fontSize="medium" />
            </Link>
          </Tooltip>

          <div className="profile-container">
            <Tooltip
              title="Profil"
              arrow
              placement="bottom"
              slotProps={tooltipStyle}
            >
              <div className="nav-item" onClick={handleProfileClick}>
                <AccountCircleIcon fontSize="medium" />
              </div>
            </Tooltip>

            {showDropdown && isLoggedIn && (
              <div className="dropdown-menu">
                <Link 
                  to="/mon-compte" 
                  className="dropdown-item"
                  onClick={() => setShowDropdown(false)}
                >
                  Mon Compte
                </Link>
                <div 
                  className="dropdown-item" 
                  onClick={() => {
                    // Fonction de déconnexion sera ajoutée ici plus tard
                    setShowDropdown(false);
                  }}
                >
                  Déconnexion
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}