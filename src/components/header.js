import React from 'react';

import Nav from './nav';

import './header.css';

export default function Header(props) {
  return (
    <header role="banner" className="header">
      <Nav />
      <h1>Whole30: Day-By-Day</h1>
      <h2>Your Daily Guide to Whole30 Success</h2>
    </header>
  );
}
