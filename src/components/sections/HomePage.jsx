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
import Button from '../ui/Button.jsx';
import CommandCenterScene from '../scene/CommandCenterScene.jsx';
import SolarPreviewScene from '../scene/SolarPreviewScene.jsx';
import { mailHref, profile } from '../../data/portfolio.js';

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

const skills = ['4+ Years', 'Three.js', 'TypeScript', 'React', 'Vue', 'SaaS'];
const systemChecks = ['System Check', 'Lighting', 'Particles', 'Camera', 'Orbit Engine', 'Ready'];

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

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTimeline
        .from('.landingHero', { autoAlpha: 0, scale: 0.985, duration: 0.75 })
        .from('.landingHero .kicker', { autoAlpha: 0, y: 16, duration: 0.45 }, '-=0.35')
        .from('.landingHero h1 span', { autoAlpha: 0, y: 34, stagger: 0.08, duration: 0.62 }, '-=0.2')
        .from('.landingHeroCopy > p:not(.kicker)', { autoAlpha: 0, y: 18, duration: 0.5 }, '-=0.25')
        .from('.heroActions .button', { autoAlpha: 0, y: 18, stagger: 0.08, duration: 0.45 }, '-=0.18')
        .from('.skillsCluster, .orbitStatusCard', { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.45 }, '-=0.14')
        .from('.heroVisualPanel', { autoAlpha: 0, x: 28, duration: 0.72 }, '-=0.62')
        .from('.systemStatusWidget', { autoAlpha: 0, y: 18, duration: 0.42 }, '-=0.22');

      gsap.to('.heroVisualPanel', {
        y: -10,
        duration: 4.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray('.featured3d, .landingSection, .launchSequence, .landingContact').forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 42,
          scale: 0.985,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('.landingCard, .techGroup, .systemChecks span').forEach((card) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 24,
          duration: 0.5,
          ease: 'power3.out',
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
    <div ref={pageRef} className="homeExperience">
      <div className={`routeVeil ${isLaunching ? 'isActive' : ''}`} aria-hidden="true" />

      <header id="top" className="landingHero">
        <div className="landingHeroCopy" aria-labelledby="hero-title">
          <p className="kicker"><Sparkles size={16} /> Frontend Engineer · React · Three.js</p>
          <h1 id="hero-title">
            <span>Designing</span>
            <span>interfaces</span>
            <span>that feel</span>
            <span className="gradientText">alive.</span>
          </h1>
          <p>I build immersive web experiences where interaction, animation and code come together to tell a story.</p>
          <div className="ctaRow heroActions">
            <button className="button button--primary" type="button" onClick={launch3D}>
              <Rocket size={19} /> Explore 3D Experience
            </button>
            <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={19} /> GitHub <ArrowUpRight size={16} />
            </Button>
          </div>
          <div className="skillsCluster" aria-label="Core skills">
            <span className="skillsLabel">Core Skills</span>
            <div className="landingBadges">
              {skills.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="orbitStatusCard">
            <span className="statusOrb" aria-hidden="true" />
            <div>
              <strong>Currently in orbit</strong>
              <span>Building interactive 3D experiences</span>
            </div>
            <i aria-hidden="true" />
          </div>
        </div>
        <div className="heroVisualPanel">
          <CommandCenterScene />
          <div className="systemStatusWidget" aria-hidden="true">
            <strong>System Status</strong>
            <span><i /> All systems operational</span>
            <b />
          </div>
        </div>
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
          <span>Launch preview</span>
        </button>
      </section>

      <section className="landingSection" id="build">
        <div className="landingSectionIntro">
          <p className="kicker">What I Build</p>
          <h2>Interfaces built for real products.</h2>
        </div>
        <div className="landingCardGrid">
          {buildCards.map(([Icon, title, body]) => (
            <article className="landingCard" key={title}>
              <Icon size={24} />
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
          {experienceCards.map(([title, tag, body]) => (
            <article className="landingCard compact" key={title}>
              <span className="cardTag">{tag}</span>
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
            <article className={`techGroup ${group === '3D & Motion' ? 'isFeatured' : ''}`} key={group}>
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

      <section className="launchSequence">
        <div>
          <p className="kicker">Launch Sequence</p>
          <h2>Ready to explore a complete Three.js experience?</h2>
          <p>
            Enter a dedicated interactive solar system built with animated planets,
            orbit mechanics, particles, lighting and cinematic camera movement.
          </p>
          <button className="button button--primary" type="button" onClick={launch3D}>
            <Rocket size={18} /> Launch Solar Interface
          </button>
        </div>
        <div className="systemChecks" aria-hidden="true">
          {systemChecks.map((item) => (
            <span key={item}><i /> {item}</span>
          ))}
        </div>
      </section>

      <footer className="landingContact" id="contact">
        <div>
          <p className="kicker"><Radio size={16} /> Contact</p>
          <h2>Let’s build something memorable.</h2>
          <p>Open to frontend roles, creative engineering projects and interactive web experiences.</p>
        </div>
        <div className="ctaRow">
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</Button>
          <Button href={mailHref}><Mail size={18} /> Email</Button>
          <Button variant="secondary" href="https://t.me/disasterwoman" target="_blank" rel="noreferrer"><Send size={18} /> Telegram</Button>
        </div>
      </footer>
    </div>
  );
}
