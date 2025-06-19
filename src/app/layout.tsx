import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import StairEffect from '@/components/StairEffect';
import './globals.css';
import WhatsAppChat from '@/components/WhatsAppChat';

export const metadata: Metadata = {
  title: 'City Touch Services - Professional Cleaning, Hair Care & Errands',
  description:
    'Professional cleaning services, expert unisex hair care, and reliable errands in London. Mobile hair styling, braiding, cuts for men & women around Liechester, London and its suburbs. Contact us for a free quote!',
  keywords: [
    'mobile hair stylist London',
    'hair braiding services',
    'mens grooming London',
    'womens hair styling',
    'unisex hair salon',
    'mobile hairdresser',
    'professional cleaning London',
    'errand services',
    'hair treatments',
    'protective hairstyles',
    'special occasion hair',
  ],
  icons: {
    icon: [
      '/favicon.svg',
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
  },
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
          <WhatsAppChat />
        </PageTransition>
      </body>
    </html>
  );
}
