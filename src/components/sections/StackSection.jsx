import React from 'react';
import { BrainCircuit } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro.jsx';
import { skills } from '../../data/portfolio.js';

export default function StackSection() {
  return (
    <section className="contentSection" id="stack">
      <SectionIntro
        icon={BrainCircuit}
        kicker="Stack"
        title="Frontend toolkit with a visual systems edge."
        body="A practical stack for maintainable React applications, animated interfaces and data-rich user journeys."
      />
      <div className="skillCloud">
        {skills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
