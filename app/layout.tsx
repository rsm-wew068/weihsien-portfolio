import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Rachel Wang — People first. Then possibility.',
  description: 'Rachel Wang designs and builds AI products around user needs, frames testable hypotheses, and validates decisions through experimentation and analytics.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
