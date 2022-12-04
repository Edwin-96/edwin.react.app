import * as React from 'react';
import { useState } from 'react';
import './css/menu.css';

const links = [
  { title: 'Home', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Course', href: '#' },
  { title: 'Showcase', href: '#' },
  { title: 'Profile', href: '#' },
];

export default function Menu() {
  const [visible, setVisible] = useState(false);

  return (
    <nav>
      <div className="logo">
        <h4>Edwin dev</h4>
      </div>
      <ul className={`nav-links ${visible ? 'visible' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
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
