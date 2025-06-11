'use client';

import {
  Sparkles,
  Car,
  Scissors,
  Home,
  Building,
  Package,
  Clock,
  MapPin,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Services() {
  const heroRef = useRef(null);
  const mainServicesRef = useRef(null);
  const additionalRef = useRef(null);
  const areasRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const mainServicesInView = useInView(mainServicesRef, {
    once: true,
    margin: '-100px',
  });
  const additionalInView = useInView(additionalRef, {
    once: true,
    margin: '-100px',
  });
  const areasInView = useInView(areasRef, { once: true, margin: '-100px' });

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const services = [
    {
      icon: <Sparkles className="h-12 w-12 text-blue-600" />,
      title: 'House Cleaning',
      description:
        'Professional residential cleaning services to keep your home spotless and comfortable.',
      features: [
        'Deep cleaning',
        'Regular maintenance',
        'Move-in/out cleaning',
        'Post-construction cleanup',
      ],
      price: 'From £25/hour',
      color: 'blue',
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: 'Office Cleaning',
      description:
        'Comprehensive commercial cleaning services for offices, shops, and business premises.',
      features: [
        'Daily/weekly cleaning',
        'Carpet cleaning',
        'Window washing',
        'Sanitization services',
      ],
      price: 'Custom quotes',
      color: 'blue',
    },
    {
      icon: <Scissors className="h-12 w-12 text-blue-600" />,
      title: 'Mobile Barbing',
      description:
        'Professional barbing services at your doorstep. Sharp looks delivered to your location.',
      features: [
        'Haircuts & styling',
        'Beard trimming',
        'Hot towel shaves',
        'Grooming consultations',
      ],
      price: 'From £20/visit',
      color: 'blue',
    },
    {
      icon: <Car className="h-12 w-12 text-blue-600" />,
      title: 'Errand Services',
      description:
        'Local and reliable errand running to help you manage your daily tasks efficiently.',
      features: [
        'Shopping & deliveries',
        'Document collection',
        'Appointment scheduling',
        'Personal assistance',
      ],
      price: 'From £15/hour',
      color: 'blue',
    },
  ];

  const additionalServices = [
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: 'Carpet Cleaning',
      description:
        'Professional carpet cleaning using advanced equipment and eco-friendly solutions.',
      color: 'blue',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: 'Window Washing',
      description:
        'Crystal clear windows for your home or office, inside and out.',
      color: 'purple',
    },
    {
      icon: <Package className="h-8 w-8 text-green-600" />,
      title: 'Janitorial Services',
      description:
        'Complete janitorial solutions for commercial properties and facilities.',
      color: 'green',
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Sanitization',
      description:
        'Thorough sanitization services for health and safety compliance.',
      color: 'orange',
    },
  ];

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
                Our{' '}
                <span className="font-script text-yellow-300 text-5xl md:text-7xl">
                  Services
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
                Sharp Looks. Clean Spaces. Reliable Errands.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 overflow-hidden" ref={mainServicesRef}>
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                mainServicesInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
            >
              Our Main{' '}
              <span className="font-script text-blue-600 text-4xl">
                Services
              </span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={mainServicesInView ? 'visible' : 'hidden'}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 service-card"
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      mainServicesInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold ml-4 font-heading">
                      {service.title}
                    </h3>
                  </motion.div>
                  <motion.p
                    className="text-gray-600 mb-6 font-body"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      mainServicesInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.ul
                    className="space-y-2 mb-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={mainServicesInView ? 'visible' : 'hidden'}
                  >
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center"
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        <span className="text-sm text-gray-600 font-body">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="flex justify-between items-center">
                    <motion.span
                      className={`text-2xl font-bold text-${service.color}-600 font-heading`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        mainServicesInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                    >
                      {service.price}
                    </motion.span>
                    <motion.button
                      className={`bg-${service.color}-600 text-white px-6 py-2 rounded-lg hover:bg-${service.color}-700 transition-all duration-300 font-body`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        mainServicesInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ delay: index * 0.1 + 0.9, duration: 0.6 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Services */}
        <section
          className="py-20 bg-gray-50 overflow-hidden"
          ref={additionalRef}
        >
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 font-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                additionalInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6 }}
            >
              Additional{' '}
              <span className="font-script text-blue-600 text-4xl">
                Services
              </span>
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={additionalInView ? 'visible' : 'hidden'}
            >
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-body">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 overflow-hidden" ref={areasRef}>
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={
                areasInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-3xl font-bold mb-4 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  areasInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Service{' '}
                <span className="font-script text-blue-600 text-4xl">
                  Areas
                </span>
              </motion.h2>
              <motion.p
                className="text-gray-600 font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  areasInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We proudly serve London and surrounding areas
              </motion.p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                areasInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="grid md:grid-cols-3 gap-8 text-center"
                variants={containerVariants}
                initial="hidden"
                animate={areasInView ? 'visible' : 'hidden'}
              >
                {[
                  {
                    icon: MapPin,
                    title: 'London',
                    description: 'All London boroughs covered',
                    color: 'blue',
                  },
                  {
                    icon: Clock,
                    title: 'Flexible Hours',
                    description: 'Available 7 days a week',
                    color: 'purple',
                  },
                  {
                    icon: Star,
                    title: 'Quality Guaranteed',
                    description: '100% satisfaction promise',
                    color: 'green',
                  },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <area.icon
                        className={`h-12 w-12 text-${area.color}-600 mx-auto mb-4`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 font-heading">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 font-body">
                      {area.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
