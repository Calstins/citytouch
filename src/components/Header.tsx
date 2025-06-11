'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    transparent: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0)',
    },
    solid: {
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
  };

  const textVariants = {
    light: { color: '#ffffff' },
    dark: { color: '#adcaf7' },
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 transition-all duration-300"
      variants={headerVariants}
      animate={isScrolled ? 'solid' : 'transparent'}
      initial="transparent"
    >
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex justify-between items-center py-2 text-sm border-b border-white/20"
            >
              <div className="flex items-center space-x-4 text-white font-body">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-blue-400 mr-2" />
                  <Link href="tel:+447786347537" className="mr-2">
                    +44 7786 347537{' '}
                  </Link>
                  <Link href="tel:`+4478455621130">+44 0745 5621130</Link>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-blue-400 mr-2" />
                  <Link href="mailto:citytouchservices@gmail.com">
                    citytouchservices@gmail.com
                  </Link>
                </div>
              </div>
              <div className="text-white/80 font-body">
                Serving Leicester, London & Other Surrounding Areas
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <motion.div
            variants={textVariants}
            animate={isScrolled ? 'dark' : 'light'}
          >
            <Link href="/" className="text-2xl font-bold font-heading">
              <Image
                src="/citytouch_logo.jpeg"
                alt="Logo"
                className="object-cover h-[75px] w-[150px] rounded-lg"
                height={300}
                width={750}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={
                  isScrolled
                    ? { ...{ opacity: 1, y: 0 }, ...textVariants.dark }
                    : { ...{ opacity: 1, y: 0 }, ...textVariants.light }
                }
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors font-body font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-body font-medium"
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={textVariants}
            animate={isScrolled ? 'dark' : 'light'}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 border-t border-white/20 bg-slate-900/95 p-10"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-white hover:text-blue-400 transition-colors block font-body"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center block font-body"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
