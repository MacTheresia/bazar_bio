import React from 'react';

const Settings = () => {
  return (
    <div className="card">
      <h3>Paramètres du compte</h3>
      <p>Langue : Français</p>
      <p>Devise : € Euro</p>
      <p>Notifications : ✅ activées</p>
      <button>Modifier les préférences</button>
    </div>
  );
};

export default Settings;