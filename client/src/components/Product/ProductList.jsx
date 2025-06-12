import React, { useState } from "react";
import products from "../../datas/data.json";
import "../../styles/ProductList.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { commonBioButtonStyle } from "../../styles/bioButtonStyle";
import ProductDetail from "./ProductDetail";
import FavoritePopup from "../PopUp/FavoritePopUp";
import AddPopup from "../PopUp/AddPopUp";

export default function ProductList({ product }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductForCart, setSelectedProductForCart] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };
  const handleAddToFavorites = (product) => {
    setSelectedProductForCart(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAddToCart = (product) => {
    setSelectedProductForCart(product);
    setShowCartPopup(true);
  };

  const handleCloseCartPopup = () => {
    setShowCartPopup(false);
  };
  return (
    <section className="product-section" id="products">
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
                onClick={() => handleAddToCart(product)}
                startIcon={<ShoppingCartIcon />}
              />
              <Button
                sx={commonBioButtonStyle}
                onClick={() => handleAddToFavorites(product)}
                startIcon={<FavoriteIcon />}
              />
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

      {showPopup && selectedProductForCart && (
        <FavoritePopup
          product={selectedProductForCart}
          onClose={handleClosePopup}
        />
      )}

      {showCartPopup && selectedProductForCart && (
        <AddPopup
          product={selectedProductForCart}
          onClose={handleCloseCartPopup}
        />
      )}
    </section>
  );
}
