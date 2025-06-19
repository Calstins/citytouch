'use client';

import { Users, Award, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
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
                shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
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
                transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
              >
                About{' '}
                <span className="font-script  text-5xl text-yellow-300 md:text-7xl">
                  City Touch
                </span>{' '}
                Services
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl max-w-3xl mx-auto font-body"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Your trusted partner for professional cleaning, reliable
                errands, and mobile Hair Care
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 overflow-hidden" ref={storyRef}>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                initial="hidden"
                animate={storyInView ? 'visible' : 'hidden'}
              >
                <motion.h2
                  className="text-3xl font-bold mb-6 font-heading"
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                  }
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Our{' '}
                  <span className="font-script text-blue-600 text-4xl">
                    Story
                  </span>
                </motion.h2>
                <motion.p
                  className="text-gray-600 mb-6 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  City Touch Services was founded with a simple mission: to
                  provide exceptional, reliable services that make our
                  customers&apos; lives easier. We understand that in
                  today&apos;s fast-paced world, time is precious, and quality
                  matters.
                </motion.p>
                <motion.p
                  className="text-gray-600 mb-6 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  From our humble beginnings, we&apos;ve grown to become a
                  trusted name in London and surrounding areas, offering
                  comprehensive cleaning services, dependable errand running,
                  and professional mobile barbing.
                </motion.p>
                <motion.p
                  className="text-gray-600 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  Our commitment to excellence and attention to detail has
                  earned us the trust of countless customers who rely on us for
                  their daily needs.
                </motion.p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg"
                variants={slideInRight}
                initial="hidden"
                animate={storyInView ? 'visible' : 'hidden'}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-4 font-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Our{' '}
                  <span className="font-script text-blue-600 text-3xl">
                    Mission
                  </span>
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-6 font-body"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  To deliver sharp looks, clean spaces, and reliable errands
                  while building lasting relationships with our customers
                  through exceptional service and unwavering professionalism.
                </motion.p>
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate={storyInView ? 'visible' : 'hidden'}
                >
                  {[
                    { icon: Award, text: 'Quality Assured' },
                    { icon: Clock, text: 'Always On Time' },
                    { icon: Users, text: 'Customer First' },
                    { icon: MapPin, text: 'Local Experts' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center group"
                      variants={itemVariants}
                      whileHover={{ x: 5, scale: 1.05 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="h-5 w-5 text-blue-600 mr-2" />
                      </motion.div>
                      <span className="text-sm font-body">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50 overflow-hidden" ref={valuesRef}>
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                valuesInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
            >
              Our{' '}
              <span className="font-script text-blue-600 text-4xl">Values</span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={valuesInView ? 'visible' : 'hidden'}
            >
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description:
                    'We strive for perfection in every service we provide, ensuring the highest standards of quality.',
                  color: 'blue',
                  bgColor: 'bg-blue-100',
                },
                {
                  icon: Users,
                  title: 'Reliability',
                  description:
                    'You can count on us to be there when you need us, delivering consistent and dependable service.',
                  color: 'purple',
                  bgColor: 'bg-purple-100',
                },
                {
                  icon: Clock,
                  title: 'Efficiency',
                  description:
                    'We respect your time and work efficiently to complete tasks promptly without compromising quality.',
                  color: 'green',
                  bgColor: 'bg-green-100',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`${value.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-body">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 overflow-hidden" ref={statsRef}>
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                statsInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
            >
              Why Choose{' '}
              <span className="font-script text-blue-600 text-4xl">Us?</span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? 'visible' : 'hidden'}
            >
              {[
                { number: '5+', label: 'Years of Experience' },
                { number: '500+', label: 'Happy Customers' },
                { number: '24/7', label: 'Customer Support' },
                { number: '100%', label: 'Satisfaction Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={statsVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="text-4xl font-bold text-blue-600 mb-2 font-heading"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      statsInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-body">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
