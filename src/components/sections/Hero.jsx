import React from 'react';
import { ArrowUpRight, Building2, Github, Globe2, Mail, MapPin, Radar, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { mailHref, metrics, profile } from '../../data/portfolio.js';

export default function Hero() {
  return (
    <header id="top" className="hero">
      <section className="heroCopy" aria-labelledby="hero-title">
        <p className="kicker"><Sparkles size={16} /> React / Three.js / TypeScript</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="lead">{profile.summary}</p>
        <div className="ctaRow">
          <Button href={mailHref}><Mail size={18} /> Contact me</Button>
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className="profileMeta" aria-label="Profile details">
          <span><MapPin size={16} /> {profile.location}</span>
          <span><Globe2 size={16} /> Fluent English</span>
          <span><Building2 size={16} /> SaaS product UI</span>
        </div>
      </section>

      <aside className="heroPanel" aria-label="Role match summary">
        <div className="panelTop">
          <span><Radar size={18} /> live role signal</span>
          <strong>React + Three.js</strong>
        </div>
        <div className="signalBars" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <div className="metricGrid">
          {metrics.map((metric) => (
            <div className="metricTile" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </header>
  );
}
