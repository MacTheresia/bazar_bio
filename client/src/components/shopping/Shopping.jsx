import { useState, useEffect, useMemo } from 'react';
import ArticleList from '../../datas/articleList';
import ShoppingCard from '../ShoppingCard/ShoppingCard';
import '../../assets/css/Shopping.css';

export default function ShoppingScreen() {
  const [hasArticle, setHasArticle] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (ArticleList?.length > 0) {
      setHasArticle(true);
      const initialCart = ArticleList.map(item => ({
        ...item,
        quantity: item.quantity || 1,
      }));
      setCartItems(initialCart);
    }
  }, []);

  const handleQuantityChange = (itemTitle, newQuantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === itemTitle ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (itemTitle) => {
    setCartItems(prev => prev.filter(item => item.title !== itemTitle));
  };

  const calculateItemTotal = (item) => item.quantity * item.price;

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  }, [cartItems]);

  return (
    <div className="shopping-overlay">
      <div className="shopping-container">
        <button className="btn-back" onClick={() => window.history.back()}>
          ⬅ Retour
        </button>
        <h1 className="shopping-title">🛒 Mon Panier</h1>

        {!hasArticle ? (
          <div className="empty-cart">
            <h2>Votre panier est vide</h2>
            <p>Ajoutez des articles pour commencer vos achats.</p>
            <button className="btn btn-home" onClick={() => window.history.back()}>🏠 Retour à l'accueil</button>
          </div>
        ) : (
          <div className="shopping-layout">
            <div className="shopping-items">
              {cartItems.map((item, index) => (
                <ShoppingCard
                  key={index}
                  titre={item.title}
                  description={item.description}
                  prix={item.price}
                  nombre={item.quantity}
                  image={item.image}
                  onQuantityChange={(newQty) =>
                    handleQuantityChange(item.title, newQty)
                  }
                  onDelete={() => handleDelete(item.title)}
                />
              ))}
            </div>

            <div className="shopping-summary">
              <h3 className="summary-title">Récapitulatif</h3>
              <p>{cartItems.length} article(s)</p>

              <div className="summary-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="summary-item">
                    <span>{item.title} × {item.quantity}</span>
                    <span>{calculateItemTotal(item)} Ar</span>
                  </div>
                ))}
              </div>

              <div className="summary-total">
                <span>Total :</span>
                <span>{totalPrice} Ar</span>
              </div>

              <button className="btn btn-pay" disabled={cartItems.length === 0}>
                💳 Procéder au paiement
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
