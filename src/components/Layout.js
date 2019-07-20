import React from 'react';
import './Layout.css';

function Layout(props) {
  return (
    <main>
      <h1 className="title">fcc Calculator</h1>
      {props.children}
    </main>
  );
}

export default Layout;
