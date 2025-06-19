'use client';

import {
  Sparkles,
  Car,
  Scissors,
  Home,
  Building,
  Package,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: <Sparkles className="h-12 w-12 text-blue-600" />,
      title: 'Professional Cleaning',
      description:
        'Comprehensive cleaning services for homes and offices. From regular maintenance to deep cleaning, we ensure your spaces are spotless.',
      features: [
        'House Cleaning',
        'Office Cleaning',
        'Carpet Cleaning',
        'Window Washing',
      ],
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: <Scissors className="h-12 w-12 text-purple-600" />,
      title: 'Mobile Hair Care Services',
      description:
        'Professional unisex hair treatments and styling at your location',
      features: [
        "Men's haircuts & beard grooming",
        "Women's cuts & styling",
        'Hair braiding & protective styles',
        'Hair treatments & conditioning',
        'Special occasion styling',
        'Bridal & event hair services',
      ],
      image:
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // Woman braiding hair
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: <Car className="h-12 w-12 text-green-600" />,
      title: 'Errand Services',
      description:
        'Local and reliable errand running to save you time. We handle your daily tasks so you can focus on what matters most.',
      features: [
        'Shopping & Deliveries',
        'Document Collection',
        'Appointment Scheduling',
        'Personal Assistance',
      ],
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-green-500 to-green-700',
    },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
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
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, type: 'spring' }}
          >
            Our{' '}
            <span className="font-script text-blue-600 text-5xl">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Sharp Looks. Clean Spaces. Reliable Errands. We provide
            comprehensive services to make your life easier.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden service-card group cursor-pointer"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}
                  whileHover={{ opacity: 0.8 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold mb-4 font-heading"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-6 font-body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {service.description}
                </motion.p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 + idx * 0.1 }}
                    >
                      <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 font-body">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:shadow-lg"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services Grid */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 1, duration: 0.5 }}
          >
            Additional Specialties
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {[
              {
                icon: Home,
                title: 'Janitorial Services',
                desc: 'Complete facility maintenance',
                color: 'blue',
              },
              {
                icon: Building,
                title: 'Sanitization',
                desc: 'Health & safety compliance',
                color: 'purple',
              },
              {
                icon: Package,
                title: 'Move In/Out Cleaning',
                desc: 'Fresh start cleaning services',
                color: 'green',
              },
              {
                icon: Star,
                title: 'Custom Solutions',
                desc: 'Tailored to your needs',
                color: 'orange',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center group"
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon
                    className={`h-8 w-8 text-${item.color}-600 mx-auto mb-4`}
                  />
                </motion.div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:shadow-xl"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
