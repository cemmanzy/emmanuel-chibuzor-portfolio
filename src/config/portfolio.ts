/* ============================================================================
 *  portfolio.ts — Emmanuel Chibuzor Portfolio
 * ----------------------------------------------------------------------------
 *  Main content configuration for the portfolio.
 * ========================================================================== */

/* ── 1. Site / SEO ───────────────────────────────────────────────────────── */

export const site = {
  brand: 'Emmanuel',
  title: 'Emmanuel Chibuzor — Full-Stack Developer',
  description:
    'Emmanuel Chibuzor is a Full-Stack Developer building fast, scalable and production-ready web applications with React, Next.js, TypeScript and Node.js.',
  logo: '/assets/images/app_logo.png',
};

/* ── 2. Person ───────────────────────────────────────────────────────────── */

export const person = {
  firstName: 'Emmanuel',
  lastName: 'Uchendu',
  role: 'Full-Stack Developer',
  bio: 'I build fast, scalable web applications and digital products that turn ideas into reliable experiences for real users.',
  location: 'Lagos, Nigeria',
  availability: 'Open to remote opportunities worldwide',
  resumeUrl: 'assets/resume/resume.pdf',

  skills: [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
  ],
};

/* ── 3. Social links ─────────────────────────────────────────────────────── */

export const social = {
  githubUsername: 'cemmanzy',
  github: 'https://github.com/cemmanzy',
  twitter: 'https://x.com/Manzyfi',
  linkedin: 'https://www.linkedin.com/in/emmanuel-chibuzor-3651b6248/',
  email: 'mailto:cemmanzy@gmail.com',
};

/* ── 4. Hero ─────────────────────────────────────────────────────────────── */

export const hero = {
  terminalTitle: `~/emmanuel — developer`,
  terminalPrompt: `~/emmanuel`,
  terminalCommand: 'npm run build',

  terminalCommits: [
    'feat: build production-ready web applications',
    'feat: develop Loudoga News with Next.js',
    'feat: integrate Sanity CMS for content management',
    'feat: build responsive React interfaces',
    'feat: develop full-stack web applications',
  ],

  diagram: {
    label: 'stack // full-stack web development',
    caption:
      'From idea to production — frontend, backend, data and content working together.',

    nodes: [
      {
        x: 30,
        y: 110,
        label: 'Frontend',
        sub: 'React / Next.js',
      },
      {
        x: 210,
        y: 50,
        label: 'Application',
        sub: 'TypeScript',
      },
      {
        x: 210,
        y: 170,
        label: 'Backend',
        sub: 'Node.js / Express',
      },
      {
        x: 390,
        y: 50,
        label: 'Database',
        sub: 'MongoDB',
      },
      {
        x: 390,
        y: 170,
        label: 'CMS',
        sub: 'Sanity',
      },
    ],

    arrows: [
      {
        d: 'M 130 132 C 170 132 170 72 210 72',
        delay: '0.6s',
      },
      {
        d: 'M 130 132 C 170 132 170 192 210 192',
        delay: '0.8s',
      },
      {
        d: 'M 310 72 L 390 72',
        delay: '1.0s',
      },
      {
        d: 'M 310 192 L 390 192',
        delay: '1.2s',
      },
      {
        d: 'M 260 94 L 260 170',
        delay: '1.4s',
      },
    ],

    annotations: [
      {
        x: 155,
        y: 100,
        text: 'UI',
        delay: '1.2s',
      },
      {
        x: 155,
        y: 200,
        text: 'API',
        delay: '1.3s',
      },
      {
        x: 330,
        y: 65,
        text: 'data',
        delay: '1.4s',
      },
      {
        x: 330,
        y: 185,
        text: 'content',
        delay: '1.5s',
      },
    ],
  },

  quote: {
    text:
      'I enjoy turning ideas into useful products — from responsive interfaces to the backend systems that make them work.',
    name: 'Emmanuel Chibuzor',
    title: 'Full-Stack Developer',
    avatar: '',
  },
};

