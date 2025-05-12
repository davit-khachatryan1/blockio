'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Services data
const services = [
  {
    id: 'blockchain',
    title: 'Blockchain Development',
    description: 'We build secure, scalable blockchain solutions tailored to your business needs. From private blockchains to enterprise solutions.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    longDescription: 'Our blockchain development services help businesses leverage distributed ledger technology to create transparent, immutable, and secure systems. Whether you need a private blockchain for your enterprise or want to build on public networks like Ethereum, Solana, or Polygon, our expert team will guide you through the entire process.',
    offerings: [
      'Custom blockchain development',
      'Blockchain integration with existing systems',
      'Private and permissioned blockchains',
      'Layer 2 scaling solutions',
      'Cross-chain interoperability'
    ],
    caseStudy: {
      title: 'Supply Chain Traceability Platform',
      description: 'We developed a blockchain-based supply chain solution for a global manufacturing company that increased transparency, reduced counterfeiting, and improved product tracking from raw materials to end consumers.',
      results: 'Reduced disputes by 75% and improved product authenticity verification by 98%.'
    }
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contract Development',
    description: 'We develop, audit, and deploy secure smart contracts for various use cases, including NFTs, DeFi, and token standards.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    longDescription: 'Our smart contract development services cover the entire lifecycle from design to deployment and maintenance. We prioritize security, efficiency, and gas optimization in all our smart contract implementations, ensuring your decentralized applications operate flawlessly.',
    offerings: [
      'Custom smart contract development',
      'Smart contract security audits',
      'Token development (ERC-20, ERC-721, ERC-1155)',
      'DeFi protocol development',
      'DAO and governance contracts'
    ],
    caseStudy: {
      title: 'Automated Market Maker Protocol',
      description: 'We designed and implemented an advanced AMM protocol for a DeFi platform that included innovative features such as concentrated liquidity and reduced impermanent loss.',
      results: 'Protocol has processed over $1.2 billion in trading volume with zero security incidents.'
    }
  },
  {
    id: 'web3',
    title: 'Web3 Integration',
    description: 'We help businesses integrate Web3 technologies into existing systems, including wallet connections, token gateways, and more.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    longDescription: 'Our Web3 integration services enable traditional businesses to seamlessly adopt blockchain and decentralized technologies. We create bridges between your existing systems and the Web3 ecosystem, allowing you to leverage the benefits of decentralization without a complete overhaul.',
    offerings: [
      'Wallet integration for websites and apps',
      'Web3 authentication systems',
      'Token gating and access control',
      'NFT integration for e-commerce',
      'Blockchain data indexing and APIs'
    ],
    caseStudy: {
      title: 'E-commerce Web3 Upgrade',
      description: 'We integrated Web3 capabilities into an established e-commerce platform, enabling cryptocurrency payments, NFT-based loyalty programs, and decentralized customer identity management.',
      results: 'Increased customer engagement by 35% and reduced payment processing fees by 50%.'
    }
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    description: 'We leverage AI and machine learning to enhance blockchain applications, from predictive analytics to automated decision-making systems.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    longDescription: 'Our AI solutions combine the power of artificial intelligence with blockchain technology to create intelligent, decentralized systems. We develop machine learning models that can analyze blockchain data, predict market trends, and automate complex processes in a transparent and secure way.',
    offerings: [
      'AI-powered trading algorithms',
      'Predictive analytics for blockchain data',
      'Fraud detection systems',
      'Smart contract optimization',
      'Automated governance systems'
    ],
    caseStudy: {
      title: 'Fraud Detection System for DeFi',
      description: 'We developed an AI-based system that analyzes transaction patterns to identify potential scams, rug pulls, and suspicious activities in DeFi protocols, helping users make safer investment decisions.',
      results: 'System has successfully identified over 150 fraudulent projects before major incidents occurred.'
    }
  },
  {
    id: 'defi',
    title: 'DeFi Development',
    description: 'We build decentralized finance applications that enable lending, borrowing, trading, and yield farming with innovative features.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    longDescription: 'Our DeFi development services cover the full spectrum of decentralized finance applications. We help clients build secure, high-performance DeFi protocols that can compete in the rapidly evolving financial landscape. Our solutions are designed with security as the highest priority, with rigorous testing and auditing at every stage.',
    offerings: [
      'Lending and borrowing platforms',
      'Decentralized exchanges (DEXs)',
      'Yield aggregators and optimization',
      'Synthetic assets and derivatives',
      'Stablecoin development'
    ],
    caseStudy: {
      title: 'Multi-chain Yield Optimizer',
      description: 'We built a yield optimization platform that automatically moves users\' assets between different DeFi protocols across multiple blockchains to maximize returns while minimizing risk.',
      results: 'Platform has attracted over $50 million in TVL and generated 32% higher yields on average compared to single-protocol strategies.'
    }
  },
  {
    id: 'nft',
    title: 'NFT Development',
    description: 'We create non-fungible token solutions for digital art, collectibles, gaming, and real-world asset tokenization.',
    icon: (
      <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    longDescription: 'Our NFT development services help businesses and creators implement non-fungible token technology for various use cases. We design and develop NFT systems that go beyond simple collectibles, creating utility and value through innovative applications of unique digital assets.',
    offerings: [
      'Custom NFT smart contracts',
      'NFT marketplaces and storefronts',
      'Gaming NFTs with in-game utility',
      'Real-world asset tokenization',
      'Generative art NFT collections'
    ],
    caseStudy: {
      title: 'Real Estate NFT Platform',
      description: 'We developed a platform that tokenizes real estate properties as NFTs, enabling fractional ownership, automated rental payments, and simplified property transfers.',
      results: 'Platform has tokenized over $20 million in real estate assets and reduced property transfer time from weeks to minutes.'
    }
  }
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We begin by understanding your business requirements, defining project scope, and planning the technical architecture.'
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Our team designs and develops your blockchain solution with a focus on security, scalability, and user experience.'
  },
  {
    number: '03',
    title: 'Testing & Audit',
    description: 'We conduct rigorous testing and security audits to ensure your solution is robust and free from vulnerabilities.'
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description: 'After successful testing, we deploy your solution to production and provide ongoing maintenance and support.'
  }
];

