'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Features with animated counters
  const features = [
    { label: 'Projects Completed', value: 50, suffix: '+' },
    { label: 'Blockchain Solutions', value: 30, suffix: '+' },
    { label: 'Satisfied Clients', value: 25, suffix: '+' },
    { label: 'Team Members', value: 15, suffix: '+' },
  ];

  return (
    <section id="about" ref={ref} className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About <span className="text-primary">Blockio</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Blockio is an innovative IT company specializing in Blockchain and AI development, with a strong focus on Web3 technologies. We&apos;re committed to building the next generation of decentralized applications and blockchain solutions that empower businesses and users alike.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our team of expert developers, engineers, and blockchain specialists combines deep technical knowledge with a passion for cutting-edge technologies to deliver exceptional results for our clients.
            </p>
            
            <div className="mt-8">
              <Link
                href="/pages/about"
                className="text-primary hover:text-primary/80 font-medium flex items-center"
              >
                Learn more about our company
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.label}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                  <motion.p
                    className="text-4xl font-bold text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {feature.value}{feature.suffix}
                  </motion.p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Mission</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                To accelerate the adoption of blockchain technology and Web3 by creating innovative, user-friendly, and scalable solutions that address real-world problems.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Technologies we use */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Technologies We Use</h3>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
              {['Ethereum', 'Solana', 'Polygon', 'React', 'Next.js', 'TensorFlow'].map((tech) => (
                <div
                  key={tech}
                  className="col-span-1 flex justify-center py-4 px-6 bg-white dark:bg-gray-800 rounded-lg shadow"
                >
                  <span className="text-gray-600 dark:text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 