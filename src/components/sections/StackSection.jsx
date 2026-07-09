import React from 'react';
import { BrainCircuit } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro.jsx';
import { skills } from '../../data/portfolio.js';

import './StackSection.css';

export default function StackSection() {
  return (
    <section className="content-section" id="stack">
      <SectionIntro
        icon={BrainCircuit}
        eyebrow="Stack"
        title="Frontend toolkit with a visual systems edge."
        body="A practical stack for maintainable React applications, animated interfaces and data-rich user journeys."
      />
      <div className="skill-cloud">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
