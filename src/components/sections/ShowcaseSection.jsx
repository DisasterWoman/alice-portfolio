import React from 'react';
import { Orbit } from 'lucide-react';
import ComplexAnimationCanvas from '../scene/ComplexAnimationCanvas.jsx';

export default function ShowcaseSection() {
  return (
    <section className="showcaseSection" aria-label="Advanced 3D animation page">
      <ComplexAnimationCanvas />
      <div className="showcaseCopy">
        <p className="kicker"><Orbit size={16} /> 3D solar system</p>
        <h1>Solar interface system.</h1>
        <p>
          A dedicated Three.js page with orbiting planets, glowing stars,
          planetary rings and a soft cinematic camera loop.
        </p>
        <div className="showcaseBadges" aria-label="3D scene details">
          <span>900 stars</span>
          <span>7 planets</span>
          <span>animated orbits</span>
        </div>
      </div>
    </section>
  );
}
