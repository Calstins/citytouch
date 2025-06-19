'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Car } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        'Professional <span class="font-script text-yellow-300">Cleaning</span> Services',
      subtitle: 'Clean Spaces, Happy Places',
      description:
        "Transform your home or office with our comprehensive cleaning services. From deep cleaning to regular maintenance, we've got you covered.",
      icon: <Sparkles className="h-16 w-16 text-white" />,
      bg: 'from-blue-600/50 to-blue-800/60',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    },
    {
      title:
        'Mobile <span class="font-script text-yellow-300">Hair Care</span> Services',
      subtitle: 'Professional Hair Care at Your Doorstep',
      description:
        'Expert hair care services delivered to your location. Enjoy professional cuts, styling, braiding, and treatments for men and women without leaving your home.',
      icon: '<Scissors className="h-16 w-16 text-white" />',
      bg: 'from-purple-600/50 to-purple-800/60',
      image:
        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    },
    {
      title:
        'Reliable <span class="font-script text-yellow-300">Errand</span> Services',
      subtitle: 'Your Time is Precious',
      description:
        'Let us handle your daily tasks and errands. From shopping to document collection, we provide dependable assistance when you need it most.',
      icon: <Car className="h-16 w-16 text-white" />,
      bg: 'from-green-600/50 to-green-800/60',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden pt-24">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Reduced Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title.replace(/<[^>]*>/g, '')} // Clean alt text
              className="w-full h-full object-cover"
            />
            {/* Reduced opacity from 80% to 50% and changed to a more subtle overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.bg}`}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl text-white">
                {/* <div className="mb-6 animate-float">{slide.icon}</div> */}
                <h2 className="text-lg md:text-xl text-blue-200 mb-4 animate-fade-in font-body">
                  {slide.subtitle}
                </h2>
                <h1
                  className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up font-heading"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in font-body">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center font-body"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center font-body"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50 rounded-full"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50 rounded-full"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
