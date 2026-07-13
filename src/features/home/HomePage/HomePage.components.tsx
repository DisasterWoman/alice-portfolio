import React, { type ElementType, type ReactNode } from 'react';
import { Sparkles, type LucideIcon } from 'lucide-react';
import './HomePage.components.css';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

type TechPillProps = {
  children: ReactNode;
  className?: string;
};

type GlowCardProps<T extends ElementType = 'article'> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export type SystemNode = [LucideIcon, string, string];

type SystemMapProps = {
  nodes: SystemNode[];
};

type StatusGridProps = {
  items: string[];
};

export function CosmicBackground() {
  return (
    <div className="cosmic-background" aria-hidden="true">
      <span className="cosmic-background__nebula cosmic-background__nebula--one" />
      <span className="cosmic-background__nebula cosmic-background__nebula--two" />
      <span className="cosmic-background__orbit cosmic-background__orbit--one" />
      <span className="cosmic-background__orbit cosmic-background__orbit--two" />
      <span className="cosmic-background__trail cosmic-background__trail--one" />
      <span className="cosmic-background__trail cosmic-background__trail--two" />
      <span className="cosmic-background__stars" />
    </div>
  );
}

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function TechPill({ children, className = '' }: TechPillProps) {
  return <span className={`tech-pill ${className}`.trim()}>{children}</span>;
}

export function GlowCard<T extends ElementType = 'article'>({
  as,
  className = '',
  children,
  ...props
}: GlowCardProps<T>) {
  const Component = as ?? 'article';

  return (
    <Component className={`glow-card ${className}`.trim()} {...(props as React.ComponentPropsWithoutRef<T>)}>
      {children}
    </Component>
  );
}

export function SystemMap({ nodes }: SystemMapProps) {
  const connections = [
    ['50%', '50%', '19%', '23%'],
    ['50%', '50%', '81%', '22%'],
    ['50%', '50%', '86%', '49%'],
    ['50%', '50%', '77%', '76%'],
    ['50%', '50%', '23%', '78%'],
    ['50%', '50%', '14%', '50%'],
    ['50%', '50%', '50%', '81%'],
  ];

  return (
    <section className="system-map landing-section" id="system">
      <SectionHeader
        eyebrow="System Architecture"
        title="Frontend systems as connected mission layers."
        body="A compact view of how product UI, data contracts, animation and WebGL pieces come together without turning the interface into noise."
      />
      <div className="system-map__surface">
        <svg className="system-map__connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {connections.map(([x1, y1, x2, y2]) => (
            <line key={`${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </svg>
        <div className="system-map__core">
          <Sparkles size={18} />
          <strong>Frontend Command Core</strong>
          <span>Interaction, state, performance</span>
        </div>
        <div className="system-map__nodes">
          {nodes.map(([Icon, title, body], index) => (
            <GlowCard className={`system-node system-node--${index + 1}`} key={title}>
              <span><Icon size={18} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatusGrid({ items }: StatusGridProps) {
  return (
    <div className="status-grid" aria-label="Launch readiness">
      {items.map((item) => (
        <span key={item}><i /> {item}</span>
      ))}
    </div>
  );
}
