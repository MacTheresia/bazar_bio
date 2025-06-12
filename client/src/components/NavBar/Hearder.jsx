import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/Header.css";

export default function Header({  }) {

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

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">BazarBio</h1>

        <nav className="nav-icons">
          <Tooltip
            title="Accueil"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <div className="nav-item">
              <HomeIcon fontSize="medium" />
            </div>
          </Tooltip>

          <Tooltip
            title="Panier"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <div className="nav-item">
              <ShoppingCartIcon fontSize="medium" />
            </div>
          </Tooltip>

          <Tooltip
            title="Profil"
            arrow
            placement="bottom"
            slotProps={tooltipStyle}
          >
            <div className="nav-item">
              <AccountCircleIcon fontSize="medium" />
            </div>
          </Tooltip>
        </nav>

        <form  className="search-form">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-input"
          />
        </form>
      </div>
    </header>
  );
}
