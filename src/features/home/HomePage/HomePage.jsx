import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Mail,
  Orbit,
  Radio,
  Rocket,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../../components/ui/Button/Button.jsx';
import CommandCenterScene from '../../../three/CommandCenterScene/CommandCenterScene.jsx';
import SolarPreviewScene from '../../../three/SolarPreviewScene/SolarPreviewScene.jsx';
import { mailHref, profile } from '../../../data/portfolio.js';

import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

const buildCards = [
  [BriefcaseBusiness, 'SaaS Platforms', 'Complex dashboards, admin panels, booking systems, pricing tools and product workflows.'],
  [Zap, 'Interactive UI', 'Motion systems, micro-interactions, smooth transitions and interface storytelling.'],
  [Orbit, 'Three.js Experiences', 'Procedural scenes, camera systems, particles, lighting and immersive web experiences.'],
];

const experienceCards = [
  ['Hospitality SaaS', 'Product UI', 'Booking platforms, pricing logic, payments, analytics and admin workflows.'],
  ['Recruitment Platforms', 'Flow Systems', 'Candidate flows, filters, resume management, notifications and API-connected interfaces.'],
  ['Enterprise UI', 'Scale', 'Responsive systems, admin interfaces, refactoring, maintainability and performance.'],
];

const techGroups = [
  ['Core', ['React', 'Vue', 'TypeScript', 'JavaScript']],
  ['State & Data', ['Redux Toolkit', 'RTK Query', 'React Query', 'Pinia']],
  ['UI', ['MUI', 'Ant Design', 'Tailwind', 'SCSS']],
  ['3D & Motion', ['Three.js', 'GSAP', 'Framer Motion', 'GLSL']],
  ['Testing', ['Jest', 'Vitest']],
];