/* ── 5. Projects ("Selected Work") ───────────────────────────────────────── */

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  tags: string[];
  annotation: string;
  year: string;
  embed: 'code' | 'cli' | 'metrics';
  repoUrl: string;
  reversed?: boolean;
}

export const projects: Project[] = [
  {
    id: 'loudoga-news',
    number: '01',
    title: 'Loudoga News',
    tagline:
      'A modern news platform built for fast content discovery, responsive reading, SEO, and scalable content management.',
    tags: [
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'Tailwind CSS',
      'SEO',
    ],
    annotation: `I built Loudoga News as a modern content platform focused on delivering a clean and responsive reading experience.

The application uses Next.js for the frontend and application architecture, Sanity CMS for structured content management, and Tailwind CSS for responsive UI development.

The project brings together dynamic news content, reusable components, SEO-focused pages, responsive layouts, and a production-ready deployment workflow.`,
    year: '2026',
    embed: 'code',
    repoUrl: 'https://github.com/cemmanzy/loudoga-news-v2',
    reversed: false,
  },
];

/* ── 6. Technical Writing ────────────────────────────────────────────────── */

/*
 * We are intentionally keeping this empty for now.
 *
 * We will add this section later when you have genuine technical articles,
 * engineering write-ups, or LinkedIn posts worth showcasing.
 */

export interface Essay {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  date: string;
  href: string;
  rotate: string;
  translateY: string;
  color: string;
}

export const essaysMeta = {
  eyebrow: 'Writing',
  heading: 'Ideas, lessons & things I build',
  intro:
    'Technical notes and lessons from building modern web applications.',
  allLabel: '',
  allHref: '#',
};

export const essays: Essay[] = [];

/* ── 7. Testimonials ─────────────────────────────────────────────────────── */

/*
 * No fabricated testimonials.
 *
 * Once you have genuine feedback from clients, teammates, or collaborators,
 * we can add them here with their permission and real details.
 */

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  linkedin: string;
  avatar: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I enjoy building practical digital products that solve real problems and create a better experience for users.',
    name: 'Emmanuel Chibuzor',
    title: 'Full-Stack Developer',
    company: 'Independent Developer',
    linkedin: 'https://www.linkedin.com/in/emmanuel-chibuzor-3651b6248/',
    avatar: '',
    context: 'Building in public',
  },
];

/* ── 8. Navigation ───────────────────────────────────────────────────────── */

export const nav = {
  links: [
    {
      label: 'Work',
      href: '#work',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ],
};

/* ── 9. Themes ───────────────────────────────────────────────────────────── */

export interface Theme {
  key: string;
  label: string;
  swatch: [string, string, string];
}

export const themes: Theme[] = [
  {
    key: 'parchment',
    label: 'Parchment',
    swatch: ['#f5f0eb', '#3b3b3b', '#c2785c'],
  },
  {
    key: 'slate',
    label: 'Slate',
    swatch: ['#edf0f4', '#26313b', '#3e7ca6'],
  },
  {
    key: 'sage',
    label: 'Sage',
    swatch: ['#eef1e7', '#2e3a2b', '#5b8c5a'],
  },
  {
    key: 'ocean',
    label: 'Ocean',
    swatch: ['#eaf2f2', '#1e3838', '#2e8c8c'],
  },
  {
    key: 'rose',
    label: 'Rose',
    swatch: ['#fbf0f1', '#3e2b2e', '#c25c7a'],
  },
  {
    key: 'dusk',
    label: 'Dusk',
    swatch: ['#f1eff7', '#2f2a3d', '#b06cc2'],
  },
  {
    key: 'mono',
    label: 'Mono',
    swatch: ['#f4f4f3', '#2b2b2b', '#222222'],
  },
  {
    key: 'midnight',
    label: 'Midnight',
    swatch: ['#1b1f24', '#e7e3dc', '#d08a5e'],
  },
  {
    key: 'ember',
    label: 'Ember',
    swatch: ['#241c18', '#ede2d8', '#e0794e'],
  },
];