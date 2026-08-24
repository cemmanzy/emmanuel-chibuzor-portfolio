'use client';

import React from 'react';
import { person, social } from '@/config/portfolio';

const AboutSection: React.FC = () => {
  const frontendSkills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
  ];

  const backendSkills = [
    'Node.js',
    'Express.js',
    'REST APIs',
    'MongoDB',
    'Sanity CMS',
  ];

  const tools = [
    'Git',
    'GitHub',
    'Vercel',
    'VS Code',
    'Responsive Design',
    'SEO',
  ];

  return (
    <section
      id="about"
      className="relative w-full max-w-full overflow-x-clip bg-parchment"
    >
      {/* ─────────────────────────────────────────────────────────────
          About introduction
      ────────────────────────────────────────────────────────────── */}

      <div
        className="border-t"
        style={{
          borderColor: 'rgba(59,59,59,0.08)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-32">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
            {/* Left */}
            <div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{
                  color: 'var(--blue)',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                About me
              </span>

              <h2
                className="mt-4 min-w-0 font-serif font-light leading-none break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 'clamp(2.9rem, 13vw, 6rem)',
                  letterSpacing: '-0.035em',
                  color: 'var(--graphite)',
                }}
              >
                Building
                <br />
                <em>useful things.</em>
              </h2>
            </div>

            {/* Right */}
            <div className="min-w-0 max-w-2xl">
              <p
                className="text-base leading-7 sm:text-xl sm:leading-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite)',
                }}
              >
                I&apos;m Emmanuel Chibuzor, a Full-Stack Developer
                focused on building fast, responsive and scalable web
                applications.
              </p>

              <p
                className="mt-6 min-w-0 text-base leading-7 sm:leading-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite-light)',
                }}
              >
                I work across the frontend and backend, turning ideas
                into production-ready digital products using React,
                Next.js, TypeScript, Node.js, Express, MongoDB and
                modern web technologies.
              </p>

              <p
                className="mt-6 min-w-0 text-base leading-7 sm:leading-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite-light)',
                }}
              >
                I care about clean interfaces, maintainable code,
                performance, responsive experiences and building
                software that solves real problems for real users.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                  style={{
                    background: 'var(--graphite)',
                    color: 'var(--parchment)',
                  }}
                >
                  Connect on LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href={`mailto:cemmanzy@gmail.com`}
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                  style={{
                    borderColor:
                      'rgba(59,59,59,0.15)',
                    color: 'var(--graphite)',
                    background:
                      'rgba(255,255,255,0.3)',
                  }}
                >
                  Email me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Technical stack
      ────────────────────────────────────────────────────────────── */}

      <div
        id="skills"
        className="border-t"
        style={{
          borderColor: 'rgba(59,59,59,0.08)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-32">
          <div className="mb-10 sm:mb-12">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{ color: 'var(--clay)' }}
            >
              Technical stack
            </span>

            <h3
              className="mt-4 font-serif font-light"
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(2.6rem, 11vw, 5rem)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--graphite)',
              }}
            >
              Tools I use to
              <br />
              <em>build & ship.</em>
            </h3>
          </div>

          <div className="grid min-w-0 gap-px overflow-hidden rounded-2xl border bg-black/5 md:grid-cols-3">
            {/* Frontend */}
            <div className="min-w-0 bg-parchment p-6 sm:p-9">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: 'var(--blue)' }}
              >
                01 — Frontend
              </span>

              <h4
                className="mt-5 font-serif text-2xl"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--graphite)',
                }}
              >
                Interfaces
              </h4>

              <div className="mt-6 flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-3 py-2 font-mono text-[9px]"
                    style={{
                      background:
                        'rgba(62,124,166,0.07)',
                      border:
                        '1px solid rgba(62,124,166,0.12)',
                      color: 'var(--blue)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="min-w-0 bg-parchment p-6 sm:p-9">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: 'var(--clay)' }}
              >
                02 — Backend
              </span>

              <h4
                className="mt-5 font-serif text-2xl"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--graphite)',
                }}
              >
                Systems
              </h4>

              <div className="mt-6 flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full px-3 py-2 font-mono text-[9px]"
                    style={{
                      background:
                        'rgba(194,120,92,0.07)',
                      border:
                        '1px solid rgba(194,120,92,0.13)',
                      color: 'var(--clay)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="min-w-0 bg-parchment p-6 sm:p-9">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: 'var(--graphite-light)' }}
              >
                03 — Tools
              </span>

              <h4
                className="mt-5 font-serif text-2xl"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--graphite)',
                }}
              >
                Workflow
              </h4>

              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full px-3 py-2 font-mono text-[9px]"
                    style={{
                      background:
                        'rgba(59,59,59,0.05)',
                      border:
                        '1px solid rgba(59,59,59,0.08)',
                      color: 'var(--graphite)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Experience
      ────────────────────────────────────────────────────────────── */}

      <div
        id="experience"
        className="border-t"
        style={{
          borderColor: 'rgba(59,59,59,0.08)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 sm:py-32">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
            {/* Heading */}
            <div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.3em]"
                style={{ color: 'var(--blue)' }}
              >
                Experience
              </span>

              <h3
                className="mt-4 font-serif font-light"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize:
                    'clamp(2.7rem, 10vw, 5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: 'var(--graphite)',
                }}
              >
                Building
                <br />
                <em>in the real world.</em>
              </h3>
            </div>

            {/* Experience */}
            <div>
              <div
                className="border-l-2 pl-6 sm:pl-8"
                style={{
                  borderColor:
                    'rgba(194,120,92,0.35)',
                }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: 'var(--clay)' }}
                  >
                    Jul 2024 — Present
                  </span>

                  <span
                    className="rounded-full px-3 py-1 font-mono text-[9px]"
                    style={{
                      background:
                        'rgba(59,59,59,0.05)',
                      color:
                        'var(--graphite-light)',
                    }}
                  >
                    Remote · Freelance
                  </span>
                </div>

                <h4
                  className="mt-4 min-w-0 font-serif text-3xl break-words sm:text-4xl"
                  style={{
                    fontFamily: 'Fraunces, serif',
                    color: 'var(--graphite)',
                  }}
                >
                  Full-Stack Engineer
                </h4>

                <p
                  className="mt-2 text-sm font-medium"
                  style={{
                    color: 'var(--graphite-light)',
                  }}
                >
                  Freelance
                </p>

                <p
                  className="mt-6 min-w-0 text-base leading-7 sm:leading-8"
                  style={{
                    color:
                      'var(--graphite-light)',
                  }}
                >
                  Building responsive websites, modern
                  web applications and full-stack products
                  for real-world use cases.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    'Develop responsive React and Next.js applications',
                    'Build backend APIs and data integrations',
                    'Create reusable UI components and responsive layouts',
                    'Integrate CMS platforms and third-party services',
                    'Use Git and GitHub for version control and collaboration',
                    'Deploy and maintain production web applications',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          background:
                            'var(--clay)',
                        }}
                      />

                      <span
                        className="text-sm leading-6"
                        style={{
                          color:
                            'var(--graphite-light)',
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Education + Availability
      ────────────────────────────────────────────────────────────── */}

      <div
        className="border-t"
        style={{
          borderColor: 'rgba(59,59,59,0.08)',
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
          <div className="grid min-w-0 gap-px overflow-hidden rounded-2xl border bg-black/5 md:grid-cols-2">
            {/* Education */}
            <div className="min-w-0 bg-parchment p-6 sm:p-10">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: 'var(--blue)' }}
              >
                Education
              </span>

              <h4
                className="mt-4 min-w-0 font-serif text-3xl break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--graphite)',
                }}
              >
                Computer &amp;
                <br />
                Information Sciences
              </h4>

              <p
                className="mt-3 text-sm"
                style={{
                  color:
                    'var(--graphite-light)',
                }}
              >
                University of the People
              </p>

              <p
                className="mt-2 font-mono text-[9px]"
                style={{
                  color:
                    'var(--graphite-light)',
                }}
              >
                2025 — 2030
              </p>
            </div>

            {/* Availability */}
            <div className="min-w-0 bg-parchment p-6 sm:p-10">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.25em]"
                style={{ color: 'var(--clay)' }}
              >
                Availability
              </span>

              <h4
                className="mt-4 min-w-0 font-serif text-3xl break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  color: 'var(--graphite)',
                }}
              >
                Open to
                <br />
                opportunities.
              </h4>

              <div className="mt-6 flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: '#28CA42',
                  }}
                />

                <span
                  className="text-sm"
                  style={{
                    color:
                      'var(--graphite-light)',
                  }}
                >
                  Remote · UK · US · Canada · Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small anchor */}
      <div
        id="contact"
        className="h-px"
        aria-hidden="true"
      />
    </section>
  );
};

export default AboutSection;