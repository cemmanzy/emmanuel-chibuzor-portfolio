'use client';

import React, { useEffect, useState } from 'react';

import AppLogo from '@/components/ui/AppLogo';

import { site, person, social } from '@/config/portfolio';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        data-tour="header"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass py-3' : 'py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="group flex items-center gap-3"
            aria-label="Go to homepage"
          >
            <AppLogo
              src={site.logo}
              size={42}
            />

            <span
              className="text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-clay sm:text-lg"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--graphite)',
              }}
            >
              Emmanuel
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover-underline text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite-light)',
                }}
              >
                {item.label}
              </a>
            ))}

            {/* LinkedIn */}
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200 hover:text-graphite"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--graphite-light)',
              }}
            >
              LinkedIn
            </a>

            {/* Resume */}
            {person.resumeUrl && (
              <a
                href={`/${person.resumeUrl.replace(/^\/+/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  borderColor: 'rgba(59,59,59,0.15)',
                  color: 'var(--graphite)',
                  background: 'rgba(255,255,255,0.35)',
                }}
              >
                Resume
              </a>
            )}

            {/* Contact CTA */}
            <a
              href="mailto:cemmanzy@gmail.com"
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'var(--graphite)',
                color: 'var(--parchment)',
              }}
            >
              Let&apos;s talk
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
            style={{
              borderColor: 'rgba(59,59,59,0.14)',
              background: 'rgba(255,255,255,0.45)',
              color: 'var(--graphite)',
            }}
          >
            <span className="relative block h-4 w-5">
              <span
                className="absolute left-0 top-0 block h-px w-5 transition-transform duration-300"
                style={{
                  background: 'currentColor',
                  transform: menuOpen
                    ? 'translateY(7px) rotate(45deg)'
                    : 'none',
                }}
              />

              <span
                className="absolute left-0 top-[7px] block h-px w-5 transition-opacity duration-200"
                style={{
                  background: 'currentColor',
                  opacity: menuOpen ? 0 : 1,
                }}
              />

              <span
                className="absolute left-0 top-[14px] block h-px w-5 transition-transform duration-300"
                style={{
                  background: 'currentColor',
                  transform: menuOpen
                    ? 'translateY(-7px) rotate(-45deg)'
                    : 'none',
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-x-0 top-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="mx-3 mt-[72px] overflow-hidden rounded-2xl border shadow-xl"
          style={{
            borderColor: 'rgba(59,59,59,0.1)',
            background: 'rgba(245,240,235,0.97)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <nav
            className="flex flex-col p-4"
            aria-label="Mobile navigation"
          >
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite)',
                }}
              >
                {item.label}
              </a>
            ))}

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                color: 'var(--graphite)',
              }}
            >
              LinkedIn
            </a>

            {person.resumeUrl && (
              <a
                href={`/${person.resumeUrl.replace(/^\/+/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite)',
                }}
              >
                Resume
              </a>
            )}

            <a
              href="mailto:cemmanzy@gmail.com"
              onClick={handleLinkClick}
              className="mt-2 rounded-full px-5 py-3 text-center text-sm font-medium"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                background: 'var(--graphite)',
                color: 'var(--parchment)',
              }}
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-30 bg-black/10 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      />
    </>
  );
};

export default Header;