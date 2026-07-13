import React, { type ElementType, type ReactNode } from 'react';
import './CosmicButton.css';

type CosmicButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export default function CosmicButton<T extends ElementType = 'button'>({
  as = 'button',
  children,
  className = '',
  variant = 'primary',
  ...props
}: CosmicButtonProps<T>) {
  const Component = props.href ? 'a' : as;
  const classes = `cosmic-button cosmic-button--${variant} ${className}`.trim();

  return (
    <Component className={classes} {...(props as React.ComponentPropsWithoutRef<T>)}>
      <span className="cosmic-button__shine" aria-hidden="true" />
      <span className="cosmic-button__content">{children}</span>
    </Component>
  );
}
