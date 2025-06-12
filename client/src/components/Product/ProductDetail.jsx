import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "../../styles/ProductDetail.css";

export default function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

const handleAddToFavorites = () => {
  setShowPopup(true);
};

const handleClosePopup = () => {
  setShowPopup(false);
};


  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <div className="product-detail-content">
          <div className="product-image-wrapper">
            <img
              src={require(`../../assets/${product.image}`)}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <span className="product-price-Detail">{product.price} Ar</span>
            <p className="product-description">{product.description}</p>

            {/* Conteneur quantité + bouton côte à côte */}
            <div
              className="quantity-add-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "1rem 0",
              }}
            >
              <div
                className="product-quantity"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <IconButton
                  onClick={handleDecrement}
                  color="primary"
                  size="medium"
                  disabled={quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>
                <span
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    minWidth: "30px",
                    textAlign: "center",
                  }}
                >
                  {quantity}
                </span>
                <IconButton
                  onClick={handleIncrement}
                  color="primary"
                  size="medium"
                >
                  <AddIcon />
                </IconButton>
              </div>

              <Button
                variant="contained"
                color="success"
                startIcon={<ShoppingCartIcon />}
              >
                Ajouter au panier
              </Button>
            </div>

            {/* Bouton Ajouter aux favoris en bas, centré */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<FavoriteIcon />}
                onClick={handleAddToFavorites}
                size="small"
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    color: "green",
                    borderColor: "green",
                  },
                }}
              >
                Ajouter aux favoris
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
