'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample projects data
const projects = [
  {
    id: 'defi-exchange',
    title: 'DeFi Exchange Platform',
    description: 'A decentralized exchange for trading tokens across multiple blockchain networks with cross-chain functionality.',
    tags: ['DeFi', 'Blockchain', 'Smart Contracts'],
    image: '/images/placeholder-project-1.jpg',
    href: '/pages/portfolio#defi-exchange',
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'A comprehensive NFT marketplace allowing users to mint, buy, sell, and trade digital collectibles with low gas fees.',
    tags: ['NFT', 'Web3', 'Marketplace'],
    image: '/images/placeholder-project-2.jpg',
    href: '/pages/portfolio#nft-marketplace',
  },
  {
    id: 'ai-trading-bot',
    title: 'AI-Powered Trading Bot',
    description: 'An automated trading system using AI algorithms to analyze market trends and execute trades on decentralized exchanges.',
    tags: ['AI', 'Trading', 'Analytics'],
    image: '/images/placeholder-project-3.jpg',
    href: '/pages/portfolio#ai-trading-bot',
  },
  {
    id: 'blockchain-identity',
    title: 'Blockchain Identity Verification',
    description: 'A decentralized identity verification system using blockchain to securely store and authenticate user identities.',
    tags: ['Identity', 'Security', 'dApp'],
    image: '/images/placeholder-project-4.jpg',
    href: '/pages/portfolio#blockchain-identity',
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function PortfolioPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" ref={ref} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our <span className="text-primary">Portfolio</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore our innovative blockchain and AI projects
          </motion.p>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Slider {...sliderSettings} className="portfolio-slider">
            {projects.map((project) => (
              <div key={project.id} className="px-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link
                        href={project.href}
                        className="text-primary hover:text-primary/80 font-medium flex items-center"
                      >
                        View Project
                        <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/pages/portfolio"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 