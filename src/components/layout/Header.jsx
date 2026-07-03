import React from 'react';
import { navItems, profile } from '../../data/portfolio.js';

export default function Header() {
  return (
    <nav className="topbar" aria-label="Portfolio navigation">
      <a className="brand" href="/">
        <span>AP</span>
        {profile.name}
      </a>
      <div className="navLinks">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </div>
    </nav>
  );
}