export default function ServicesPage() {
  // Scroll to service based on URL hash
  const refs = {
    blockchain: useRef(null),
    'smart-contracts': useRef(null),
    web3: useRef(null),
    ai: useRef(null),
    defi: useRef(null),
    nft: useRef(null)
  };

  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const contactRef = useRef(null);

  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.1 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.1 });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
              Innovative blockchain and AI solutions tailored to your business needs
            </p>
          </div>

          {/* Services List */}
          <section ref={servicesRef} className="mt-16">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  ref={refs[service.id as keyof typeof refs]}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 bg-gray-50 dark:bg-gray-700 p-8 flex flex-col items-center justify-center">
                      <div className="text-primary mb-4">{service.icon}</div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{service.title}</h2>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{service.longDescription}</p>
                      
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">What We Offer</h3>
                      <ul className="mb-6 space-y-2">
                        {service.offerings.map((offering) => (
                          <li key={offering} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-400">{offering}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Case Study: {service.caseStudy.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{service.caseStudy.description}</p>
                        <p className="font-medium text-primary">{service.caseStudy.results}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Our Process */}
          <section ref={processRef} className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Development Process</h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
                A streamlined approach to delivering exceptional blockchain and AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-4 mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section ref={contactRef} className="mt-24">
            <motion.div
              className="bg-gradient-to-r from-primary to-accent rounded-xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-6 py-12 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Blockchain Project?</h2>
                <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
                  Contact us today to discuss how our blockchain and AI solutions can help your business thrive in the Web3 ecosystem.
                </p>
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 