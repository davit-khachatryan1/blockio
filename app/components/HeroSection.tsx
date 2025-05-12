'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-background overflow-hidden h-screen flex items-center">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        
        {/* Animated circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/10"
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: isVisible ? 0 : -100, 
            y: isVisible ? 0 : -100
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <motion.div
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent/10"
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: isVisible ? 0 : 100, 
            y: isVisible ? 0 : 100
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-secondary/10"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="block xl:inline">Building the Future with </span>
            <span className="block text-primary xl:inline"> Blockchain</span>
            <span className="block xl:inline"> and </span>
            <span className="block text-accent xl:inline">AI</span>
          </motion.h1>
          
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            We create cutting-edge decentralized applications and AI-powered solutions to help businesses thrive in the Web3 ecosystem.
          </motion.p>
          
          <motion.div
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="rounded-md shadow">
              <Link
                href="/pages/portfolio"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                View Our Projects
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/pages/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Trusted by leading companies in the blockchain industry
            </p>
            <div className="mt-4 flex justify-center space-x-8">
              {/* Placeholder company logos */}
              <div className="h-8 w-auto text-gray-400 dark:text-gray-500">
                <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                  <rect width="100" height="30" rx="10" />
                </svg>
              </div>
              <div className="h-8 w-auto text-gray-400 dark:text-gray-500">
                <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                  <rect width="100" height="30" rx="10" />
                </svg>
              </div>
              <div className="h-8 w-auto text-gray-400 dark:text-gray-500">
                <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                  <rect width="100" height="30" rx="10" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 