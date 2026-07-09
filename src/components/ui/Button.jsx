
import React from 'react';
import './Button.css';

export default function Button({ children, href, variant = 'primary', ...props }) {
  return (
    <a className={`button button--${variant}`} href={href} {...props}>
      {children}
    </a>
  );
}
