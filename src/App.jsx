import React from 'react';
import Header from './components/layout/Header.jsx';
import HomePage from './components/sections/HomePage.jsx';
import ShowcaseSection from './components/sections/ShowcaseSection.jsx';

export default function App() {
  const isThreeDPage = window.location.pathname === '/3d';

  return (
    <>
      <div className="grainLayer" aria-hidden="true" />
      <main className="pageShell">
        <Header />
        {isThreeDPage ? (
          <ShowcaseSection />
        ) : (
          <HomePage />
        )}
      </main>
    </>
  );
}
