import * as React from 'react';
import { useState } from 'react';
import './css/menu.css';

export default function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    <nav>
      <div className="logo">
        <h4>Edwin dev</h4>
      </div>
      <ul className={`nav-links ${visible ? 'visible' : ''}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">knowledge</a>
        </li>
        <li>
          <a href="#">Other</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
      <div
        className={`burger ${visible ? 'visible' : ''}`}
        onClick={() => setVisible(!visible)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
