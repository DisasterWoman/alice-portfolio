import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Activity, Gauge, Github, Mail, Orbit, Radio, Rocket, Satellite, Sparkles, X } from 'lucide-react';
import ComplexAnimationCanvas from '../../../three/ComplexAnimationCanvas/ComplexAnimationCanvas.jsx';
import Button from '../../../components/ui/Button/Button.jsx';
import { mailHref, profile } from '../../../data/portfolio.js';
import { CosmicBackground } from '../HomePage/HomePage.components';

import './ShowcaseSection.css';

const planets = [
  { name: 'Sun', type: 'Star', tagline: 'System core', distanceLabel: 'System position', distance: '0 km', period: 'center point', temperature: '5,500 C', gravity: '274 m/s2', diameter: '1,392,700 km', moons: '8 planets', day: '25d', color: '#ffb347' },
  { name: 'Mercury', type: 'Terrestrial', tagline: 'Fast inner world', distance: '57.9M km', period: '88 days', temperature: '167 C', gravity: '3.70 m/s2', diameter: '4,879 km', moons: '0', day: '58d 15h', color: '#b9b2a0' },
  { name: 'Venus', type: 'Terrestrial', tagline: 'Golden atmosphere', distance: '108.2M km', period: '225 days', temperature: '464 C', gravity: '8.87 m/s2', diameter: '12,104 km', moons: '0', day: '243d', color: '#e7a85d' },
  { name: 'Earth', type: 'Terrestrial', tagline: 'Blue mission origin', distance: '149.6M km', period: '365 days', temperature: '15 C', gravity: '9.81 m/s2', diameter: '12,742 km', moons: '1', day: '24h', color: '#58c7ff' },
  { name: 'Moon', type: 'Natural satellite', tagline: 'Earth orbit companion', distanceLabel: 'Distance from Earth', distance: '384,400 km', period: '27.3 days', temperature: '-20 C avg', gravity: '1.62 m/s2', diameter: '3,474 km', moons: '0', day: '27d 7h', color: '#d9d7cf' },
  { name: 'Mars', type: 'Terrestrial', tagline: 'The red planet', distance: '227.9M km', period: '687 days', temperature: '-63 C', gravity: '3.71 m/s2', diameter: '6,779 km', moons: '2', day: '24h 37m', color: '#ee7a4d' },
  { name: 'Jupiter', type: 'Gas giant', tagline: 'Storm-scale gravity', distance: '778.5M km', period: '12 years', temperature: '-108 C', gravity: '24.79 m/s2', diameter: '139,820 km', moons: '95', day: '9h 56m', color: '#f0c27a' },
  { name: 'Saturn', type: 'Gas giant', tagline: 'Ringed signal hub', distance: '1.43B km', period: '29 years', temperature: '-139 C', gravity: '10.44 m/s2', diameter: '116,460 km', moons: '146', day: '10h 42m', color: '#d8c38c' },
  { name: 'Uranus', type: 'Ice giant', tagline: 'Outer blue vector', distance: '2.87B km', period: '84 years', temperature: '-195 C', gravity: '8.69 m/s2', diameter: '50,724 km', moons: '27', day: '17h 14m', color: '#9cefff' },
];

const caseCards = [
  ['Performance', 'Instanced star fields, procedural textures, reduced geometry churn and responsive canvas sizing.'],
  ['Interaction', 'Planet selection, event-driven camera focus, probe launch animation and UI-to-WebGL state control.'],
  ['Visuals', 'Custom canvas materials, glow sprites, rings, asteroid belt, particles and cinematic color states.'],
];

const journey = [
  ['01', 'The Sun', 'Orange-gold origin point with procedural surface motion and additive glow.'],
  ['02', 'Inner planets', 'Mercury, Venus, Earth and Mars move through tight transparent orbits.'],
  ['03', 'Asteroid belt', 'Particle belt adds scale and motion between Mars and Jupiter.'],
  ['04', 'Gas giants', 'Jupiter and Saturn show larger textured bodies, rings and slower orbital rhythm.'],
  ['05', 'Outer darkness', 'Blue/violet depth, dense stars and slow cinematic camera drift.'],
];

const stack = [
  ['Three.js', 'Core WebGL scene, planets, lights and orbital motion.'],
  ['React', 'Stateful control panels and event bridge into canvas.'],
  ['TypeScript-ready', 'Data-driven interfaces structured for typed models.'],
  ['GLSL-style shaders', 'Procedural texture and atmosphere-like glow work.'],
  ['Vite', 'Fast local iteration and optimized production build.'],
  ['Postprocessing-ready', 'Scene prepared for bloom, trails and cinematic passes.'],
];

function focusPlanet(name) {
  window.dispatchEvent(new CustomEvent('space-focus-planet', { detail: { planet: name } }));
}

function launchProbe() {
  window.dispatchEvent(new CustomEvent('space-launch-probe'));
}

