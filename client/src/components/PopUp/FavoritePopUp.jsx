// src/components/FavoritePopup.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FavoritePopup({ product, onClose }) {
  return (
    <Card
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: 300,
        zIndex: 1300,
        boxShadow: 6,
        borderRadius: 2,
        p: 1,
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>

      <CardMedia
        component="img"
        height="140"
        image={require(`../../assets/${product.image}`)}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Ajouté aux favoris avec succès
        </Typography>
        <Button
          variant="contained"
          fullWidth
          size="small"
          onClick={() => console.log("Voir favoris")}
          sx={{ textTransform: "none" }}
        >
          Voir favoris
        </Button>
      </CardContent>
    </Card>
  );
}
