import React from 'react';
import { navItems, profile } from '../../../data/portfolio.js';

import './Header.css';

export default function Header() {
  return (
    <nav className="site-header" aria-label="Portfolio navigation">
      <a className="site-header__brand" href="/">
        <span>AP</span>
        {profile.name}
      </a>
      <div className="site-header__nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>
    </nav>
  );
}
