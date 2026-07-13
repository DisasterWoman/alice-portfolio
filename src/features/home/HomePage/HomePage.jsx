import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  Database,
  Gauge,
  Github,
  Layers,
  Mail,
  Orbit,
  Radio,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../../components/ui/Button/Button.jsx';
import CosmicButton from '../../../components/ui/CosmicButton/CosmicButton.jsx';
import CommandCenterScene from '../../../three/CommandCenterScene/CommandCenterScene.jsx';
import SolarPreviewScene from '../../../three/SolarPreviewScene/SolarPreviewScene.jsx';
import { mailHref, profile } from '../../../data/portfolio.js';
import {
  CosmicBackground,
  GlowCard,
  SectionHeader,
  StatusGrid,
  SystemMap,
  TechPill,
} from './HomePage.components';

import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

const buildCards = [
  [BriefcaseBusiness, 'Product Systems', 'Multi-step booking flows, dynamic pricing, payment states, admin content and API-connected dashboards.'],
  [Zap, 'Interaction Design', 'Motion systems, resilient UI states, micro-interactions and transitions that clarify product workflows.'],
  [Orbit, '3D Interfaces', 'Three.js scenes, orbit mechanics, particles, camera rhythm and WebGL moments built into real UI.'],
];

const experienceCards = [
  ['Hospitality SaaS', 'Product UI', 'Multi-step booking flows with dynamic pricing, promo logic, guest-based tariffs, payment states and admin-controlled content.', ['Dynamic pricing', 'Payment logic', 'Admin workflows']],
  ['Recruitment Platforms', 'Flow Systems', 'Candidate dashboards with salary/location filters, resume actions, response states, notifications and API-backed accounts.', ['Filters', 'Account flows', 'Notifications']],
  ['Enterprise UI', 'Scale', 'Responsive product systems with typed state, reusable components, browser-safe layouts, refactoring and performance-minded interfaces.', ['Reusable UI', 'Typed state', 'Performance']],
];

const techGroups = [
  ['Core Runtime', 'Interface engine', ['React', 'TypeScript', 'JavaScript', 'Vue']],
  ['State & Data', 'API synchronization', ['Redux Toolkit', 'RTK Query', 'React Query', 'Pinia']],
  ['Design Systems', 'Reusable product UI', ['MUI', 'Ant Design', 'Tailwind', 'SCSS']],
  ['3D & Motion', 'Cinematic interaction', ['Three.js', 'GSAP', 'Framer Motion', 'GLSL']],
  ['Quality', 'Reliable releases', ['Jest', 'Vitest', 'Docs']],
];

