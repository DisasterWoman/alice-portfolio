import React from 'react';
import { experience } from '../../data/portfolio.js';

import './ExperienceSection.css';

export default function ExperienceSection() {
  return (
    <section className="experience-timeline" aria-label="Experience timeline">
      {experience.map((item) => (
        <article className="experience-timeline__item" key={item.company}>
          <div className="experience-timeline__header">
            <p>{item.period}</p>
            <span>{item.accent}</span>
          </div>
          <div>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
          </div>
          <ul>
            {item.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </article>
      ))}
    </section>
  );
}
