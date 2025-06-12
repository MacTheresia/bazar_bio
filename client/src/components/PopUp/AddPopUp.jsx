import React, { useEffect } from "react";
import { Card, CardContent, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../../styles/AddPopUp.css";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AddPopup({ product, onClose }) {
  const navigate = useNavigate();

    useEffect(() => {
          document.body.style.overflow = "hidden";
          return () => {
            document.body.style.overflow = "auto";
          };
        }, []);

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <Card className="add-popup">
        <div className="favorite-popup-header">
          <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>

        <div className="favorite-popup-body">
          <div className="product-image-wrapper">
            <img
              src={require(`../../assets/${product.image}`)}
              alt={product.name}
              className="product-image-popUp"
            />
          </div>
          <CardContent className="favorite-popup-content">
            <p className="h6" gutterBottom>
              {product.name}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "green",
                marginBottom: "1rem",
              }}
            >
              <CheckCircleIcon fontSize="small" />
              <span>Ajouté aux favoris avec succès</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                color="success"
                fullWidth
                size="small"
                className="animated-button"
                onClick={() => navigate("/panier")}
              >
                Voir panier
              </Button>
              <Button
                variant="contained"
                color="success"
                fullWidth
                size="small"
                sx={{
                  backgroundColor: "#09033b",
                  color: "white",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#09033b",
                  },
                }}
                className="animated-checkout-button"
                onClick={() => navigate("/panier")}
              >
                Passer commande
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
