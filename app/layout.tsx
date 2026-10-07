import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Rachel Wang — People first. Then possibility.',
  description: 'From design and psychology to marketing and analytics. Rachel Wang builds thoughtful AI products around the people who use them.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
