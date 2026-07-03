import React from 'react';
import { experience } from '../../data/portfolio.js';

export default function ExperienceSection() {
  return (
    <section className="experienceRail" aria-label="Experience timeline">
      {experience.map((item) => (
        <article className="experienceItem" key={item.company}>
          <div className="experienceHeader">
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
