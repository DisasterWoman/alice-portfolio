import React, { useState } from 'react';
import { ArrowUpRight, Github, Mail, Rocket, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';
import CommandCenterScene from '../scene/CommandCenterScene.jsx';
import SolarPreviewScene from '../scene/SolarPreviewScene.jsx';
import { mailHref, profile } from '../../data/portfolio.js';

const buildCards = [
  ['SaaS Platforms', 'Complex dashboards, admin panels, booking systems, pricing tools and product workflows.'],
  ['Interactive UI', 'Motion systems, micro-interactions, smooth transitions and interface storytelling.'],
  ['Three.js Experiences', 'Procedural scenes, camera systems, particles, lighting and immersive web experiences.'],
];

const experienceCards = [
  ['Hospitality SaaS', 'Booking platforms, pricing logic, payments, analytics and admin workflows.'],
  ['Recruitment Platforms', 'Candidate flows, filters, resume management, notifications and API-connected interfaces.'],
  ['Enterprise UI', 'Responsive systems, admin interfaces, refactoring, maintainability and performance.'],
];

const techGroups = [
  ['Core', ['React', 'Vue', 'TypeScript', 'JavaScript']],
  ['State & Data', ['Redux Toolkit', 'RTK Query', 'React Query', 'Pinia']],
  ['UI', ['MUI', 'Ant Design', 'Tailwind', 'SCSS']],
  ['3D & Motion', ['Three.js', 'GSAP', 'Framer Motion', 'GLSL']],
  ['Testing', ['Jest', 'Vitest']],
];

function useLaunchTransition() {
  const [isLaunching, setIsLaunching] = useState(false);

  const launch = () => {
    setIsLaunching(true);
    window.setTimeout(() => {
      window.location.href = '/3d';
    }, 520);
  };

  return [isLaunching, launch];
}

export default function HomePage() {
  const [isLaunching, launch3D] = useLaunchTransition();

  return (
    <>
      <div className={`routeVeil ${isLaunching ? 'isActive' : ''}`} aria-hidden="true" />

      <header id="top" className="landingHero">
        <section className="landingHeroCopy" aria-labelledby="hero-title">
          <p className="kicker"><Sparkles size={16} /> Frontend Engineer · React · Vue · Three.js</p>
          <h1 id="hero-title">{profile.headline}</h1>
          <p>{profile.summary}</p>
          <div className="ctaRow">
            <button className="button button--primary" type="button" onClick={launch3D}>
              <Rocket size={18} /> Explore 3D Experience
            </button>
            <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub <ArrowUpRight size={16} />
            </Button>
          </div>
          <div className="landingBadges">
            {['4+ Years', 'Commercial Products', 'TypeScript', 'Three.js', 'Available Worldwide'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
        <CommandCenterScene />
      </header>

      <section className="featured3d" aria-labelledby="featured-title">
        <div>
          <p className="kicker">Featured 3D Experience</p>
          <h2 id="featured-title">Solar Interface System</h2>
          <p>
            A cinematic Three.js experiment inspired by mission control interfaces. Interactive planets,
            orbit animation, particle fields, real-time lighting and smooth camera movement.
          </p>
          <button className="button button--primary" type="button" onClick={launch3D}>
            Launch Experience <ArrowUpRight size={16} />
          </button>
        </div>
        <button className="solarPreviewButton" type="button" onClick={launch3D} aria-label="Launch Solar Interface System">
          <SolarPreviewScene />
        </button>
      </section>

      <section className="landingSection" id="build">
        <div className="landingSectionIntro">
          <p className="kicker">What I Build</p>
          <h2>Interfaces built for real products.</h2>
        </div>
        <div className="landingCardGrid">
          {buildCards.map(([title, body]) => (
            <article className="landingCard" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landingSection" id="experience">
        <div className="landingSectionIntro">
          <p className="kicker">Commercial Experience</p>
          <h2>Built for real users, not only portfolios.</h2>
        </div>
        <div className="landingCardGrid">
          {experienceCards.map(([title, body]) => (
            <article className="landingCard compact" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landingSection" id="stack">
        <div className="landingSectionIntro">
          <p className="kicker">Technology</p>
          <h2>Frontend toolkit for product systems.</h2>
        </div>
        <div className="techGrid">
          {techGroups.map(([group, items]) => (
            <article className="techGroup" key={group}>
              <h3>{group}</h3>
              <div>
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
              {group === '3D & Motion' ? (
                <button type="button" onClick={launch3D}>See 3D case</button>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="launchSequence">
        <div>
          <p className="kicker">Launch Sequence</p>
          <h2>Ready to explore a complete Three.js experience?</h2>
          <p>
            Enter a dedicated interactive solar system built with animated planets,
            orbit mechanics, particles, lighting and cinematic camera movement.
          </p>
          <button className="button button--primary" type="button" onClick={launch3D}>
            Launch Solar Interface
          </button>
        </div>
        <div className="systemChecks" aria-hidden="true">
          {['System Check', 'Lighting', 'Particles', 'Camera', 'Orbit Engine', 'Ready'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <footer className="landingContact" id="contact">
        <div>
          <p className="kicker">Contact</p>
          <h2>Let’s build something memorable.</h2>
          <p>Open to frontend roles, creative engineering projects and interactive web experiences.</p>
        </div>
        <div className="ctaRow">
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</Button>
          <Button href={mailHref}><Mail size={18} /> Email</Button>
          <Button variant="secondary" href="https://t.me/disasterwoman" target="_blank" rel="noreferrer">Telegram</Button>
        </div>
      </footer>
    </>
  );
}
