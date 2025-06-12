import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoritePopup from "../PopUp/FavoritePopUp";
import AddPopup from "../PopUp/AddPopUp";
import "../../styles/ProductDetail.css";

export default function ProductDetail({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);


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

    const handleAddToCart = () => {
      setShowCartPopup(true);
    };

    const handleCloseCartPopup = () => {
      setShowCartPopup(false);
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

            <div
              className="product-quantity"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "1rem 0",
              }}
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

            <div
              className="product-footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleAddToCart}
                startIcon={<ShoppingCartIcon />}
              >
                Ajouter au panier
              </Button>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <Button
                onClick={handleAddToFavorites}
                startIcon={<FavoriteBorderIcon />}
                sx={{
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    color: "green",
                  },
                }}
              >
                Ajouter aux favoris
              </Button>
            </div>
          </div>
        </div>

        {showPopup && (
          <FavoritePopup product={product} onClose={handleClosePopup} />
        )}
        {showCartPopup && (
          <AddPopup product={product} onClose={handleCloseCartPopup} />
        )}
      </div>
    </div>
  );
}