function resetView() {
  window.dispatchEvent(new CustomEvent('space-reset-camera'));
}

export default function ShowcaseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [orbitSpeed, setOrbitSpeed] = useState(1.25);
  const [starDensity, setStarDensity] = useState(100);
  const [showOrbits, setShowOrbits] = useState(true);
  const [cinematic, setCinematic] = useState(true);
  const [launchProgress, setLaunchProgress] = useState(0);

  useEffect(() => {
    const handleSceneSelection = (event) => {
      const planet = planets.find((item) => item.name === event.detail?.planet);
      if (planet) setSelectedPlanet(planet);
    };
    window.addEventListener('space-selected-planet', handleSceneSelection);
    return () => window.removeEventListener('space-selected-planet', handleSceneSelection);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('space-set-orbit-speed', { detail: { speed: orbitSpeed } }));
  }, [orbitSpeed]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('space-toggle-orbits', { detail: { enabled: showOrbits } }));
  }, [showOrbits]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('space-toggle-cinematic', { detail: { enabled: cinematic } }));
  }, [cinematic]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('space-set-star-density', { detail: { density: starDensity } }));
  }, [starDensity]);

  const selectPlanet = (planet) => {
    setSelectedPlanet(planet);
    focusPlanet(planet.name);
    document.querySelector('.mission-control')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleLaunch = () => {
    launchProbe();
    setLaunchProgress(1);
    const started = Date.now();
    const timer = window.setInterval(() => {
      const progress = Math.min(Math.round(((Date.now() - started) / 5000) * 100), 100);
      setLaunchProgress(progress);
      if (progress >= 100) window.clearInterval(timer);
    }, 120);
  };

  return (
    <div className="showcase-page">
      <CosmicBackground />
      <section className="space-hero" aria-label="Cinematic space control room intro">
        <div className="space-hero__content">
          <p className="eyebrow"><Orbit size={16} /> NASA-style dashboard</p>
          <h1>Cinematic space control room.</h1>
          <p>
            Not a website about space. A space interface you can control: select planets,
            launch probes, tune telemetry and drive a realistic Three.js solar system.
          </p>
          <div className="space-hero__badges" aria-label="3D scene details">
            <span>3D planet selection</span>
            <span>mission planner</span>
            <span>live signal UI</span>
          </div>
        </div>
      </section>

      <section className={`mission-control ${selectedPlanet ? 'mission-control--has-selection' : ''}`} aria-labelledby="mission-control-title">
        <div className="mission-control__scene">
          <ComplexAnimationCanvas />
        </div>
        {selectedPlanet ? (
          <aside className="mission-control__panel">
            <div className="mission-control__panel-header">
              <p className="eyebrow"><Satellite size={16} /> Selected object</p>
              <button type="button" aria-label="Close selected object panel" onClick={() => setSelectedPlanet(null)}>
                <X size={18} />
              </button>
            </div>
            <h2 id="mission-control-title">{selectedPlanet.name}</h2>
            <dl>
              <div><dt>{selectedPlanet.distanceLabel || 'Distance from Sun'}</dt><dd>{selectedPlanet.distance}</dd></div>
              <div><dt>Orbital period</dt><dd>{selectedPlanet.period}</dd></div>
              <div><dt>Gravity</dt><dd>{selectedPlanet.gravity}</dd></div>
              <div><dt>Temperature</dt><dd>{selectedPlanet.temperature}</dd></div>
            </dl>
            <div className="mission-control__tuning" aria-label="Scene controls">
              <label>
                <span>Orbit speed <b>{orbitSpeed.toFixed(2)}x</b></span>
                <input type="range" min="0.25" max="2" step="0.05" value={orbitSpeed} onChange={(event) => setOrbitSpeed(Number(event.target.value))} />
              </label>
              <label>
                <span>Star density <b>{Math.round(starDensity)}%</b></span>
                <input type="range" min="30" max="100" step="5" value={starDensity} onChange={(event) => setStarDensity(Number(event.target.value))} />
              </label>
              <div className="mission-control__toggle-grid">
                <label><input type="checkbox" checked={showOrbits} onChange={(event) => setShowOrbits(event.target.checked)} /> Show orbits</label>
                <label><input type="checkbox" checked={cinematic} onChange={(event) => setCinematic(event.target.checked)} /> Cinematic camera</label>
              </div>
              <button type="button" onClick={resetView}>Reset view</button>
            </div>
            <div className="mission-control__actions">
              <button type="button" onClick={() => focusPlanet(selectedPlanet.name)}>Focus planet</button>
              <button type="button" onClick={handleLaunch}>Launch probe</button>
            </div>
          </aside>
        ) : null}
      </section>

      <section className="space-section" aria-labelledby="archive-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Sparkles size={16} /> Planet archive</p>
          <h2 id="archive-title">Explore the system.</h2>
          <p>Each card controls the main mission canvas and focuses the camera without changing pages.</p>
        </div>
        <div className="planet-archive">
          <div className="planet-archive__controls" aria-label="Planet archive controls">
            <button type="button" onClick={scrollPrev}>Prev</button>
            <button type="button" onClick={scrollNext}>Next</button>
          </div>
          <div className="planet-archive__viewport" ref={emblaRef}>
            <div className="planet-archive__track">
              {planets.map((planet) => (
                <div className="planet-archive__slide" key={planet.name}>
                  <button
                    className={`planet-card ${selectedPlanet?.name === planet.name ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => selectPlanet(planet)}
                    // Dynamic CSS variable: each planet color comes from data, so a static class would duplicate data as CSS.
                    style={{ '--planet-color': planet.color }}
                  >
                    <span>{planet.type}</span>
                    <i />
                    <strong>{planet.name}</strong>
                    <em>{planet.tagline}</em>
                    <dl>
                      <div><dt>diameter</dt><dd>{planet.diameter}</dd></div>
                      <div><dt>moons</dt><dd>{planet.moons}</dd></div>
                      <div><dt>day length</dt><dd>{planet.day}</dd></div>
                    </dl>
                    <small>Explore</small>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-section space-section--launch" aria-labelledby="launch-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Rocket size={16} /> Launch simulator</p>
          <h2 id="launch-title">Mission route.</h2>
          <p>Earth to Jupiter transfer simulation with probe animation and live progress feedback.</p>
        </div>
        <div className="launch-panel">
          <div className="launch-panel__route"><span>Earth</span><i /><span>Jupiter</span></div>
          <dl>
            <div><dt>Estimated travel time</dt><dd>6 years</dd></div>
            <div><dt>Fuel required</dt><dd>78%</dd></div>
            <div><dt>Signal delay</dt><dd>43 min</dd></div>
          </dl>
          <div
            className="launch-panel__progress"
            // Dynamic CSS variable: launch progress is live React state and drives only this bar width.
            style={{ '--launch-progress': `${launchProgress}%` }}
          >
            <span />
          </div>
          <p className="launch-panel__status">{launchProgress > 0 && launchProgress < 100 ? `launching... ${launchProgress}%` : launchProgress === 100 ? 'arrival flash confirmed' : 'probe standing by'}</p>
          <button className="launch-panel__button" type="button" onClick={handleLaunch}><Rocket size={18} /> Launch mission</button>
        </div>
      </section>

      <section className="space-section" aria-labelledby="signal-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Radio size={16} /> Signal dashboard</p>
          <h2 id="signal-title">Live orbital data.</h2>
          <p>Controls show state management, UI-to-canvas events and realtime scene tuning.</p>
        </div>
        <div className="orbital-signal">
          <div className="radar" aria-hidden="true"><span /><span /><span /></div>
          <div className="orbital-signal__dashboard">
            <div className="orbital-signal__readout"><span>Signal strength</span><strong>87%</strong><small>stable</small></div>
            <div className="orbital-signal__readout"><span>Star density</span><strong>{Math.round(7410 * (starDensity / 100))}</strong><small>live</small></div>
            <div className="orbital-signal__readout"><span>Active planet</span><strong>{selectedPlanet?.name || 'System'}</strong><small>{selectedPlanet ? 'focus' : 'idle'}</small></div>
            <div className="orbital-signal__readout"><span>Orbit speed</span><strong>{orbitSpeed.toFixed(2)}x</strong><small>tuned</small></div>
          </div>
        </div>
      </section>

      <section className="space-section space-section--journey" aria-labelledby="journey-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Activity size={16} /> Cinematic scroll journey</p>
          <h2 id="journey-title">Camera path story.</h2>
          <p>Scroll blocks describe the route a production version can bind to camera keyframes.</p>
        </div>
        <div className="journey-list">
          {journey.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-section" aria-labelledby="case-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Gauge size={16} /> Technical case study</p>
          <h2 id="case-title">Built as a real WebGL interface.</h2>
        </div>
        <div className="case-study">
          {caseCards.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
          <div className="case-study__flow">React state to Three.js scene to UI panels to user interaction</div>
        </div>
      </section>

      <section className="space-section" aria-labelledby="stack-title">
        <div className="space-section__intro">
          <p className="eyebrow"><Activity size={16} /> Stack constellation</p>
          <h2 id="stack-title">Technology orbit.</h2>
        </div>
        <div className="stack-constellation">
          {stack.map(([title, body]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="space-contact" id="contact">
        <div>
          <p className="eyebrow"><Mail size={16} /> Contact</p>
          <h2>Want to build something cinematic?</h2>
          <p>Frontend developer focused on interactive interfaces, 3D experiences and polished UI systems.</p>
        </div>
        <div className="button-group">
          <Button href={mailHref}><Mail size={18} /> Contact me</Button>
          <Button variant="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> View GitHub</Button>
        </div>
      </footer>
    </div>
  );
}
