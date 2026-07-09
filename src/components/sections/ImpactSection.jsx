import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro.jsx';
import { highlights } from '../../data/portfolio.js';

import './ImpactSection.css';

export default function ImpactSection() {
  return (
    <section className="content-section" id="impact">
      <SectionIntro eyebrow="Impact" title="Commercial frontend with product outcomes." />
      <div className="impact-list">
        {highlights.map((item) => (
          <p key={item}><CheckCircle2 size={18} /> {item}</p>
        ))}
      </div>
    </section>
  );
}
