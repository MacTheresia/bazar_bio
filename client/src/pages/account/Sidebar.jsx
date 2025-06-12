import React from 'react';
import {
  AccountCircle, Home, LocationOn, ShoppingCart, Payment, Settings, Security, Support
} from '@mui/icons-material';
import '../../styles/Account.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Bazar'Bio 🌿</h2>
      <ul>
        <li><AccountCircle /> Informations personnelles</li>
        <li><LocationOn /> Adresses</li>
        <li><ShoppingCart /> Commandes</li>
        <li><Payment /> Paiements</li>
        <li><Settings /> Paramètres</li>
        <li><Security /> Sécurité</li>
        <li><Support /> Support</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
