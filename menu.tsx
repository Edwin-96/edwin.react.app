import * as React from 'react';
import './css/menu.css';

export default function Menu() {
  return (
    <nav>
      <div className="logo">
        <h4>EDWIN DEV</h4>
      </div>
      <ul>
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
    </nav>
  );
}
