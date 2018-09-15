import React from 'react';

const Header = ({ title }) => (
  <header className="header hero is-primary">
    <div className="hero-body has-text-centered">
      <h1 className="title">{title}</h1>
    </div>
  </header>
);

export default Header;
