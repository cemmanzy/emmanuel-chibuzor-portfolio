'use client';

import React from 'react';

import AppLogo from '@/components/ui/AppLogo';

import { site, person, social } from '@/config/portfolio';

const YEAR = 2026;

const Footer: React.FC = () => {
  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <footer
      className="border-t bg-parchment"
      style={{
        borderColor: 'var(--hair)',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────
          Closing CTA
      ────────────────────────────────────────────────────────────── */}

      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
        <div
          className="overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14"
          style={{
            background: 'var(--graphite)',
            color: 'var(--parchment)',
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.3em]"
                style={{
                  color: 'rgba(245,240,235,0.5)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                Let&apos;s work together
              </span>

              <h2
                className="mt-5 font-serif font-light"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize:
                    'clamp(2.5rem, 6vw, 5.5rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.035em',
                }}
              >
                Let&apos;s build something
                <br />
                <em>useful.</em>
              </h2>

              <p
                className="mt-6 max-w-xl text-sm leading-7 sm:text-base"
                style={{
                  color:
                    'rgba(245,240,235,0.62)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                I&apos;m open to remote Full-Stack Developer
                opportunities, freelance projects, and
                collaborations with teams building useful
                digital products.
              </p>
            </div>

            <a
              href="mailto:cemmanzy@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: 'var(--parchment)',
                color: 'var(--graphite)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Send me an email
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Main footer
      ────────────────────────────────────────────────────────────── */}

      <div
        className="border-t"
        style={{
          borderColor: 'var(--hair)',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
            {/* Brand */}
            <div>
              <a
                href="#home"
                className="inline-flex items-center gap-3"
              >
                <AppLogo
                  src={site.logo}
                  size={42}
                />

                <span
                  className="text-base font-semibold"
                  style={{
                    fontFamily:
                      'DM Sans, sans-serif',
                    color:
                      'var(--graphite)',
                  }}
                >
                  {site.brand}
                </span>
              </a>

              <p
                className="mt-5 max-w-xs text-sm leading-7"
                style={{
                  color:
                    'var(--graphite-light)',
                  fontFamily:
                    'DM Sans, sans-serif',
                }}
              >
                Full-Stack Developer building fast,
                scalable web applications and digital
                products with modern technologies.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span
                  className="relative flex h-2 w-2"
                  aria-hidden="true"
                >
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                    style={{
                      background:
                        '#28CA42',
                    }}
                  />

                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{
                      background:
                        '#28CA42',
                    }}
                  />
                </span>

                <span
                  className="font-mono text-[9px] uppercase tracking-wider"
                  style={{
                    color:
                      'var(--graphite-light)',
                  }}
                >
                  Available for remote work
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: 'var(--blue)',
                }}
              >
                Navigate
              </span>

              <nav className="mt-5 flex flex-col gap-3">
                {navigation.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-fit text-sm transition-colors duration-200 hover:text-graphite"
                    style={{
                      color:
                        'var(--graphite-light)',
                      fontFamily:
                        'DM Sans, sans-serif',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color: 'var(--clay)',
                }}
              >
                Connect
              </span>

              <nav className="mt-5 flex flex-col gap-3">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm transition-colors duration-200 hover:text-graphite"
                  style={{
                    color:
                      'var(--graphite-light)',
                    fontFamily:
                      'DM Sans, sans-serif',
                  }}
                >
                  LinkedIn
                </a>

                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm transition-colors duration-200 hover:text-graphite"
                  style={{
                    color:
                      'var(--graphite-light)',
                    fontFamily:
                      'DM Sans, sans-serif',
                  }}
                >
                  GitHub
                </a>

                <a
                  href="mailto:cemmanzy@gmail.com"
                  className="w-fit break-all text-sm transition-colors duration-200 hover:text-graphite"
                  style={{
                    color:
                      'var(--graphite-light)',
                    fontFamily:
                      'DM Sans, sans-serif',
                  }}
                >
                  cemmanzy@gmail.com
                </a>
              </nav>
            </div>

            {/* Location + Resume */}
            <div>
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{
                  color:
                    'var(--graphite-light)',
                }}
              >
                Based in
              </span>

              <p
                className="mt-5 text-sm"
                style={{
                  color:
                    'var(--graphite)',
                  fontFamily:
                    'DM Sans, sans-serif',
                }}
              >
                {person.location}
              </p>

              <p
                className="mt-2 max-w-xs text-sm leading-6"
                style={{
                  color:
                    'var(--graphite-light)',
                }}
              >
                Working remotely with teams and
                clients worldwide.
              </p>

              {person.resumeUrl && (
                <a
                  href={`/${person.resumeUrl.replace(
                    /^\/+/,
                    '',
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    borderColor:
                      'rgba(59,59,59,0.14)',
                    color:
                      'var(--graphite)',
                    fontFamily:
                      'DM Sans, sans-serif',
                  }}
                >
                  View Resume ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Bottom bar
      ────────────────────────────────────────────────────────────── */}

      <div
        className="border-t"
        style={{
          borderColor: 'var(--hair)',
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p
            className="font-mono text-[9px] uppercase tracking-wider"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            © {YEAR} {site.brand}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span
              className="font-mono text-[9px] uppercase tracking-wider"
              style={{
                color:
                  'var(--graphite-light)',
              }}
            >
              Lagos, Nigeria
            </span>

            <span
              className="h-1 w-1 rounded-full"
              style={{
                background:
                  'var(--graphite-light)',
              }}
            />

            <span
              className="font-mono text-[9px] uppercase tracking-wider"
              style={{
                color:
                  'var(--graphite-light)',
              }}
            >
              Remote worldwide
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;