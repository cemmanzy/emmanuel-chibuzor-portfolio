import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';
import { JetBrains_Mono } from 'next/font/google';
import { site, defaultTheme } from '@/config/portfolio';

// Applies the saved theme (or the configured default) before first paint, so
// there's no flash of the wrong theme. Runs synchronously as the first thing in
// <body>. The in-app tour writes the same `pf-theme` localStorage key.
const themeInit = `(function(){try{var t=localStorage.getItem('pf-theme')||'${defaultTheme}';if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: [{ url: site.logo, type: 'image/x-icon' }],
  },
};

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrains.className}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
