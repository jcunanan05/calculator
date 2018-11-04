import React from 'react';

const Header = ({ value }) => (
  <section className="hero is-dark">
    <div className="hero-body content has-text-centered">
      <h1 className="title">{value}</h1>
    </div>
  </section>
);

export default Header;
