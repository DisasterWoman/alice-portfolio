import React from 'react';
import { Github, Mail, Phone, Waves } from 'lucide-react';
import SectionIntro from '../ui/SectionIntro.jsx';
import { mailHref, profile } from '../../data/portfolio.js';

export default function ContactSection() {
  return (
    <footer className="footer" id="contact">
      <SectionIntro
        icon={Waves}
        kicker="Contact"
        title="Ready for the React / Three.js interview loop."
        body="Interested in architecture tech, AI-supported workflows and international product teams."
      />
      <div className="contactLinks">
        <a href={mailHref}><Mail size={18} /> {profile.email}</a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={18} /> {profile.phone}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={18} /> github.com/DisasterWoman
        </a>
      </div>
    </footer>
  );
}
