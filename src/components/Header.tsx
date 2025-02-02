import React from 'react';
import '../styles/header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <h1 className="header__title">Solutions for people like you</h1>
    </header>
  );
};

export default Header;