const skills = ['React', 'Three.js', 'TypeScript', 'SaaS'];
const systemChecks = ['System Check', 'Lighting', 'Particles', 'Camera', 'Orbit Engine', 'Ready'];
const heroAnimatedElements = [
  '.home-hero',
  '.home-hero__eyebrow',
  '.home-hero__title span',
  '.home-hero__description',
  '.home-hero__actions .button',
  '.home-hero__skills',
  '.home-hero__visual',
].join(', ');

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
  const pageRef = useRef(null);
  const signalAliveIntent = (active) => {
    window.dispatchEvent(new CustomEvent('hero:alive-intent', { detail: { active, pulse: active } }));
  };

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => gsap.set(heroAnimatedElements, { clearProps: 'all' }),
      });
      heroTimeline
        .from('.home-hero', { autoAlpha: 0, scale: 0.985, duration: 0.75 })
        .from('.home-hero__eyebrow', { autoAlpha: 0, y: 16, duration: 0.45 }, '-=0.35')
        .from('.home-hero__title span', { autoAlpha: 0, y: 34, stagger: 0.08, duration: 0.62 }, '-=0.2')
        .from('.home-hero__description', { autoAlpha: 0, y: 18, duration: 0.5 }, '-=0.25')
        .from('.home-hero__actions .button', { autoAlpha: 0, y: 18, stagger: 0.08, duration: 0.45 }, '-=0.18')
        .from('.home-hero__skills', { autoAlpha: 0, y: 18, duration: 0.45 }, '-=0.14')
        .from('.home-hero__visual', { autoAlpha: 0, x: 28, duration: 0.72 }, '-=0.62');

      gsap.utils.toArray('.featured-experience, .landing-section, .launch-sequence, .landing-contact').forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 42,
          scale: 0.985,
          duration: 0.7,
          ease: 'power3.out',
          onComplete: () => gsap.set(section, { clearProps: 'all' }),
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('.landing-card, .tech-stack__group, .launch-sequence__checks span').forEach((card) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 24,
          duration: 0.5,
          ease: 'power3.out',
          onComplete: () => gsap.set(card, { clearProps: 'all' }),
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        });
      });
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef} className="home-page">
      <div className={`home-page__route-veil ${isLaunching ? 'is-active' : ''}`} aria-hidden="true" />

      <header id="top" className="home-hero">
        <div className="home-hero__content" aria-labelledby="hero-title">
          <p className="eyebrow home-hero__eyebrow"><Sparkles size={16} /> Frontend Engineer · React · Three.js</p>
          <h1 id="hero-title" className="home-hero__title">
            <span>Designing</span>
            <span>interfaces</span>
            <span>that feel</span>
            <span
              className="home-hero__title-accent"
              onPointerEnter={() => signalAliveIntent(true)}
              onPointerLeave={() => signalAliveIntent(false)}
            >
              alive.
            </span>
          </h1>
          <p className="home-hero__description">I build immersive web experiences where interaction, animation and code come together to tell a story.</p>
          <div className="button-group home-hero__actions">
            <button className="button button--primary" type="button" onClick={launch3D}>
              <Rocket size={19} /> Explore 3D Experience
            </button>
            <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={19} /> GitHub <ArrowUpRight size={16} />
            </Button>
          </div>
          <div className="home-hero__skills" aria-label="Core skills">
            <span className="home-hero__skills-label">Core Skills</span>
            <div className="home-hero__badges">
              {skills.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
        <div className="home-hero__visual">
          <CommandCenterScene />
        </div>
      </header>

      <section className="featured-experience" id="projects" aria-labelledby="featured-title">
        <div>
          <p className="eyebrow">Featured 3D Experience</p>
          <h2 id="featured-title">Solar Interface System</h2>
          <p>
            A cinematic Three.js experiment inspired by mission control interfaces. Interactive planets,
            orbit animation, particle fields, real-time lighting and smooth camera movement.
          </p>
          <button className="button button--primary" type="button" onClick={launch3D}>
            Launch Experience <ArrowUpRight size={16} />
          </button>
        </div>
        <button className="featured-experience__preview-button" type="button" onClick={launch3D} aria-label="Launch Solar Interface System">
          <SolarPreviewScene />
          <span>Launch preview</span>
        </button>
      </section>

      <section className="landing-section" id="build">
        <div className="landing-section__intro">
          <p className="eyebrow">What I Build</p>
          <h2>Interfaces built for real products.</h2>
        </div>
        <div className="landing-section__card-grid">
          {buildCards.map(([Icon, title, body]) => (
            <article className="landing-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section" id="experience">
        <div className="landing-section__intro">
          <p className="eyebrow">Commercial Experience</p>
          <h2>Built for real users, not only portfolios.</h2>
        </div>
        <div className="landing-section__card-grid">
          {experienceCards.map(([title, tag, body]) => (
            <article className="landing-card landing-card--compact" key={title}>
              <span className="landing-card__tag">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section" id="stack">
        <div className="landing-section__intro">
          <p className="eyebrow">Technology</p>
          <h2>Frontend toolkit for product systems.</h2>
        </div>
        <div className="tech-stack">
          {techGroups.map(([group, items]) => (
            <article className={`tech-stack__group ${group === '3D & Motion' ? 'tech-stack__group--featured' : ''}`} key={group}>
              <h3>{group}</h3>
              <div>
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
              {group === '3D & Motion' ? (
                <button type="button" onClick={launch3D}>See 3D case <ArrowUpRight size={14} /></button>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="launch-sequence">
        <div>
          <p className="eyebrow">Launch Sequence</p>
          <h2>Ready to explore a complete Three.js experience?</h2>
          <p>
            Enter a dedicated interactive solar system built with animated planets,
            orbit mechanics, particles, lighting and cinematic camera movement.
          </p>
          <button className="button button--primary" type="button" onClick={launch3D}>
            <Rocket size={18} /> Launch Solar Interface
          </button>
        </div>
        <div className="launch-sequence__checks" aria-hidden="true">
          {systemChecks.map((item) => (
            <span key={item}><i /> {item}</span>
          ))}
        </div>
      </section>

      <footer className="landing-contact" id="contact">
        <div>
          <p className="eyebrow"><Radio size={16} /> Contact</p>
          <h2>Let’s build something memorable.</h2>
          <p>Open to frontend roles, creative engineering projects and interactive web experiences.</p>
        </div>
        <div className="button-group">
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</Button>
          <Button href={mailHref}><Mail size={18} /> Email</Button>
          <Button variant="secondary" href="https://t.me/disasterwoman" target="_blank" rel="noreferrer"><Send size={18} /> Telegram</Button>
        </div>
      </footer>
    </div>
  );
}
