'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { person, social } from '@/config/portfolio';

/* ────────────────────────────────────────────────────────────────────────────
 * Desktop vignette 1 — Build
 * ────────────────────────────────────────────────────────────────────────── */

const BuildVignette: React.FC<{ active: boolean }> = ({
  active,
}) => {
  const lines = [
    { type: 'prompt', text: '~/emmanuel' },
    { type: 'command', text: 'npm run build' },
    { type: 'output', text: '✓ Compiled successfully' },
    { type: 'output', text: '✓ TypeScript checks passed' },
    { type: 'output', text: '✓ Production build ready' },
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
  let interval: number | undefined;

  const kickoff = window.setTimeout(() => {
    setVisibleLines(0);

    if (!active) return;

    let i = 0;

    interval = window.setInterval(() => {
      i += 1;
      setVisibleLines(i);

      if (i >= lines.length) {
        if (interval !== undefined) {
          window.clearInterval(interval);
        }
      }
    }, 220);
  }, 0);

  return () => {
    window.clearTimeout(kickoff);

    if (interval !== undefined) {
      window.clearInterval(interval);
    }
  };
}, [active, lines.length]);

  return (
    <div className="w-full max-w-2xl">
      <div
        className="overflow-hidden rounded-2xl"
        style={{
          background: '#20242A',
          boxShadow:
            '0 30px 80px -35px rgba(0,0,0,0.35)',
        }}
      >
        <div
          className="flex items-center px-5 py-4"
          style={{
            background: '#292E35',
            borderBottom:
              '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: '#FF5F57' }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: '#FFBD2E' }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: '#28CA42' }}
            />
          </div>

          <span
            className="ml-4 font-mono text-[10px]"
            style={{
              color: '#8B949E',
              fontFamily:
                'JetBrains Mono, monospace',
            }}
          >
            ~/emmanuel — production
          </span>
        </div>

        <div
          className="min-h-[260px] p-6 sm:p-8"
          style={{
            fontFamily:
              'JetBrains Mono, monospace',
            fontSize: '12px',
          }}
        >
          {lines
            .slice(0, visibleLines)
            .map((line, index) => (
              <div
                key={index}
                className="mb-3 flex gap-3"
              >
                {line.type === 'prompt' && (
                  <>
                    <span
                      style={{ color: '#7EE787' }}
                    >
                      ❯
                    </span>

                    <span
                      style={{
                        color: '#A5D6FF',
                      }}
                    >
                      {line.text}
                    </span>
                  </>
                )}

                {line.type === 'command' && (
                  <>
                    <span
                      style={{ color: '#7EE787' }}
                    >
                      ❯
                    </span>

                    <span
                      style={{
                        color: '#F0F6FC',
                      }}
                    >
                      {line.text}
                    </span>
                  </>
                )}

                {line.type === 'output' && (
                  <>
                    <span
                      style={{ color: '#7EE787' }}
                    >
                      ✓
                    </span>

                    <span
                      style={{
                        color: '#C9D1D9',
                      }}
                    >
                      {line.text.replace(
                        '✓ ',
                        '',
                      )}
                    </span>
                  </>
                )}
              </div>
            ))}

          {visibleLines < lines.length &&
            active && (
              <span
                className="inline-block h-4 w-2 animate-pulse"
                style={{
                  background: '#7EE787',
                }}
              />
            )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
        ].map((item) => (
          <span
            key={item}
            className="rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider"
            style={{
              color: 'var(--blue)',
              background:
                'rgba(62,124,166,0.07)',
              border:
                '1px solid rgba(62,124,166,0.12)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
 * Desktop vignette 2 — Stack
 * ────────────────────────────────────────────────────────────────────────── */

const StackVignette: React.FC<{ active: boolean }> = ({
  active,
}) => {
  const stack = [
    {
      category: 'Frontend',
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      technologies: [
        'Node.js',
        'Express.js',
        'REST APIs',
      ],
    },
    {
      category: 'Data',
      technologies: [
        'MongoDB',
        'Sanity CMS',
      ],
    },
    {
      category: 'Tools',
      technologies: [
        'Git',
        'GitHub',
        'Vercel',
      ],
    },
  ];

  return (
    <div
      className="w-full max-w-2xl"
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? 'translateY(0)'
          : 'translateY(20px)',
        transition:
          'opacity 0.7s ease, transform 0.7s cubic-bezier(0.25,1,0.5,1)',
      }}
    >
      <div className="mb-8">
        <span
          className="font-mono text-[10px] uppercase tracking-[0.3em]"
          style={{ color: 'var(--blue)' }}
        >
          My toolkit
        </span>

        <h2
          className="mt-3 font-serif font-light"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize:
              'clamp(2.2rem, 5vw, 4.5rem)',
            lineHeight: 1,
            color: 'var(--graphite)',
          }}
        >
          Built across
          <br />
          <em>the stack.</em>
        </h2>
      </div>

      <div
        className="overflow-hidden rounded-2xl"
        style={{
          background:
            'rgba(255,255,255,0.45)',
          border:
            '1px solid rgba(59,59,59,0.08)',
        }}
      >
        {stack.map((group, index) => (
          <div
            key={group.category}
            className="p-5 sm:p-6"
            style={{
              borderBottom:
                index !== stack.length - 1
                  ? '1px solid rgba(59,59,59,0.08)'
                  : undefined,
            }}
          >
            <div
              className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em]"
              style={{
                color: 'var(--clay)',
              }}
            >
              {group.category}
            </div>

            <div className="flex flex-wrap gap-2">
              {group.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-lg px-3 py-2 text-xs font-medium"
                    style={{
                      background:
                        'rgba(59,59,59,0.045)',
                      color:
                        'var(--graphite)',
                    }}
                  >
                    {technology}
                  </span>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
 * Desktop vignette 3 — Approach
 * ────────────────────────────────────────────────────────────────────────── */

const AboutVignette: React.FC<{ active: boolean }> = ({
  active,
}) => {
  return (
    <div
      className="w-full max-w-2xl"
      style={{
        opacity: active ? 1 : 0,
        transform: active
          ? 'translateY(0)'
          : 'translateY(20px)',
        transition:
          'opacity 0.7s ease, transform 0.7s cubic-bezier(0.25,1,0.5,1)',
      }}
    >
      <span
        className="font-mono text-[10px] uppercase tracking-[0.3em]"
        style={{ color: 'var(--blue)' }}
      >
        A little about me
      </span>

      <p
        className="mt-6 font-serif font-light leading-[1.08]"
        style={{
          fontFamily: 'Fraunces, serif',
          fontSize:
            'clamp(2rem, 4.5vw, 4rem)',
          color: 'var(--graphite)',
        }}
      >
        I turn ideas into{' '}
        <em style={{ color: 'var(--clay)' }}>
          useful products.
        </em>
      </p>

      <p
        className="mt-7 max-w-xl text-base leading-8"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          color: 'var(--graphite-light)',
        }}
      >
        I work across the frontend and backend
        to build modern web applications that
        are fast, responsive, maintainable, and
        ready for real users.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#work"
          className="rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          style={{
            background: 'var(--graphite)',
            color: 'var(--parchment)',
          }}
        >
          View my work →
        </a>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
          style={{
            borderColor:
              'rgba(59,59,59,0.15)',
            color: 'var(--graphite)',
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
 * Mobile hero content
 * ────────────────────────────────────────────────────────────────────────── */

const MobileHero: React.FC = () => {
  return (
    <div className="px-5 pb-14 pt-28">
      <div className="mx-auto max-w-xl">
        <div className="mb-4">
          <span
            className="font-mono text-[9px] uppercase tracking-[0.28em]"
            style={{ color: 'var(--clay)' }}
          >
            {person.role}
          </span>
        </div>

        <h1
          className="font-serif font-light"
          style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(3.5rem, 15vw, 5.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: 'var(--graphite)',
          }}
        >
          Emmanuel
          <br />
          <em>Chibuzor</em>
        </h1>

        <div
          className="my-6 h-px w-14"
          style={{ background: 'var(--clay)' }}
        />

        <p
          className="max-w-md text-[15px] leading-7"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--graphite-light)',
          }}
        >
          I build fast, scalable web applications
          and digital products that turn ideas into
          reliable experiences for real users.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <a
            href="#work"
            className="rounded-full px-5 py-3 text-sm font-medium"
            style={{
              background: 'var(--graphite)',
              color: 'var(--parchment)',
            }}
          >
            View my work →
          </a>

          <a
            href="mailto:cemmanzy@gmail.com"
            className="rounded-full border px-5 py-3 text-sm font-medium"
            style={{
              borderColor:
                'rgba(59,59,59,0.15)',
              color: 'var(--graphite)',
            }}
          >
            Let&apos;s talk
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {person.skills.map((skill) => (
            <span
              key={skill}
              className="tag-pill"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3">
          <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{
                background: '#28CA42',
              }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{
                background: '#28CA42',
              }}
            />
          </span>

          <span
            className="font-mono text-[9px] leading-5"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            Available for remote opportunities
            <br />
            {person.location}
          </span>
        </div>

        <div className="mt-6 flex gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] uppercase tracking-wider"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            GitHub
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] uppercase tracking-wider"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Mobile build card */}
      <div className="mx-auto mt-12 max-w-xl">
        <BuildVignette active />
      </div>

      {/* Mobile mini workflow cards */}
      <div className="mx-auto mt-10 grid max-w-xl gap-4">
        <div
          className="rounded-2xl p-5"
          style={{
            background:
              'rgba(255,255,255,0.45)',
            border:
              '1px solid rgba(59,59,59,0.08)',
          }}
        >
          <span
            className="font-mono text-[9px] uppercase tracking-[0.22em]"
            style={{ color: 'var(--blue)' }}
          >
            My toolkit
          </span>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'Sanity',
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg px-3 py-2 text-xs font-medium"
                style={{
                  background:
                    'rgba(59,59,59,0.045)',
                  color:
                    'var(--graphite)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-5"
          style={{
            background:
              'rgba(194,120,92,0.05)',
            border:
              '1px solid rgba(194,120,92,0.12)',
          }}
        >
          <span
            className="font-mono text-[9px] uppercase tracking-[0.22em]"
            style={{ color: 'var(--clay)' }}
          >
            Approach
          </span>

          <p
            className="mt-3 text-sm leading-7"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            Clean interfaces. Maintainable code.
            Responsive experiences. Real products
            for real users.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────────────────────
 * Main hero
 * ────────────────────────────────────────────────────────────────────────── */

const HeroSection: React.FC = () => {
  const [activeVignette, setActiveVignette] =
    useState(0);

  const lockRef = useRef(true);
  const deltaRef = useRef(0);
  const activeRef = useRef(0);

  const threshold = 120;
  const totalVignettes = 3;

  const advance = useCallback(
    (direction: number) => {
      const next =
        activeRef.current + direction;

      if (next < 0) {
        deltaRef.current = 0;
        return;
      }

      if (next >= totalVignettes) {
        lockRef.current = false;
        deltaRef.current = 0;

        window.scrollBy({
          top: 100,
          behavior: 'smooth',
        });

        return;
      }

      activeRef.current = next;
      setActiveVignette(next);
      deltaRef.current = 0;
    },
    [],
  );

  /*
   * Only enable wheel locking on pointer devices.
   * Mobile/touch devices use the normal page flow.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(pointer: fine) and (min-width: 768px)',
    );

    const setupWheel = () => {
      if (!mediaQuery.matches) return;

      lockRef.current = true;

      const handleWheel = (
        event: WheelEvent,
      ) => {
        if (!lockRef.current) return;

        event.preventDefault();

        deltaRef.current += event.deltaY;

        if (
          deltaRef.current >= threshold
        ) {
          advance(1);
        } else if (
          deltaRef.current <= -threshold
        ) {
          advance(-1);
        }
      };

      window.addEventListener(
        'wheel',
        handleWheel,
        { passive: false },
      );

      return () => {
        window.removeEventListener(
          'wheel',
          handleWheel,
        );
      };
    };

    const cleanup = setupWheel();

    const handleMediaChange = () => {
      if (!mediaQuery.matches) {
        lockRef.current = false;
      }
    };

    mediaQuery.addEventListener(
      'change',
      handleMediaChange,
    );

    return () => {
      cleanup?.();

      mediaQuery.removeEventListener(
        'change',
        handleMediaChange,
      );
    };
  }, [advance]);

  return (
    <section
      id="home"
      data-tour="hero"
      className="relative bg-parchment"
    >
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileHero />
      </div>

      {/* Desktop */}
      <div
        className="relative hidden h-[calc(100vh-72px)] min-h-[700px] md:flex"
        style={{ paddingTop: '0.5rem' }}
      >
        {/* Background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, rgba(110,140,160,0.055) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(194,120,92,0.055) 0%, transparent 50%)',
          }}
        />

        {/* Left */}
        <div
          className="relative flex-[6] overflow-hidden"
          data-tour="hero-stage"
        >
          <div
            className={`vignette-panel ${
              activeVignette === 0
                ? 'active'
                : activeVignette > 0
                  ? 'exiting'
                  : ''
            }`}
          >
            <BuildVignette active />
          </div>

          <div
            className={`vignette-panel ${
              activeVignette === 1
                ? 'active'
                : ''
            }`}
          >
            <StackVignette
              active={
                activeVignette === 1
              }
            />
          </div>

          <div
            className={`vignette-panel ${
              activeVignette === 2
                ? 'active'
                : ''
            }`}
          >
            <AboutVignette
              active={
                activeVignette === 2
              }
            />
          </div>

          {/* Progress */}
          <div className="vignette-progress">
            <div className="flex items-center gap-3">
              <div className="progress-dots">
                {[0, 1, 2].map(
                  (index) => (
                    <button
                      key={index}
                      type="button"
                      className={`progress-dot ${
                        activeVignette ===
                        index
                          ? 'active'
                          : ''
                      }`}
                      onClick={() => {
                        activeRef.current =
                          index;
                        setActiveVignette(
                          index,
                        );
                        deltaRef.current = 0;
                      }}
                      aria-label={`Go to ${
                        index + 1
                      }`}
                    />
                  ),
                )}
              </div>

              <span
                className="font-mono text-[10px] uppercase tracking-wider"
                style={{
                  color:
                    'var(--graphite-light)',
                }}
              >
                {
                  [
                    'production',
                    'technologies',
                    'philosophy',
                  ][activeVignette]
                }
              </span>
            </div>

            <div
              className="mt-2 flex items-center gap-2"
              style={{ opacity: 0.45 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>

              <span className="font-mono text-[10px] uppercase tracking-wider">
                Scroll to explore
              </span>
            </div>
          </div>

          <div className="absolute left-10 top-8">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: 'var(--blue)' }}
            >
              {String(
                activeVignette + 1,
              ).padStart(2, '0')}{' '}
              / 03 —{' '}
              {
                ['Build', 'Stack', 'Approach'][
                  activeVignette
                ]
              }
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-px self-stretch"
          style={{
            background: 'var(--hair)',
          }}
        />

        {/* Right */}
        <div
          className="name-spine flex-[4] px-10"
          data-tour="hero-name"
        >
          <div className="mb-4">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{
                color: 'var(--clay)',
              }}
            >
              {person.role}
            </span>
          </div>

          <h1
            className="font-serif font-light"
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize:
                'clamp(3.5rem, 5.5vw, 5.8rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              color: 'var(--graphite)',
            }}
          >
            Emmanuel
            <br />
            <em>Chibuzor</em>
          </h1>

          <div
            className="my-6 h-px w-14"
            style={{
              background:
                'var(--clay)',
            }}
          />

          <p
            className="max-w-sm text-sm leading-7"
            style={{
              color:
                'var(--graphite-light)',
            }}
          >
            I build fast, scalable web
            applications and digital products
            that turn ideas into reliable
            experiences for real users.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="#work"
              className="rounded-full px-5 py-3 text-xs font-medium transition-transform hover:-translate-y-0.5"
              style={{
                background:
                  'var(--graphite)',
                color:
                  'var(--parchment)',
              }}
            >
              View my work →
            </a>

            <a
              href="mailto:cemmanzy@gmail.com"
              className="rounded-full border px-5 py-3 text-xs font-medium transition-transform hover:-translate-y-0.5"
              style={{
                borderColor:
                  'rgba(59,59,59,0.15)',
                color:
                  'var(--graphite)',
              }}
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {person.skills.map(
              (skill) => (
                <span
                  key={skill}
                  className="tag-pill"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <div className="mt-8 flex items-start gap-3">
            <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
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
              className="font-mono text-[10px] leading-5"
              style={{
                color:
                  'var(--graphite-light)',
              }}
            >
              Available for remote
              opportunities
              <br />
              {person.location}
            </span>
          </div>

          <div className="mt-6 flex gap-5">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider transition-opacity hover:opacity-60"
              style={{
                color:
                  'var(--graphite-light)',
              }}
            >
              GitHub
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider transition-opacity hover:opacity-60"
              style={{
                color:
                  'var(--graphite-light)',
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;