import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@mui/material';

import NavBar from '../components/navbar/NavBar';

// eslint-disable-next-line import/extensions
import theme from '@/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travio',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/default-logo.svg" type="image/svg" />
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: '0 100px' }}>
          <NavBar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
