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
  Heart,
  Crown,
  Lightbulb,
  Users,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
  const heroRef = useRef(null);
  const mainServicesRef = useRef(null);
  const hairCareDetailRef = useRef(null);
  const processRef = useRef(null);
  const pricingRef = useRef(null);
  const additionalRef = useRef(null);
  const areasRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const mainServicesInView = useInView(mainServicesRef, {
    once: true,
    margin: '-100px',
  });
  const hairCareDetailInView = useInView(hairCareDetailRef, {
    once: true,
    margin: '-100px',
  });
  const processInView = useInView(processRef, {
    once: true,
    margin: '-100px',
  });
  const pricingInView = useInView(pricingRef, {
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
      title: 'Professional Cleaning',
      description:
        'Comprehensive cleaning services for homes and offices with eco-friendly products and meticulous attention to detail.',
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
      icon: <Scissors className="h-12 w-12 text-purple-600" />,
      title: 'Mobile Hair Care Services',
      description:
        'Professional unisex hair treatments and styling at your location for ultimate convenience.',
      features: [
        "Men's haircuts & beard grooming",
        "Women's cuts & styling",
        'Hair braiding & protective styles',
        'Special occasion styling',
      ],
      price: 'From £25/visit',
      color: 'purple',
    },
    {
      icon: <Car className="h-12 w-12 text-green-600" />,
      title: 'Reliable Errand Services',
      description:
        'Convenient errand services to save your valuable time and help you manage your busy lifestyle efficiently.',
      features: [
        'Shopping & deliveries',
        'Document collection',
        'Appointment scheduling',
        'Personal assistance',
      ],
      price: 'From £15/hour',
      color: 'green',
    },
  ];

  const hairCareFeatures = [
    {
      icon: <Scissors className="h-8 w-8 text-purple-600" />,
      title: "Men's Grooming",
      description:
        'Professional haircuts, beard trimming, mustache grooming, and classic barbering services',
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Women's Hair Services",
      description:
        'Cuts, styling, blowouts, updos, and hair treatments tailored to your preferences',
    },
    {
      icon: <Crown className="h-8 w-8 text-yellow-600" />,
      title: 'Hair Braiding & Protective Styles',
      description:
        'Traditional braids, box braids, cornrows, twists, and other protective hairstyles',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      title: 'Hair Treatments',
      description:
        'Deep conditioning, scalp treatments, hair masks, and nourishing therapies',
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Special Occasion Styling',
      description:
        'Wedding hair, party styles, formal updos, and event-ready looks',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: 'Consultation & Advice',
      description:
        'Personalized hair care advice, style recommendations, and maintenance tips',
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Book Your Appointment',
      description: 'Schedule a convenient time that works for your schedule',
      icon: <Phone className="h-8 w-8 text-purple-600" />,
    },
    {
      step: '2',
      title: 'Consultation',
      description:
        'We discuss your hair goals, preferences, and desired outcomes',
      icon: <Users className="h-8 w-8 text-purple-600" />,
    },
    {
      step: '3',
      title: 'Professional Service',
      description:
        'Expert styling with premium products and professional techniques',
      icon: <Scissors className="h-8 w-8 text-purple-600" />,
    },
    {
      step: '4',
      title: 'Aftercare Guidance',
      description: 'Tips and advice to maintain your new look at home',
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    },
  ];

  const pricingPackages = [
    {
      name: "Men's Grooming Package",
      price: '£25-40',
      services: ['Haircut', 'Beard trim', 'Mustache grooming', 'Styling'],
      color: 'blue',
    },
    {
      name: "Women's Hair Package",
      price: '£35-65',
      services: ['Cut & style', 'Blowout', 'Basic treatment', 'Finishing'],
      color: 'purple',
    },
    {
      name: 'Braiding Services',
      price: '£40-80',
      services: [
        'Consultation',
        'Braiding/protective style',
        'Hair care',
        'Styling tips',
      ],
      color: 'pink',
    },
    {
      name: 'Special Occasion',
      price: '£50-100',
      services: [
        'Trial run',
        'Event styling',
        'Premium products',
        'Touch-up service',
      ],
      color: 'yellow',
    },
  ];

  const additionalServices = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: 'Office Cleaning',
      description:
        'Comprehensive commercial cleaning services for offices, shops, and business premises.',
      color: 'blue',
    },
    {
      icon: <Home className="h-8 w-8 text-green-600" />,
      title: 'Carpet Cleaning',
      description:
        'Professional carpet cleaning using advanced equipment and eco-friendly solutions.',
      color: 'green',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: 'Window Washing',
      description:
        'Crystal clear windows for your home or office, inside and out.',
      color: 'purple',
    },
    {
      icon: <Package className="h-8 w-8 text-orange-600" />,
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
                Professional Hair Care. Clean Spaces. Reliable Errands.
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
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
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
                    <Link href="/contact">
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
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hair Care Service Detail Section */}
        <section
          className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden"
          ref={hairCareDetailRef}
        >
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={
                hairCareDetailInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  hairCareDetailInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Mobile{' '}
                <span className="font-script text-purple-600 text-5xl">
                  Hair Care
                </span>{' '}
                Services
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  hairCareDetailInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Experience salon-quality hair care in the comfort of your own
                space. Our skilled stylists provide comprehensive hair services
                for men and women, from classic cuts to intricate braiding and
                modern styling.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              animate={hairCareDetailInView ? 'visible' : 'hidden'}
            >
              {hairCareFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                  variants={cardVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-body">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 overflow-hidden" ref={processRef}>
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={
                processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  processInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Our{' '}
                <span className="font-script text-purple-600 text-5xl">
                  Process
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                From booking to beautiful results, we ensure a seamless
                experience
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={processInView ? 'visible' : 'hidden'}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <motion.div
                    className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl font-bold text-purple-600 absolute">
                      {step.step}
                    </span>
                    <motion.div
                      className="absolute top-0 right-0"
                      whileHover={{ scale: 1.2 }}
                    >
                      {step.icon}
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-body">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={processInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50 overflow-hidden" ref={pricingRef}>
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={
                pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  pricingInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hair Care{' '}
                <span className="font-script text-purple-600 text-5xl">
                  Pricing
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                All services include consultation, styling, and aftercare advice
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={pricingInView ? 'visible' : 'hidden'}
            >
              {pricingPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-${pkg.color}-400 to-${pkg.color}-600`}
                  />
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 font-heading">
                      {pkg.name}
                    </h3>
                    <div
                      className={`text-3xl font-bold text-${pkg.color}-600 mb-4 font-heading`}
                    >
                      {pkg.price}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pkg.services.map((service, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle
                          className={`h-4 w-4 text-${pkg.color}-500 mr-2`}
                        />
                        <span className="text-sm font-body">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <motion.button
                      className={`w-full mt-6 bg-${pkg.color}-600 text-white py-3 rounded-lg hover:bg-${pkg.color}-700 transition-all duration-300 font-body`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 overflow-hidden" ref={additionalRef}>
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
        <section
          className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden"
          ref={areasRef}
        >
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
              className="bg-white rounded-lg p-8 shadow-lg"
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
                    title: 'London Coverage',
                    description: 'All London boroughs and surrounding areas',
                    color: 'blue',
                  },
                  {
                    icon: Clock,
                    title: 'Flexible Scheduling',
                    description: 'Available 7 days a week with flexible hours',
                    color: 'purple',
                  },
                  {
                    icon: Star,
                    title: 'Quality Guarantee',
                    description: '100% satisfaction promise on all services',
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

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Experience{' '}
                <span className="font-script text-yellow-300 text-5xl">
                  Excellence
                </span>
                ?
              </motion.h2>
              <motion.p
                className="text-xl mb-8 max-w-2xl mx-auto font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Book your service today and discover why City Touch Services is
                London&apos;s trusted choice for professional cleaning, expert
                hair care, and reliable errands.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <motion.button
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-body"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Quote
                  </motion.button>
                </Link>
                <motion.a
                  href="tel:+4407455621130"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors font-body"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call Now: +44 0745 5621130
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
