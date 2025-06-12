import React from 'react';

const Payments = () => {
  return (
    <div className="card">
      <h3>Moyens de paiement</h3>
      <ul>
        <li>💳 Carte Visa se terminant par 1234</li>
        <li>💸 PayPal : jean@bio.com</li>
      </ul>
      <button>Ajouter un moyen de paiement</button>
    </div>
  );
};

export default Payments;
