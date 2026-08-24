import React from 'react';

import type { Metadata, Viewport } from 'next';

import '../styles/tailwind.css';

import { JetBrains_Mono } from 'next/font/google';

import { site } from '@/config/portfolio';

/*
 * Apply the visitor's saved theme before first paint.
 * This prevents a flash when a theme has already been selected.
 */
const themeInit = `(function(){try{var t=localStorage.getItem('pf-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f0eb',
};

export const metadata: Metadata = {
metadataBase: new URL(
  'https://cemmanzy.vercel.app'
),
  title: {
    default: 'Emmanuel Chibuzor — Full-Stack Developer',
    template: '%s | Emmanuel Chibuzor',
  },

  description:
    'Emmanuel Chibuzor is a Full-Stack Developer building fast, scalable and production-ready web applications with React, Next.js, TypeScript and Node.js.',

  keywords: [
    'Emmanuel Chibuzor',
    'Full-Stack Developer',
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Node.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Remote Developer',
    'Remote Software Engineer',
    'Web Developer',
    'Nigeria Developer',
  ],

  authors: [
    {
      name: 'Emmanuel Chibuzor',
      url: 'https://www.linkedin.com/in/emmanuel-chibuzor-3651b6248/',
    },
  ],

  creator: 'Emmanuel Chibuzor',
  publisher: 'Emmanuel Chibuzor',

  applicationName: 'Emmanuel Chibuzor Portfolio',

  category: 'technology',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/assets/images/app_logo.png',
    shortcut: '/assets/images/app_logo.png',
    apple: '/assets/images/app_logo.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cemmanzy.vercel.app',
    siteName: 'Emmanuel Chibuzor Portfolio',
    title: 'Emmanuel Chibuzor — Full-Stack Developer',
    description:
      'Full-Stack Developer building fast, scalable and production-ready web applications with React, Next.js, TypeScript and Node.js.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Emmanuel Chibuzor — Full-Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Chibuzor — Full-Stack Developer',
    description:
      'Full-Stack Developer building fast, scalable and production-ready web applications.',
    images: ['/og-image.png'],
  },
};

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInit,
          }}
        />

        {children}
      </body>
    </html>
  );
}