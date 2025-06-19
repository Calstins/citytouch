'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS (you can also do this in a useEffect)
  const initEmailJS = () => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Initialize EmailJS
      initEmailJS();

      // Get environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId =
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.'
        );
      }

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        contactMethod: getContactMethodLabel(formData.contactMethod),
        service: getServiceLabel(formData.service) || 'Not specified',
        message: formData.message,
        submission_time: new Date().toLocaleString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/London',
        }),
        to_email: 'citytouchservices@gmail.com', // Your business email
        reply_to: formData.email,
      };

      // Send main notification email to business
      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log('Main email sent successfully:', result.text);

      // Send auto-reply to customer (if template is configured)
      if (autoReplyTemplateId) {
        try {
          const autoReplyParams = {
            ...templateParams,
            to_email: formData.email, // Send to customer
          };

          const autoReplyResult = await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            autoReplyParams
          );

          console.log('Auto-reply sent successfully:', autoReplyResult.text);
        } catch (autoReplyError) {
          console.log(
            'Auto-reply failed (but main email succeeded):',
            autoReplyError
          );
          // Don't throw error here as main email was successful
        }
      }

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: 'email',
        service: '',
        message: '',
      });

      // Track successful submission (optional)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form',
          value: 1,
        });
      }
    } catch (error: any) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');

      // Set user-friendly error message
      if (error.text) {
        setErrorMessage(`Failed to send message: ${error.text}`);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          'Unable to send message. Please try calling us directly or check your internet connection.'
        );
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Helper functions for labels
  const getContactMethodLabel = (method: string) => {
    const methods: { [key: string]: string } = {
      email: 'Email',
      phone: 'Phone Call',
      text: 'Text Message',
      whatsapp: 'WhatsApp',
    };
    return methods[method] || method;
  };

  const getServiceLabel = (service: string) => {
    const services: { [key: string]: string } = {
      'house-cleaning': 'House Cleaning',
      'office-cleaning': 'Office Cleaning',
      'carpet-cleaning': 'Carpet Cleaning',
      'window-washing': 'Window Washing',
      'mens-grooming': "Men's Grooming",
      'womens-hair-styling': "Women's Hair Treatments",
      'special-occasion-hair': 'Special Occasion Hair',
      'hair-braiding': 'Hair Braiding',
      'hair-treatments': 'Hair Treatments',
      'errand-services': 'Errand Services',
      janitorial: 'Janitorial Services',
      sanitization: 'Sanitization',
      multiple: 'Multiple Services',
      other: 'Other',
    };
    return services[service] || service;
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

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

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 font-heading"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Get Your{' '}
        <span className="font-script text-blue-600 text-4xl">Free Quote</span>
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-8 font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Fill out the form below and we&apos;ll get back to you within 2 hours
        with a personalized quote from <strong>Citytouchservices</strong>.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name - Required */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Full Name *
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your full name"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Email - Required */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Email Address *
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your email address"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Phone - Optional */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Phone Number (Optional)
          </label>
          <motion.input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Enter your phone number"
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Contact Method - Required */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="contactMethod"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Preferred Contact Method *
          </label>
          <motion.select
            id="contactMethod"
            name="contactMethod"
            required
            value={formData.contactMethod}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="email">Email</option>
            <option value="phone">Phone Call</option>
            <option value="text">Text Message</option>
            <option value="whatsapp">WhatsApp</option>
          </motion.select>
        </motion.div>

        {/* Service - Optional */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Service Interested In (Optional)
          </label>
          <motion.select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            whileFocus={{ scale: 1.02 }}
          >
            <option value="">Select a service</option>
            <option value="house-cleaning">House Cleaning</option>
            <option value="office-cleaning">Office Cleaning</option>
            <option value="carpet-cleaning">Carpet Cleaning</option>
            <option value="window-washing">Window Washing</option>
            <option value="mens-grooming">Men&apos;s Grooming</option>
            <option value="womens-hair-styling">
              Women&apos;s Hair Treatments
            </option>
            <option value="special-occasion-hair">Special Occasion Hair</option>
            <option value="hair-braiding">Hair Braiding</option>
            <option value="hair-treatments">Hair Treatments</option>
            <option value="errand-services">Errand Services</option>
            <option value="janitorial">Janitorial Services</option>
            <option value="sanitization">Sanitization</option>
            <option value="multiple">Multiple Services</option>
            <option value="other">Other</option>
          </motion.select>
        </motion.div>

        {/* Message - Required */}
        <motion.div variants={inputVariants}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2 font-body"
          >
            Message *
          </label>
          <motion.textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell us about your needs, preferred schedule, and any specific requirements..."
            whileFocus={{ scale: 1.02 }}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed font-body"
          variants={inputVariants}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          <AnimatePresence mode="wait">
            {isSubmitting ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Sending Message...
              </motion.div>
            ) : (
              <motion.div
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              className="p-4 bg-green-50 border border-green-200 rounded-lg"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-center text-green-800 font-body">
                <CheckCircle className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">
                    We&apos;ll get back to you within 2 hours. Check your email
                    for a confirmation.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              className="p-4 bg-red-50 border border-red-200 rounded-lg"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="flex items-start text-red-800 font-body">
                <XCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Message could not be sent</p>
                  <p className="text-sm mt-1">
                    {errorMessage || 'Please try again or call us directly.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="mt-8 pt-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-sm text-gray-600 text-center font-body">
          Need immediate assistance? Call us at{' '}
          <motion.a
            href="tel:+447455621130"
            className="text-blue-600 font-semibold hover:underline mr-1"
            whileHover={{ scale: 1.05 }}
          >
            +44 0745 5621130
          </motion.a>
          or{' '}
          <motion.a
            href="tel:+447786347537"
            className="text-blue-600 font-semibold hover:underline mr-1"
            whileHover={{ scale: 1.05 }}
          >
            +44 7786 347537
          </motion.a>
          <br />
          Email us at{' '}
          <motion.a
            href="mailto:citytouchservices@gmail.com"
            className="text-blue-600 font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            citytouchservices@gmail.com
          </motion.a>
        </p>
      </motion.div>
    </motion.div>
  );
}
