import React from 'react';

export default function SectionIntro({ kicker, title, body, icon: Icon }) {
  return (
    <div className="sectionIntro">
      <p className="kicker">{Icon ? <Icon size={16} /> : null}{kicker}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
