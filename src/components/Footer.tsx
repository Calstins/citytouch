'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { PiTiktokLogo } from 'react-icons/pi';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold mb-4 font-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              City Touch{' '}
              <span className="font-script text-blue-400">Services</span>
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Professional cleaning, mobile barbing, and errand services in
              London and surrounding areas. Sharp looks, clean spaces, reliable
              errands.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="https://www.instagram.com/citytouch_services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <PiTiktokLogo className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact'].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        href={
                          item === 'Home'
                            ? '/'
                            : `/${item.toLowerCase().replace(' ', '')}`
                        }
                        className="text-gray-300 hover:text-white transition-colors font-body"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                'House Cleaning',
                'Office Cleaning',
                'Mobile Barbing',
                'Errand Services',
                'Carpet Cleaning',
                'Window Washing',
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors font-body"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 font-heading">
              Contact Info
            </h4>
            <motion.div
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {[
                {
                  icon: Phone,
                  text: '<a href="tel:+447786347537"> +44 7786 347537</a>, <a href="tel:+447455621130">+44 0745 5621130</a>',
                },
                {
                  icon: Mail,
                  text: '<a href="mailto:citytouchservices@gmail.com">citytouchservices@gmail.com</a>',
                },
                { icon: MapPin, text: '2, Curzon Road, Leicester' },
                {
                  icon: Instagram,
                  text: '<a href="https://www.instagram.com/citytouch_services" target="_blank" rel="noopener noreferrer">@Citytouch_services</a>',
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="h-5 w-5 mr-3 text-blue-400" />
                  </motion.div>
                  <span
                    className="text-gray-300 font-body"
                    dangerouslySetInnerHTML={{ __html: contact.text }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:shadow-lg font-body"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0 font-body"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              © 2025 City Touch Services. All rights reserved.
            </motion.p>
            <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0 font-body"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Crafted with <span className="text-red-500">♥</span> by{' '}
              <Link
                href="https://calstechdigital.com"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Calstech Digital
              </Link>
            </motion.p>
            <motion.div
              className="flex space-x-6 text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors font-body"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
