import React from 'react';
import SceneCanvas from './components/scene/SceneCanvas.jsx';
import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import ShowcaseSection from './components/sections/ShowcaseSection.jsx';
import SignalSection from './components/sections/SignalSection.jsx';
import ImpactSection from './components/sections/ImpactSection.jsx';
import ExperienceSection from './components/sections/ExperienceSection.jsx';
import StackSection from './components/sections/StackSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

export default function App() {
  const isThreeDPage = window.location.pathname === '/3d';

  return (
    <>
      {isThreeDPage ? null : <SceneCanvas />}
      <div className="grainLayer" aria-hidden="true" />
      <main className="pageShell">
        <Header />
        {isThreeDPage ? (
          <ShowcaseSection />
        ) : (
          <>
            <Hero />
            <SignalSection />
            <ImpactSection />
            <ExperienceSection />
            <StackSection />
            <ContactSection />
          </>
        )}
      </main>
    </>
  );
}
