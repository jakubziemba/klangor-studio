import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Layout from './components/global/Layout';

const poppins = Poppins({ display: 'swap', subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'Klangor Studio',
  description: 'Klangor studio- biuro architektoniczne',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} relative`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
