import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import PersonalInfo from './sections/PersonalInfo';
import Addresses from './sections/Addresses';
import Orders from './sections/Orders';
import Payments from './sections/Payments';
import Settings from './sections/Settings';
import Security from './sections/Security';
import Support from './sections/Support';
import '../../styles/Account.css';

const AccountPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="account-container">
      <Sidebar />
      <div className="account-main">
        <div className="account-content">
          <PersonalInfo />
          <Addresses />
          <Orders />
          <Payments />
          <Settings />
          <Security />
          <Support />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
