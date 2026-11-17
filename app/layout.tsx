import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rachel Wang | Product-minded builder',
  description:
    'Rachel Wang designs and builds AI products around user needs, frames testable hypotheses, and validates decisions through experimentation and analytics.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Caveat:wght@700&family=Fraunces:ital,opsz,wght@1,9..144,600&family=JetBrains+Mono:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
