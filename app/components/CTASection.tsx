'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-16 bg-primary">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 bottom-0 h-full w-full text-primary-600 opacity-20"
          fill="currentColor"
          viewBox="0 0 800 800"
        >
          <circle cx="400" cy="400" r="200" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="700" cy="700" r="50" />
          <circle cx="650" cy="200" r="70" />
          <circle cx="200" cy="600" r="70" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:py-16 md:px-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <motion.h2
                  className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Ready to Start Your Blockchain Journey?
                </motion.h2>
                <motion.p
                  className="mt-4 text-lg text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Whether you&apos;re looking to build a decentralized application, integrate Web3 technologies, or leverage AI for your blockchain project, we&apos;re here to help. Let&apos;s build the future together.
                </motion.p>
                <motion.div
                  className="mt-8 flex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      href="/pages/contact"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
                    >
                      Get a Free Consultation
                    </Link>
                  </div>
                  <div className="ml-3 inline-flex">
                    <Link
                      href="/pages/portfolio"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors"
                    >
                      Explore Our Work
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12 lg:mt-0">
                <motion.div
                  className="border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 px-6 py-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact Information</h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Reach out to us for any questions or to discuss your project requirements.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-400">info@blockio.com</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-400">+1 (234) 567-890</span>
                    </li>
                    <li className="flex">
                      <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="ml-3 text-gray-600 dark:text-gray-400">123 Blockchain Street, Web3 City, AI 12345</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 