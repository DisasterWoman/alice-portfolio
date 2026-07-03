import React from 'react';
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Github,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Radar,
  Sparkles,
  Waves,
} from 'lucide-react';
import PsychedelicCanvas from './components/PsychedelicCanvas.jsx';
import { experience, highlights, metrics, navItems, profile, signalCards, skills } from './data/portfolio.js';

const mailHref = `mailto:${profile.email}?subject=Frontend%20Developer%20React%20Three.js%20Opportunity`;

function SectionIntro({ kicker, title, body }) {
  return (
    <div className="sectionIntro">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function App() {
  return (
    <>
      <PsychedelicCanvas />
      <div className="noiseLayer" aria-hidden="true" />
      <main className="pageShell">
        <nav className="topbar" aria-label="Portfolio navigation">
          <a className="brand" href="#top">
            <span>AP</span>
            {profile.name}
          </a>
          <div className="navLinks">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
        </nav>

        <header id="top" className="hero">
          <section className="heroCopy" aria-labelledby="hero-title">
            <p className="kicker"><Sparkles size={16} /> React / Three.js / TypeScript</p>
            <h1 id="hero-title">{profile.headline}</h1>
            <p className="lead">{profile.summary}</p>
            <div className="ctaRow">
              <a className="primaryButton" href={mailHref}>
                <Mail size={18} /> Contact me
              </a>
              <a className="secondaryButton" href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="profileMeta" aria-label="Profile details">
              <span><MapPin size={16} /> {profile.location}</span>
              <span><Globe2 size={16} /> Fluent English</span>
              <span><Building2 size={16} /> SaaS product UI</span>
            </div>
          </section>

          <aside className="heroConsole" aria-label="Role match summary">
            <div className="consoleTop">
              <span><Radar size={18} /> live role signal</span>
              <strong>React + Three.js</strong>
            </div>
            <div className="signalMeter" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="consoleGrid">
              {metrics.map((metric) => (
                <div className="metricTile" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </header>

        <section className="signalSection" id="signal">
          <SectionIntro
            kicker="Signal"
            title="A portfolio tuned for architectural tech."
            body="The visual system borrows from feasibility maps, zoning layers, AI insight dashboards and psychedelic generative interfaces."
          />
          <div className="signalCards">
            {signalCards.map((card, index) => (
              <article className="signalCard" key={card.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="impactSection" id="impact">
          <SectionIntro kicker="Impact" title="Commercial frontend with product outcomes." />
          <div className="impactList">
            {highlights.map((item) => (
              <p key={item}><CheckCircle2 size={18} /> {item}</p>
            ))}
          </div>
        </section>

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
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="stackSection" id="stack">
          <SectionIntro
            kicker="Stack"
            title="Frontend toolkit with a visual systems edge."
            body="A practical stack for maintainable React applications, animated interfaces and data-rich user journeys."
          />
          <div className="skillCloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <footer className="footer" id="contact">
          <div>
            <p className="kicker"><Waves size={16} /> Contact</p>
            <h2>Ready for the React / Three.js interview loop.</h2>
            <p>
              Interested in architecture tech, AI-supported workflows and international product teams.
            </p>
          </div>
          <div className="contactLinks">
            <a href={mailHref}><Mail size={18} /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} /> {profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} /> github.com/DisasterWoman
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
