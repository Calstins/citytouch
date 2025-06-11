import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import StairEffect from '@/components/StairEffect';
import './globals.css';

export const metadata: Metadata = {
  title:
    'City Touch Services - Professional Cleaning, Errands & Mobile Barbing',
  description:
    'Professional cleaning services, reliable errands, and mobile barbing in London and surrounding areas. Sharp looks, clean spaces, reliable errands.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <StairEffect />
        <PageTransition>
          <Header />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
