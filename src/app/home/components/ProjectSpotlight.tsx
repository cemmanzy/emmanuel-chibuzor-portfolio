'use client';

import React, { useEffect, useRef, useState } from 'react';

const ProjectSpotlight: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technologies = [
    'Next.js',
    'TypeScript',
    'Sanity CMS',
    'Tailwind CSS',
    'SEO',
    'Responsive UI',
  ];

  const productFeatures = [
    {
      number: '01',
      title: 'Content platform',
      description:
        'Structured content management through Sanity CMS, allowing news stories and editorial content to be published and managed efficiently.',
    },
    {
      number: '02',
      title: 'News discovery',
      description:
        'Latest News, Trending News, Editor’s Pick, Most Read and category-based content help readers discover stories quickly.',
    },
    {
      number: '03',
      title: 'Rich media',
      description:
        'The platform supports rich editorial content and integrated live video experiences alongside written stories.',
    },
    {
      number: '04',
      title: 'Responsive experience',
      description:
        'Responsive layouts and reusable components provide a consistent reading experience across desktop and smaller screens.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      data-tour="work"
      className="relative w-full max-w-full overflow-x-clip bg-parchment"
    >
      {/* ─────────────────────────────────────────────────────────────
          Section introduction
      ────────────────────────────────────────────────────────────── */}

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-20 sm:px-8 sm:pb-20 sm:pt-32">
        <div
          className="min-w-0 max-w-4xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'translateY(0)'
              : 'translateY(35px)',
            transition:
              'opacity 0.8s ease, transform 0.8s cubic-bezier(0.25,1,0.5,1)',
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.3em]"
              style={{
                color: 'var(--blue)',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              Selected Work
            </span>

            <span
              className="h-px w-12"
              style={{
                background: 'var(--hair)',
              }}
            />

            <span
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{
                color: 'var(--graphite-light)',
              }}
            >
              01 / 01
            </span>
          </div>

          <h2
            className="mt-5 font-serif font-light"
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(2.85rem, 12vw, 7rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              color: 'var(--graphite)',
            }}
          >
            Products I&apos;ve
            <br />
            <em>built.</em>
          </h2>

          <p
            className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: 'var(--graphite-light)',
            }}
          >
            Real applications built from the ground up — from
            interface and content architecture to responsive
            experiences and production deployment.
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          Main project
      ────────────────────────────────────────────────────────────── */}

      <article
        className="border-y"
        style={{
          borderColor: 'rgba(59,59,59,0.08)',
          opacity: visible ? 1 : 0,
          transform: visible
            ? 'translateY(0)'
            : 'translateY(45px)',
          transition:
            'opacity 1s ease 0.15s, transform 1s cubic-bezier(0.25,1,0.5,1) 0.15s',
        }}
      >
        {/* Project heading */}
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-16">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: 'var(--clay)',
                  }}
                >
                  2026
                </span>

                <span
                  className="rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-wider"
                  style={{
                    background:
                      'rgba(40,202,66,0.08)',
                    border:
                      '1px solid rgba(40,202,66,0.15)',
                    color: '#218838',
                  }}
                >
                  Live Product
                </span>
              </div>

              <h3
                className="mt-4 min-w-0 font-serif font-light break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize: 'clamp(2.6rem, 11vw, 6rem)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  color: 'var(--graphite)',
                }}
              >
                Loudoga News
              </h3>

              <p
                className="mt-5 w-full max-w-3xl text-base leading-7 sm:text-lg sm:leading-8"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--graphite-light)',
                }}
              >
                A modern digital news platform built for
                fast content discovery, responsive reading,
                editorial publishing, and scalable content
                management.
              </p>
            </div>

            {/* Project links */}
            <div className="flex w-full flex-wrap gap-3 lg:w-auto lg:justify-end">
              <a
                href="https://loudoganews.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--graphite)',
                  color: 'var(--parchment)',
                }}
              >
                Visit live site

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <a
                href="https://github.com/cemmanzy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor:
                    'rgba(59,59,59,0.16)',
                  color: 'var(--graphite)',
                  background:
                    'rgba(255,255,255,0.35)',
                }}
              >
                GitHub

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338.92-.25 1.487-1.15 1.487-2.21 0-2.508-1.513-4.585-4.551-4.585-.912 0-1.84.168-2.612.476-.08-.195-.347-.987-.347-1.987 0 0 1.027-.33 3.363 1.255A11.69 11.69 0 0112 6.844c.85.004 1.705.115 2.504.337 2.331-1.585 3.356-1.255 3.356-1.255 0 1-.267 1.792-.347 1.987.76.284 1.37.74 1.82 1.257-.728-.727-1.21-1.752-1.21-2.906 0-2.18 1.766-3.95 3.943-3.95 1.1 0 2.097.464 2.795 1.207.997.091 1.936.355 2.814.64.16.404.25.83.25 1.27 0 2.5-1.514 4.572-4.54 4.572-.902 0-1.743-.263-2.45-.718.246.63.384 1.314.384 2.03 0 4.706-2.79 8.4-8.28 8.4-1.604 0-3.096-.468-4.35-1.274.224.026.455.04.69.04 1.325 0 2.55-.451 3.521-1.21-1.238-.024-2.28-.84-2.64-1.96.173.033.354.05.539.05.26 0 .512-.034.75-.102-1.292-.26-2.266-1.397-2.266-2.762v-.036c.38.21.817.337 1.282.351-.758-.507-1.257-1.374-1.257-2.356 0-.52.14-1.007.383-1.426 1.396 1.714 3.485 2.84 5.837 2.958-.049-.207-.074-.424-.074-.646 0-1.56 1.265-2.826 2.825-2.826.812 0 1.546.342 2.061.89.638-.126 1.24-.358 1.779-.68-.21.654-.653 1.204-1.23 1.552.566-.068 1.105-.218 1.608-.441-.376.56-.85 1.06-1.396 1.458z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            Primary screenshot
        ──────────────────────────────────────────────────────────── */}

        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div
            className="group relative w-full max-w-full overflow-hidden rounded-[1.25rem] sm:rounded-[2rem]"
            style={{
              background: '#f5f5f5',
              boxShadow:
                '0 35px 90px -45px rgba(0,0,0,0.35)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="relative z-10 flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4"
              style={{
                background:
                  'rgba(250,250,250,0.96)',
                borderBottom:
                  '1px solid rgba(59,59,59,0.08)',
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

              <div
                className="ml-2 flex-1 rounded-full px-4 py-2 font-mono text-[9px] sm:text-[10px]"
                style={{
                  background:
                    'rgba(59,59,59,0.06)',
                  color: 'var(--graphite-light)',
                }}
              >
                loudoganews.com
              </div>
            </div>

            {/* Screenshot */}
            <div
              className="relative overflow-hidden"
              style={{
                background: '#fff',
              }}
            >
              <img
                src="/projects/loudoga-home.png"
                alt="Loudoga News homepage"
                className="block h-auto max-w-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />

              {/* Image label */}
              <div
                className="absolute bottom-4 left-4 rounded-full px-4 py-2 backdrop-blur-md sm:bottom-6 sm:left-6"
                style={{
                  background:
                    'rgba(17,24,39,0.82)',
                  color: '#fff',
                }}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.15em]">
                  Production homepage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology row */}
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-14">
          <div className="flex min-w-0 flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full px-4 py-2 font-mono text-[9px] uppercase tracking-wider"
                style={{
                  background:
                    'rgba(62,124,166,0.065)',
                  border:
                    '1px solid rgba(62,124,166,0.12)',
                  color: 'var(--blue)',
                }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            Project explanation
        ──────────────────────────────────────────────────────────── */}

        <div className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-8 sm:pb-28">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
            {/* Left */}
            <div>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color: 'var(--clay)',
                }}
              >
                The project
              </span>

              <h4
                className="mt-4 min-w-0 font-serif font-light break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize:
                    'clamp(2.2rem, 4vw, 4rem)',
                  lineHeight: 1,
                  color: 'var(--graphite)',
                }}
              >
                From idea to
                <br />
                <em>working product.</em>
              </h4>
            </div>

            {/* Right */}
            <div>
              <p
                className="min-w-0 text-base leading-7 sm:leading-8"
                style={{
                  color: 'var(--graphite-light)',
                }}
              >
                Loudoga News is a full-stack digital
                publishing platform focused on delivering
                a clean, fast and engaging news-reading
                experience.
              </p>

              <p
                className="mt-6 min-w-0 text-base leading-7 sm:leading-8"
                style={{
                  color: 'var(--graphite-light)',
                }}
              >
                I built the application around a modern
                Next.js architecture and integrated Sanity
                CMS to handle structured editorial content.
                The interface uses reusable components,
                responsive layouts and SEO-focused page
                structures.
              </p>

              <p
                className="mt-6 min-w-0 text-base leading-7 sm:leading-8"
                style={{
                  color: 'var(--graphite-light)',
                }}
              >
                The result is a platform that brings
                together breaking news, category pages,
                trending stories, editorial selections,
                sports coverage, live media and content
                discovery in one experience.
              </p>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            Feature grid
        ──────────────────────────────────────────────────────────── */}

        <div
          className="border-t"
          style={{
            borderColor:
              'rgba(59,59,59,0.08)',
          }}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
            <div className="mb-10 flex min-w-0 flex-col items-start justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{
                    color: 'var(--blue)',
                  }}
                >
                  What I built
                </span>

                <h4
                  className="mt-3 min-w-0 font-serif font-light break-words"
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize:
                      'clamp(2.2rem, 4vw, 4rem)',
                    lineHeight: 1,
                    color: 'var(--graphite)',
                  }}
                >
                  Product features.
                </h4>
              </div>
            </div>

            <div className="grid min-w-0 gap-px overflow-hidden rounded-2xl border bg-black/5 md:grid-cols-2">
              {productFeatures.map((feature) => (
                <div
                  key={feature.number}
                  className="min-w-0 bg-parchment p-6 sm:p-9"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className="font-mono text-[10px] tracking-widest"
                      style={{
                        color: 'var(--clay)',
                      }}
                    >
                      {feature.number}
                    </span>

                    <span
                      className="h-px w-12"
                      style={{
                        background:
                          'var(--hair)',
                      }}
                    />
                  </div>

                  <h5
                    className="mt-8 font-serif text-2xl"
                    style={{
                      fontFamily:
                        'Fraunces, serif',
                      color: 'var(--graphite)',
                    }}
                  >
                    {feature.title}
                  </h5>

                  <p
                    className="mt-4 text-sm leading-7"
                    style={{
                      color:
                        'var(--graphite-light)',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────
            Supporting screenshots
        ──────────────────────────────────────────────────────────── */}

        <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-8 sm:pb-32 sm:pt-8">
          <div className="mb-10">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em]"
              style={{
                color: 'var(--blue)',
              }}
            >
              Inside the product
            </span>

            <h4
              className="mt-3 min-w-0 font-serif font-light break-words"
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize:
                  'clamp(2rem, 4vw, 3.5rem)',
                color: 'var(--graphite)',
              }}
            >
              More than a homepage.
            </h4>
          </div>

          <div className="grid min-w-0 gap-5 md:grid-cols-2">
            {/* Latest */}
            <div className="group min-w-0 overflow-hidden rounded-2xl border bg-white/40">
              <div className="overflow-hidden">
                <img
                  src="/projects/loudoga-latest.png"
                  alt="Loudoga News latest news section"
                  className="block h-auto max-w-full w-full transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>

              <div className="p-6">
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.2em]"
                  style={{
                    color: 'var(--clay)',
                  }}
                >
                  Content discovery
                </span>

                <h5
                  className="mt-2 font-serif text-2xl"
                  style={{
                    fontFamily:
                      'Fraunces, serif',
                    color: 'var(--graphite)',
                  }}
                >
                  Latest &amp; Most Read
                </h5>
              </div>
            </div>

            {/* Trending */}
            <div className="group min-w-0 overflow-hidden rounded-2xl border bg-white/40">
              <div className="overflow-hidden">
                <img
                  src="/projects/loudoga-trending.png"
                  alt="Loudoga News trending and editor's pick sections"
                  className="block h-auto max-w-full w-full transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>

              <div className="p-6">
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.2em]"
                  style={{
                    color: 'var(--clay)',
                  }}
                >
                  Editorial experience
                </span>

                <h5
                  className="mt-2 font-serif text-2xl"
                  style={{
                    fontFamily:
                      'Fraunces, serif',
                    color: 'var(--graphite)',
                  }}
                >
                  Trending &amp; Editor&apos;s Pick
                </h5>
              </div>
            </div>

            {/* Sports */}
            <div className="group min-w-0 overflow-hidden rounded-2xl border bg-white/40 md:col-span-2">
              <div className="overflow-hidden">
                <img
                  src="/projects/loudoga-sports.png"
                  alt="Loudoga News sports section"
                  className="block h-auto max-w-full w-full transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </div>

              <div className="grid min-w-0 gap-5 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
                <div>
                  <span
                    className="font-mono text-[9px] uppercase tracking-[0.2em]"
                    style={{
                      color: 'var(--clay)',
                    }}
                  >
                    Category experience
                  </span>

                  <h5
                    className="mt-2 font-serif text-2xl"
                    style={{
                      fontFamily:
                        'Fraunces, serif',
                      color: 'var(--graphite)',
                    }}
                  >
                    Dedicated sports coverage
                  </h5>
                </div>

                <span
                  className="font-mono text-[9px] uppercase tracking-wider"
                  style={{
                    color:
                      'var(--graphite-light)',
                  }}
                >
                  Responsive editorial layout
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ─────────────────────────────────────────────────────────────
          Closing CTA
      ────────────────────────────────────────────────────────────── */}

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-8 sm:pb-32">
        <div
          className="w-full max-w-full overflow-hidden rounded-[1.5rem] p-6 sm:rounded-[2rem] sm:p-12 lg:p-16"
          style={{
            background: 'var(--graphite)',
            color: 'var(--parchment)',
          }}
        >
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color:
                    'rgba(245,240,235,0.5)',
                }}
              >
                Want to build something?
              </span>

              <h3
                className="mt-4 min-w-0 font-serif font-light break-words"
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontSize:
                    'clamp(2.2rem, 5vw, 4.5rem)',
                  lineHeight: 1,
                }}
              >
                Let&apos;s turn your idea into a
                <em> real product.</em>
              </h3>

              <p
                className="mt-5 w-full max-w-xl text-sm leading-7 break-words"
                style={{
                  color:
                    'rgba(245,240,235,0.62)',
                }}
              >
                I&apos;m open to remote full-stack
                development opportunities, freelance
                projects and collaborations with teams
                building useful products.
              </p>
            </div>

            <a
              href="mailto:cemmanzy@gmail.com"
              className="inline-flex w-fit items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{
                background:
                  'var(--parchment)',
                color: 'var(--graphite)',
              }}
            >
              Start a conversation

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;