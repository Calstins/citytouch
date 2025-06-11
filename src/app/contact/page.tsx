'use client';

import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Contact() {
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const contactInView = useInView(contactRef, { once: true, margin: '-100px' });

  // State to control when animations should start
  const [animationsReady, setAnimationsReady] = useState(false);

  // Wait for page transition to complete before starting animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsReady(true);
    }, 1600); // Wait 1.6s for transition to complete

    return () => clearTimeout(timer);
  }, []);

  // Only animate when both conditions are met
  const shouldAnimate = heroInView && animationsReady;

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white pb-20 pt-48 overflow-hidden"
          ref={heroRef}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 100 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  shouldAnimate
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
              >
                Get In{' '}
                <span className="font-script text-yellow-300 text-5xl md:text-7xl">
                  Touch
                </span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mx-auto font-body"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Ready to experience our professional services? Contact us today!
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 overflow-hidden" ref={contactRef}>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate={contactInView ? 'visible' : 'hidden'}
              >
                <motion.h2
                  className="text-3xl font-bold mb-8 font-heading"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    contactInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Contact{' '}
                  <span className="font-script text-blue-600 text-4xl">
                    Information
                  </span>
                </motion.h2>
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={contactInView ? 'visible' : 'hidden'}
                >
                  {[
                    { icon: Phone, title: 'Phone', value: '07XXX XXXXXX' },
                    {
                      icon: Mail,
                      title: 'Email',
                      value: 'youremail@example.com',
                    },
                    {
                      icon: MapPin,
                      title: 'Service Area',
                      value: 'London & Surrounding Areas',
                    },
                    {
                      icon: Clock,
                      title: 'Hours',
                      value: '7 Days a Week, Flexible Hours',
                    },
                    {
                      icon: MessageCircle,
                      title: 'Social Media',
                      value: '@freshfixservices',
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center group"
                      variants={itemVariants}
                      whileHover={{ x: 10, scale: 1.02 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.3 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon className="h-6 w-6 text-blue-600 mr-4" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold font-heading">
                          {contact.title}
                        </h3>
                        <p className="text-gray-600 font-body">
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quick Info */}
                <motion.div
                  className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    contactInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.h3
                    className="text-xl font-semibold mb-4 font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      contactInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    Quick{' '}
                    <span className="font-script text-blue-600 text-2xl">
                      Response
                    </span>
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-4 font-body"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      contactInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    We typically respond to all inquiries within 2 hours during
                    business hours. For urgent requests, please call us
                    directly.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={contactInView ? 'visible' : 'hidden'}
                  >
                    {[
                      { text: 'Same Day Service', color: 'blue' },
                      { text: 'Free Quotes', color: 'purple' },
                      { text: 'Insured & Bonded', color: 'green' },
                    ].map((badge, index) => (
                      <motion.span
                        key={index}
                        className={`px-3 py-1 bg-${badge.color}-100 text-${badge.color}-800 rounded-full text-sm font-body`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {badge.text}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={slideInRight}
                initial="hidden"
                animate={contactInView ? 'visible' : 'hidden'}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
