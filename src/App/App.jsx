import React from 'react';
import Header from '../components/layout/Header/Header.jsx';
import HomePage from '../features/home/HomePage/HomePage.jsx';
import ShowcaseSection from '../features/home/ShowcaseSection/ShowcaseSection.jsx';

import './App.css';

export default function App() {
  const isThreeDPage = window.location.pathname === '/3d';

  return (
    <>
      <div className="app-shell__grain" aria-hidden="true" />
      <main className={`app-shell ${isThreeDPage ? 'app-shell--showcase' : 'app-shell--home'}`}>
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
