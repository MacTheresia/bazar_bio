import React, { useState } from "react";
import products from "../../datas/data.json";
import "../../styles/ProductList.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { commonBioButtonStyle } from "../../styles/bioButtonStyle";
import ProductDetail from "./ProductDetail"; // Assure-toi que le chemin est bon

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="product-section">
      <h3 className="section-title">Nos produits</h3>

      <div className="product-grid">
        {products.length === 0 && (
          <p className="empty-message">Aucun produit trouvé.</p>
        )}

        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={require(`../../assets/${product.image}`)}
              alt={product.name}
              className="product-image"
            />
            <h4 className="product-name">{product.name}</h4>
            <p className="product-price">{product.price} Ar</p>

            <Stack direction="row" spacing={1} justifyContent="center">
              <Button
                sx={commonBioButtonStyle}
                startIcon={<VisibilityIcon />}
                onClick={() => handleViewClick(product)}
              />
              <Button
                sx={commonBioButtonStyle}
                startIcon={<ShoppingCartIcon />}
              />
              <Button sx={commonBioButtonStyle} startIcon={<FavoriteIcon />} />
            </Stack>
          </div>
        ))}
      </div>

      {/* AFFICHAGE DU PRODUCT DETAIL */}
      {selectedProduct && (
        <div className="overlay">
          <div className="detail-popup">
            <button className="close-btn" onClick={handleCloseDetail}>
              ✖
            </button>
            <ProductDetail
              product={selectedProduct}
              onClose={handleCloseDetail}
            />
          </div>
        </div>
      )}


    </section>
  );
}