const skills = ['React', 'Three.js', 'TypeScript', 'SaaS'];
const systemChecks = ['API Channel', 'Motion Layer', 'WebGL Scene', 'Responsive UI', 'Performance Budget', 'Ready'];
const productSignals = ['API-connected flows', 'Dynamic pricing', 'Payment logic', 'Admin workflows', 'Reusable components', 'Performance-minded UI'];
const metricCards = [
  ['FLOW', 'Booking, recruiting, admin and 3D product paths'],
  ['STATE', 'Loading, payment, error and empty-state contracts'],
  ['MOTION', 'GSAP/Three.js details that support task clarity'],
  ['SHIP', 'Reusable UI, docs and performance-aware releases'],
];
const systemNodes = [
  [Layers, 'UI Layer', 'Reusable components, responsive states and polished product screens.'],
  [Database, 'State/Data', 'Typed client state, query caching, filters and loading/error contracts.'],
  [Server, 'API Integration', 'Payment states, admin content, notifications and sync-heavy workflows.'],
  [Workflow, 'Animation Layer', 'GSAP timelines, transitions and interaction feedback with restraint.'],
  [Cpu, '3D/WebGL', 'Three.js scenes, particles, orbit systems and camera rhythm.'],
  [ShieldCheck, 'Testing', 'Jest/Vitest coverage, docs and safer refactoring paths.'],
  [Gauge, 'Performance', 'Responsive layout, bundle awareness and smooth frame budgets.'],
];
const heroAnimatedElements = [
  '.home-hero',
  '.home-hero__eyebrow',
  '.home-hero__title span',
  '.home-hero__description',
  '.home-hero__actions .button',
  '.home-hero__actions .cosmic-button',
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
    let tiltTarget = null;

    const resetTilt = (node) => {
      if (!node) return;
      node.style.removeProperty('--tilt-x');
      node.style.removeProperty('--tilt-y');
      node.style.removeProperty('--light-x');
      node.style.removeProperty('--light-y');
    };

    const handlePointerMove = (event) => {
      const { innerWidth, innerHeight } = window;
      root.style.setProperty('--cursor-x', `${((event.clientX / innerWidth) - 0.5).toFixed(3)}`);
      root.style.setProperty('--cursor-y', `${((event.clientY / innerHeight) - 0.5).toFixed(3)}`);

      if (reduceMotion) return;
      const card = event.target.closest?.('.glow-card, .featured-experience__preview-button');
      if (card !== tiltTarget) {
        resetTilt(tiltTarget);
        tiltTarget = card;
      }
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / Math.max(rect.width, 1);
      const y = (event.clientY - rect.top) / Math.max(rect.height, 1);
      card.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
      card.style.setProperty('--tilt-y', `${((x - 0.5) * 5).toFixed(2)}deg`);
      card.style.setProperty('--tilt-x', `${((0.5 - y) * 4).toFixed(2)}deg`);
    };

    const handlePointerLeave = () => {
      root.style.setProperty('--cursor-x', '0');
      root.style.setProperty('--cursor-y', '0');
      resetTilt(tiltTarget);
      tiltTarget = null;
    };

    root.addEventListener('pointermove', handlePointerMove);
    root.addEventListener('pointerleave', handlePointerLeave);

    if (reduceMotion) {
      return () => {
        root.removeEventListener('pointermove', handlePointerMove);
        root.removeEventListener('pointerleave', handlePointerLeave);
      };
    }

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
        .from('.home-hero__actions .cosmic-button, .home-hero__actions .button', { autoAlpha: 0, y: 18, stagger: 0.08, duration: 0.45 }, '-=0.18')
        .from('.home-hero__skills', { autoAlpha: 0, y: 18, duration: 0.45 }, '-=0.14')
        .from('.home-hero__visual', { autoAlpha: 0, x: 28, duration: 0.72 }, '-=0.62');

      gsap.utils.toArray('.metric-strip, .featured-experience, .landing-section, .launch-sequence, .landing-contact').forEach((section) => {
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

      gsap.utils.toArray('.metric-card, .landing-card, .product-signal, .system-node, .tech-stack__group, .status-grid span').forEach((card) => {
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

    return () => {
      context.revert();
      root.removeEventListener('pointermove', handlePointerMove);
      root.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div ref={pageRef} className="home-page">
      <CosmicBackground />
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
          <p className="home-hero__description">I build product interfaces where API-connected workflows, animation and WebGL details make complex systems feel clear and alive.</p>
          <div className="button-group home-hero__actions">
            <CosmicButton type="button" onClick={launch3D}>
              <Rocket size={19} /> Explore 3D Experience
            </CosmicButton>
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

      <section className="metric-strip" aria-label="Frontend delivery signals">
        {metricCards.map(([label, body]) => (
          <GlowCard className="metric-card" key={label}>
            <span>{label}</span>
            <p>{body}</p>
          </GlowCard>
        ))}
      </section>

      <section className="featured-experience" id="projects" aria-labelledby="featured-title">
        <div>
          <p className="eyebrow">Featured 3D Experience</p>
          <h2 id="featured-title">Solar Interface System</h2>
          <p>
            A mission-control inspired Three.js case with orbit mechanics, particle fields,
            cinematic camera movement and interaction patterns designed to feel like part of the interface.
          </p>
          <div className="featured-experience__signals">
            {productSignals.slice(0, 4).map((signal) => <TechPill className="product-signal" key={signal}>{signal}</TechPill>)}
          </div>
          <CosmicButton type="button" onClick={launch3D}>
            Launch Experience <ArrowUpRight size={16} />
          </CosmicButton>
        </div>
        <button className="featured-experience__preview-button" type="button" onClick={launch3D} aria-label="Launch Solar Interface System">
          <SolarPreviewScene />
          <span>Launch preview</span>
        </button>
      </section>

      <section className="landing-section" id="build">
        <SectionHeader
          eyebrow="What I Build"
          title="Interfaces built for real product pressure."
          body="Not only screens: flows, states, contracts, transitions and small decisions that make tools easier to use every day."
        />
        <div className="landing-section__card-grid">
          {buildCards.map(([Icon, title, body]) => (
            <GlowCard className="landing-card" key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{body}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="landing-section" id="experience">
        <SectionHeader
          eyebrow="Commercial Experience"
          title="Product work with concrete frontend constraints."
        />
        <div className="experience-timeline">
          {experienceCards.map(([title, tag, body, pills]) => (
            <GlowCard className="landing-card landing-card--wide" key={title}>
              <span className="landing-card__tag">{tag}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="landing-card__pills">
                {pills.map((pill) => <TechPill key={pill}>{pill}</TechPill>)}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      <SystemMap nodes={systemNodes} />

      <section className="landing-section" id="stack">
        <SectionHeader
          eyebrow="Technology"
          title="Toolkit console for product systems."
          body="The stack is grouped by the kind of pressure it solves: rendering, data, UI systems, cinematic interaction and release confidence."
        />
        <div className="tech-stack toolkit-console">
          {techGroups.map(([group, detail, items]) => (
            <GlowCard className={`tech-stack__group ${group === '3D & Motion' ? 'tech-stack__group--featured' : ''}`} key={group}>
              <span className="tech-stack__status"><Activity size={14} /> ONLINE</span>
              <h3>{group}</h3>
              <p>{detail}</p>
              <code className="tech-stack__command">run {group.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</code>
              <div>
                {items.map((item) => <TechPill key={item}>{item}</TechPill>)}
              </div>
              {group === '3D & Motion' ? (
                <button type="button" onClick={launch3D}>See 3D case <ArrowUpRight size={14} /></button>
              ) : null}
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="launch-sequence">
        <span className="launch-sequence__beam launch-sequence__beam--one" aria-hidden="true" />
        <span className="launch-sequence__beam launch-sequence__beam--two" aria-hidden="true" />
        <div>
          <p className="eyebrow">Launch Sequence</p>
          <h2>Ready to explore a complete Three.js experience?</h2>
          <p>
            Enter a dedicated solar interface with animated planets, orbit mechanics,
            particles, lighting and a cinematic camera system tuned for interaction.
          </p>
          <CosmicButton type="button" onClick={launch3D}>
            <Rocket size={18} /> Launch Solar Interface
          </CosmicButton>
        </div>
        <StatusGrid items={systemChecks} />
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
