'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Project data
const projects = [
  {
    id: 'defi-exchange',
    title: 'DeFi Exchange Platform',
    description: 'A decentralized exchange for trading tokens across multiple blockchain networks with cross-chain functionality.',
    longDescription: 'We designed and built a fully decentralized exchange that allows users to trade tokens across different blockchain networks with minimal fees. The platform features cross-chain swaps, liquidity pools, and automated market making capabilities to ensure optimal trading conditions.',
    client: 'FinChain Labs',
    technologies: ['Ethereum', 'Solidity', 'React', 'Web3.js', 'Solana'],
    features: [
      'Cross-chain token swaps',
      'Liquidity pools with incentive mechanisms',
      'Automated market making',
      'Governance token for platform decisions',
      'Advanced analytics dashboard'
    ],
    results: 'The platform now processes over $10 million in trading volume daily with 50,000+ active users. Transaction fees were reduced by 65% compared to alternatives.',
    image: '/images/placeholder-project-1.jpg',
    category: 'DeFi'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'A comprehensive NFT marketplace allowing users to mint, buy, sell, and trade digital collectibles with low gas fees.',
    longDescription: 'We developed a specialized NFT marketplace focused on digital art and collectibles. The platform allows creators to mint NFTs at a fraction of the cost of other platforms through innovative layer-2 solutions, while buyers can discover, purchase, and trade digital assets securely.',
    client: 'ArtBlock Digital',
    technologies: ['Polygon', 'ERC-721', 'ERC-1155', 'Next.js', 'IPFS'],
    features: [
      'Gasless minting for creators',
      'Lazy minting options',
      'Secondary market with royalty enforcement',
      'Verified creator profiles',
      'Advanced search and discovery tools'
    ],
    results: 'Over 100,000 NFTs minted on the platform within the first year. Average minting costs reduced by 90% compared to Ethereum mainnet.',
    image: '/images/placeholder-project-2.jpg',
    category: 'NFT'
  },
  {
    id: 'ai-trading-bot',
    title: 'AI-Powered Trading Bot',
    description: 'An automated trading system using AI algorithms to analyze market trends and execute trades on decentralized exchanges.',
    longDescription: 'We created a sophisticated trading bot that leverages machine learning algorithms to analyze market trends across multiple cryptocurrencies. The system can identify trading opportunities, execute trades automatically, and adapt its strategy based on market conditions and performance.',
    client: 'CryptoTrade Technologies',
    technologies: ['Python', 'TensorFlow', 'dydx Protocol', '0x API', 'AWS'],
    features: [
      'Machine learning prediction models',
      'Real-time market data analysis',
      'Risk management system',
      'Performance tracking dashboard',
      'Customizable trading strategies'
    ],
    results: 'The bot achieved 27% average annual returns in backtesting across various market conditions, outperforming benchmark strategies by 12%.',
    image: '/images/placeholder-project-3.jpg',
    category: 'AI'
  },
  {
    id: 'blockchain-identity',
    title: 'Blockchain Identity Verification',
    description: 'A decentralized identity verification system using blockchain to securely store and authenticate user identities.',
    longDescription: 'We developed a decentralized identity solution that allows users to control their personal information while providing verifiable credentials to service providers. The system uses zero-knowledge proofs to enable identity verification without revealing sensitive data.',
    client: 'SecureID Foundation',
    technologies: ['Ethereum', 'ZK-SNARKs', 'React Native', 'Ceramic Network', 'DID Protocol'],
    features: [
      'Self-sovereign identity wallets',
      'Zero-knowledge verification',
      'Credential issuance and verification',
      'Selective disclosure of information',
      'Integration with existing identity systems'
    ],
    results: 'Reduced onboarding time for financial services by 70% while increasing security and compliance. Currently used by 3 major financial institutions.',
    image: '/images/placeholder-project-4.jpg',
    category: 'Security'
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Platform',
    description: 'A comprehensive platform for decentralized autonomous organizations to manage proposals, voting, and treasury operations.',
    longDescription: 'We built a complete governance platform for DAOs that streamlines proposal creation, discussion, voting, and execution. The system includes treasury management, delegation features, and analytics to help communities make better decisions.',
    client: 'GovDAO Collective',
    technologies: ['Ethereum', 'Solidity', 'TheGraph', 'React', 'IPFS'],
    features: [
      'Proposal lifecycle management',
      'Token-weighted and quadratic voting',
      'Delegation system',
      'Treasury management and reporting',
      'Governance analytics dashboard'
    ],
    results: 'Now used by 15+ DAOs managing over $50 million in treasury assets. Increased proposal participation rates by 45% on average.',
    image: '/images/placeholder-project-5.jpg',
    category: 'DAO'
  },
  {
    id: 'defi-lending',
    title: 'DeFi Lending Protocol',
    description: 'A decentralized lending platform allowing users to earn interest on deposits and borrow assets against collateral.',
    longDescription: 'We developed a decentralized lending protocol that enables users to deposit crypto assets to earn interest and borrow against their collateral. The platform features dynamic interest rates based on utilization, liquidation protection mechanisms, and flash loan capabilities.',
    client: 'LendBlock Finance',
    technologies: ['Ethereum', 'Solidity', 'Chainlink', 'React', 'Hardhat'],
    features: [
      'Multi-asset lending and borrowing',
      'Dynamic interest rate model',
      'Flash loans for developers',
      'Liquidation protection features',
      'Governance token for protocol parameters'
    ],
    results: 'Achieved $75 million in total value locked within 6 months of launch. Maintained 100% solvency through multiple market downturns.',
    image: '/images/placeholder-project-6.jpg',
    category: 'DeFi'
  },
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'DeFi', name: 'DeFi' },
  { id: 'NFT', name: 'NFT' },
  { id: 'AI', name: 'AI & Analytics' },
  { id: 'Security', name: 'Security' },
  { id: 'DAO', name: 'DAO & Governance' }
];

// Define Project interface
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  client: string;
  technologies: string[];
  features: string[];
  results: string;
  image: string;
  category: string;
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 });

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Scroll to top when a project is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    // Scroll to projects section when going back
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
              Explore our innovative blockchain and AI projects that are shaping the future of Web3
            </p>
          </div>

          {selectedProject ? (
            // Project detail view
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <button 
                onClick={handleBackToProjects}
                className="flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
              >
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </button>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Project image */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-96 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <svg className="h-32 w-32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Project info */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                  <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {selectedProject.category}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Overview</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{selectedProject.longDescription}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Client</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{selectedProject.client}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Technologies Used</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Key Features</h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Results</h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">{selectedProject.results}</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={handleBackToProjects}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
                >
                  View More Projects
                </button>
              </div>
            </motion.div>
          ) : (
            // Projects grid view
            <>
              {/* Category filters */}
              <div className="mt-12 flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Projects grid */}
              <div ref={projectsRef} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => handleProjectClick(project)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="h-48 bg-gray-300 dark:bg-gray-700 relative">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                        <svg className="h-16 w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {project.category}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                        className="mt-4 text-primary hover:text-primary/80 font-medium flex items-center text-sm"
                      >
                        View Project Details
                        <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
                  <p>No projects found in this category. Please select another category.</p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 