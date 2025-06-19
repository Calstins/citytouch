'use client';

import ContactForm from './ContactForm';
import { MapPin, Award, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'City Touch Services has been amazing! Their cleaning team is thorough, professional, and always on time. The mobile barber service is so convenient - my husband loves it!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Thompson',
      role: 'Business Owner',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: "Outstanding office cleaning service! They've been maintaining our workspace for over a year now. Professional, reliable, and attention to detail is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Busy Mom',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'As a working mother, their errand services have been a lifesaver! From grocery shopping to picking up dry cleaning, they handle everything with care.',
      rating: 5,
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Executive',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'The mobile barbing service is fantastic! Professional grooming at my home office. Saves me time and the quality is better than most high-end salons.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Chen',
      role: 'Property Manager',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      text: 'We use City Touch for multiple properties. Their carpet cleaning and window washing services are top-notch. Always punctual and thorough!',
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  const testimonialVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
          >
            Get In{' '}
            <span className="font-script text-blue-600 text-5xl">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ready to experience professional service? Contact us today for your
            free quote!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Contact Details */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Contact Information
              </motion.h3>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {[
                  {
                    icon: Phone,
                    title: 'Phone',
                    value:
                      '<a href="tel:+447455621130">+44 0745 5621130</a>, <a href="tel:+447786347537"> +44 7786 347537</a>',
                    desc: 'Available 7 days a week',
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    value:
                      '<a href="mailto:citytouchservices@gmail.com">citytouchservices@gmail.com</a>',
                    desc: 'Response within 2 hours',
                  },
                  {
                    icon: MessageCircle,
                    title: 'Social Media',
                    value:
                      '<a href="https://www.instagram.com/citytouch_services" target="_blank" rel="noopener noreferrer">@Citytouch_services</a>',
                    desc: 'Follow us for updates',
                  },
                  {
                    icon: MapPin,
                    title: 'Service Area',
                    value:
                      'Serving Leicester, London & Other Surrounding Areas',
                    desc: 'We come to you!',
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold mb-1 font-heading">
                        {contact.title}
                      </h4>
                      <p
                        className="text-gray-600 font-body"
                        dangerouslySetInnerHTML={{ __html: contact.value }}
                      />
                      <p className="text-sm text-gray-500 font-body">
                        {contact.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <motion.h3
                className="text-2xl font-bold mb-6 font-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1, duration: 0.6 }}
              >
                Why Choose{' '}
                <span className="font-script text-blue-600 text-3xl">Us?</span>
              </motion.h3>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {[
                  'Fully insured and bonded',
                  'Same-day service available',
                  '100% satisfaction guarantee',
                  'Free, no-obligation quotes',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center group"
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    <Award className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700 font-body">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Rotating Testimonials */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Header */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold font-heading">
                  What Our{' '}
                  <span className="font-script text-blue-600 text-2xl">
                    Customers
                  </span>{' '}
                  Say
                </h3>
              </motion.div>

              {/* Testimonial Content */}
              <div className="min-h-[200px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    variants={testimonialVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <div className="flex items-center mb-4">
                      <motion.img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div>
                        <h4 className="font-semibold font-heading">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-sm text-gray-600 font-body">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <div className="flex text-yellow-500 text-sm mt-1">
                          {[
                            ...Array(testimonials[currentTestimonial].rating),
                          ].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: i * 0.1 + 0.3,
                                duration: 0.3,
                              }}
                            >
                              ★
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic font-body leading-relaxed">
                      &apos;{testimonials[currentTestimonial].text}&apos;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: index === currentTestimonial ? 1.25 : 1,
                    }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 4,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
