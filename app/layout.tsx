import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Samson Olajide | Portfolio',
  description: 'Portfolio for Samson Olajide – showcasing product-minded engineering, UI craft, and shipped projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
