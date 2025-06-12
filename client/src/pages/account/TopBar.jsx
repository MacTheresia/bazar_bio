import React from 'react';
import { Notifications } from '@mui/icons-material';
import '../../styles/Account.css';

const TopBar = () => {
  return (
    <header className="topbar">
      <div>Mon Compte</div>
      <div className="profile-actions">
        <Notifications />
        <img src="/user-avatar.png" alt="User" className="avatar" />
      </div>
    </header>
  );
};

export default TopBar;
