'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const teamRef = useRef(null);
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.2 });
  const isHistoryInView = useInView(historyRef, { once: true, amount: 0.2 });

  // Team members data
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Blockchain expert with 10+ years experience in decentralized systems and smart contract development.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Former Google AI engineer with expertise in machine learning algorithms and blockchain technology.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Blockchain Developer',
      bio: 'Smart contract specialist with a background in DeFi protocols and cross-chain solutions.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: 'Emma Wilson',
      role: 'AI Research Lead',
      bio: 'PhD in Computer Science specializing in AI applications for blockchain security and optimization.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: 'David Park',
      role: 'Web3 Solutions Architect',
      bio: 'Expert in designing and implementing decentralized applications and Web3 integrations.',
      image: '/images/placeholder-profile.jpg'
    },
    {
      name: 'Lisa Nguyen',
      role: 'Product Manager',
      bio: 'Experienced in guiding blockchain products from concept to launch with a focus on user experience.',
      image: '/images/placeholder-profile.jpg'
    }
  ];

  // Values
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with blockchain and AI technologies.'
    },
    {
      title: 'Decentralization',
      description: 'We believe in creating systems that distribute power and give users control over their data.'
    },
    {
      title: 'Security',
      description: 'We prioritize robust security practices in all our blockchain and smart contract implementations.'
    },
    {
      title: 'Transparency',
      description: 'We operate with openness and clarity in our processes, code, and client relationships.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              About <span className="text-primary">Blockio</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
              Learn more about our company, our mission, and the team building the future of Web3
            </p>
          </div>

          {/* Our Story Section */}
          <section ref={historyRef} className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                <div className="mt-6 space-y-6 text-gray-600 dark:text-gray-400">
                  <p>
                    Blockio was founded in 2020 by a team of blockchain enthusiasts and AI researchers with a shared vision: to make blockchain technology and Web3 accessible to businesses of all sizes.
                  </p>
                  <p>
                    What started as a small team of 5 has now grown to over 15 talented developers, designers, and blockchain specialists working together to create innovative solutions for the decentralized web.
                  </p>
                  <p>
                    Throughout our journey, we&apos;ve helped dozens of clients transform their businesses with blockchain technology, from startups launching their first token to enterprises integrating Web3 capabilities into their existing systems.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Timeline</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-primary font-medium">2020</h4>
                    <p className="text-gray-600 dark:text-gray-400">Blockio founded with a focus on Ethereum smart contracts</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">2021</h4>
                    <p className="text-gray-600 dark:text-gray-400">Expanded services to include AI integration and multi-chain solutions</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">2022</h4>
                    <p className="text-gray-600 dark:text-gray-400">Launched our first proprietary Web3 framework for enterprise clients</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">2023</h4>
                    <p className="text-gray-600 dark:text-gray-400">Reached milestone of 50+ successfully delivered blockchain projects</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-medium">2024</h4>
                    <p className="text-gray-600 dark:text-gray-400">Expanded AI capabilities and launched our research division</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Mission & Vision Section */}
          <section ref={missionRef} className="mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission & Vision</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-primary p-6">
                    <h3 className="text-2xl font-bold text-white">Mission</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      To accelerate the adoption of blockchain technology and Web3 by creating innovative, user-friendly, and scalable solutions that address real-world problems and empower businesses to thrive in the decentralized economy.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-accent p-6">
                    <h3 className="text-2xl font-bold text-white">Vision</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      A world where blockchain technology and AI work seamlessly together to create more efficient, transparent, and equitable systems that benefit everyone. We envision a future where Web3 technologies form the backbone of the digital economy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Core Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <h4 className="text-lg font-medium text-primary mb-2">{value.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Team Section */}
          <section ref={teamRef} className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Meet Our Team</h2>
                <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
                  The talented people behind Blockio&apos;s innovative blockchain and AI solutions
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                      {/* Placeholder for profile image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        <svg className="h-24 w-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="mt-3 text-gray-600 dark:text-gray-400">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Technologies Section */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Technologies We Work With</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
                We leverage cutting-edge technologies to build robust blockchain and AI solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Blockchain</h3>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Ethereum</p>
                  <p>Solana</p>
                  <p>Polygon</p>
                  <p>Binance Smart Chain</p>
                  <p>Avalanche</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Smart Contracts</h3>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Solidity</p>
                  <p>Rust</p>
                  <p>Web3.js</p>
                  <p>Ethers.js</p>
                  <p>Hardhat</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium text-primary mb-2">AI & ML</h3>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>TensorFlow</p>
                  <p>PyTorch</p>
                  <p>Natural Language Processing</p>
                  <p>Computer Vision</p>
                  <p>Predictive Analytics</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Frontend</h3>
                <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>React</p>
                  <p>Next.js</p>
                  <p>TypeScript</p>
                  <p>Tailwind CSS</p>
                  <p>Framer Motion</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 