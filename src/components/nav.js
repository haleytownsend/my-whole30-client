import React from 'react';

import './nav.css';

export default function Nav(props) {
  return (
    <nav className="nav">
      {props.text}
    </nav>
  );
};

Nav.defaultProps = {
  text: 'Nav Bar --> Log in / Sign up / Daily Entry / Days 1-30'
}
