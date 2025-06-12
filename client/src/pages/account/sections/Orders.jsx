import React from 'react';

const Orders = () => {
  return (
    <div className="card">
      <h3>Commandes récentes</h3>
      <div>
        <p><strong>Commande #12345</strong> - 10 mai 2024</p>
        <p>Produits : Miel bio, Thé vert</p>
        <p>Statut : En cours</p>
        <button>Suivre la commande</button>
      </div>
      <hr />
      <div>
        <p><strong>Commande #12290</strong> - 20 avril 2024</p>
        <p>Produits : Huile d'olive, Amandes</p>
        <p>Statut : Livrée</p>
        <button>Recommander</button>
      </div>
    </div>
  );
};

export default Orders;