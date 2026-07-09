
import React from 'react';
import './SectionIntro.css';

export default function SectionIntro({ eyebrow, title, body, icon: Icon }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{Icon ? <Icon size={16} /> : null}{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
