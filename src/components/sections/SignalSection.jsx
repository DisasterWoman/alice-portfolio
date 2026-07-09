import React from 'react';
import { Blocks } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro.jsx';
import { signalCards } from '../../data/portfolio.js';

export default function SignalSection() {
  return (
    <section className="content-section" id="signal">
      <SectionIntro
        icon={Blocks}
        eyebrow="Signal"
        title="Architecture-tech interface energy, without the visual noise."
        body="The site now lets the 3D island carry the personality while the content stays readable and calm."
      />
      <div className="signal-list">
        {signalCards.map((card, index) => (
          <article className="signal-list__item" key={card.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
