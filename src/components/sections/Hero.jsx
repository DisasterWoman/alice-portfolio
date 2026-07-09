import React from 'react';
import { ArrowUpRight, Building2, Github, Globe2, Mail, MapPin, Radar, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { mailHref, metrics, profile } from '../../data/portfolio.js';

import './Hero.css';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <section className="hero__content" aria-labelledby="hero-title">
        <p className="eyebrow"><Sparkles size={16} /> React / Three.js / TypeScript</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="hero__lead">{profile.summary}</p>
        <div className="button-group">
          <Button href={mailHref}><Mail size={18} /> Contact me</Button>
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className="hero__meta" aria-label="Profile details">
          <span><MapPin size={16} /> {profile.location}</span>
          <span><Globe2 size={16} /> Fluent English</span>
          <span><Building2 size={16} /> SaaS product UI</span>
        </div>
      </section>

      <aside className="hero__panel" aria-label="Role match summary">
        <div className="hero__panel-header">
          <span><Radar size={18} /> live role signal</span>
          <strong>React + Three.js</strong>
        </div>
        <div className="hero__signal-bars" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="hero__metric-grid">
          {metrics.map((metric) => (
            <div className="hero__metric-tile" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </header>
  );
}
