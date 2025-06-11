'use client';

import { Award, Users, Clock, Shield, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-50px' });

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

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-6 font-heading"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              About{' '}
              <span className="font-script text-blue-600 text-5xl">
                City Touch
              </span>{' '}
              Services
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              We are your trusted partner in London, dedicated to providing
              exceptional cleaning services, reliable errand assistance, and
              professional mobile barbing. Our mission is simple: to deliver
              sharp looks, clean spaces, and reliable errands that exceed your
              expectations.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-8 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              With years of experience serving London and surrounding areas,
              we've built our reputation on quality, reliability, and customer
              satisfaction. Every service we provide is backed by our commitment
              to excellence and attention to detail.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              ref={statsRef}
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? 'visible' : 'hidden'}
            >
              {[
                { number: '500+', label: 'Happy Customers' },
                { number: '5+', label: 'Years Experience' },
                { number: '24/7', label: 'Support Available' },
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
                    className="text-3xl font-bold text-blue-600 mb-2 font-heading"
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

            {/* Values */}
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              ref={valuesRef}
              variants={containerVariants}
              initial="hidden"
              animate={valuesInView ? 'visible' : 'hidden'}
            >
              {[
                {
                  icon: Award,
                  title: 'Quality',
                  desc: 'Exceptional standards in every service',
                  color: 'blue',
                },
                {
                  icon: Clock,
                  title: 'Reliability',
                  desc: 'On-time, every time',
                  color: 'purple',
                },
                {
                  icon: Heart,
                  title: 'Care',
                  desc: 'We care about your satisfaction',
                  color: 'green',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon
                      className={`h-8 w-8 text-${value.color}-600 mx-auto mb-3`}
                    />
                  </motion.div>
                  <h3 className="font-semibold mb-2 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-body">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional cleaning team"
                className="rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: 20, y: -20 }
              }
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ rotate: 45, scale: 1.1 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-lg -z-10"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: -20, y: 20 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ rotate: -45, scale: 1.1 }}
            />
          </motion.div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12 font-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Why Choose{' '}
            <span className="font-script text-blue-600 text-4xl">
              City Touch
            </span>{' '}
            Services?
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {[
              {
                icon: Shield,
                title: 'Insured & Bonded',
                desc: 'Complete peace of mind with full insurance coverage',
                gradient: 'from-blue-50 to-blue-100',
              },
              {
                icon: Users,
                title: 'Trained Professionals',
                desc: 'Skilled and experienced team members',
                gradient: 'from-purple-50 to-purple-100',
              },
              {
                icon: Star,
                title: '5-Star Service',
                desc: 'Consistently rated excellent by our customers',
                gradient: 'from-green-50 to-green-100',
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                desc: 'Services available 7 days a week',
                gradient: 'from-orange-50 to-orange-100',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`text-center p-6 bg-gradient-to-br ${item.gradient} rounded-lg group`}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                </motion.div>
                <h4 className="font-semibold mb-2 font-heading">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 font-body">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
