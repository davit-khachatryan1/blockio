'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  projectType: {
    dApp: boolean;
    nftMarketplace: boolean;
    smartContracts: boolean;
    web3Integration: boolean;
    blockchainDev: boolean;
    walletDev: boolean;
    defiSolutions: boolean;
    web3Social: boolean;
    otherType: boolean;
    otherTypeText: string;
  };
  features: {
    walletAuth: boolean;
    smartContractIntegration: boolean;
    cryptoPayment: boolean;
    nftMinting: boolean;
    crossChain: boolean;
    transactionHistory: boolean;
    mobileCompatibility: boolean;
    tokenCreation: boolean;
    staking: boolean;
    governance: boolean;
    otherFeatures: boolean;
    otherFeaturesText: string;
  };
  techStack: {
    blockchain: string[];
    smartContractLang: string[];
    frontend: string[];
    backend: string[];
    storage: string[];
  };
  responsive: {
    mobileFriendly: boolean;
    mobileApp: boolean;
    customDeadline: string;
  };
  budget: string;
  customBudget: string;
  timeline: string;
  additionalInfo: string;
};

export default function ProjectRequestPage() {
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });
  const [formData, setFormData] = useState<FormDataType>({
    // Client Information
    name: '',
    email: '',
    phone: '',
    
    // Project Type
    projectType: {
      dApp: false,
      nftMarketplace: false,
      smartContracts: false,
      web3Integration: false,
      blockchainDev: false,
      walletDev: false,
      defiSolutions: false,
      web3Social: false,
      otherType: false,
      otherTypeText: '',
    },
    
    // Project Features
    features: {
      walletAuth: false,
      smartContractIntegration: false,
      cryptoPayment: false,
      nftMinting: false,
      crossChain: false,
      transactionHistory: false,
      mobileCompatibility: false,
      tokenCreation: false,
      staking: false,
      governance: false,
      otherFeatures: false,
      otherFeaturesText: '',
    },
    
    // Technology Stack
    techStack: {
      blockchain: [],
      smartContractLang: [],
      frontend: [],
      backend: [],
      storage: [],
    },
    
    // Responsive Design
    responsive: {
      mobileFriendly: false,
      mobileApp: false,
      customDeadline: '',
    },
    
    // Budget & Timeline
    budget: '',
    customBudget: '',
    timeline: '',
    
    // Additional Information
    additionalInfo: '',
  });
  
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    
    if (name.includes('.')) {
      const [sectionKey, fieldKey] = name.split('.');
      
      setFormData((prev) => {
        const newData = { ...prev };
        const section = newData[sectionKey as keyof FormDataType];
        
        if (typeof section === 'object' && section !== null) {
          (section as Record<string, string | boolean | string[]>)[fieldKey] = type === 'checkbox' ? checked : value;
        }
        
        return newData;
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleArrayChange = (
    section: keyof Pick<FormDataType, 'techStack'>,
    field: keyof FormDataType['techStack'], 
    value: string, 
    checked: boolean
  ) => {
    setFormData(prev => {
      const currentArray = [...prev[section][field]];
      
      if (checked) {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: [...currentArray, value]
          }
        };
      } else {
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: currentArray.filter(item => item !== value)
          }
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would typically send data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus({ submitted: true, error: false });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
              Project <span className="text-primary">Request</span>
            </h1>
            <p className="mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-400 mx-auto">
              Tell us about your project and get a customized estimate
            </p>
          </div>

          <motion.div
            ref={formRef}
            className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {formStatus.submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-md">
                <h3 className="text-lg font-medium">Thank you for your project request!</h3>
                <p className="mt-2">We&apos;ve received your project details and will get back to you with an estimate within 1-2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Client Information Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Client Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      />
                    </div>
                  </div>
                </section>

                {/* Project Type Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Type</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Select all that apply:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="dApp"
                        name="projectType.dApp"
                        checked={formData.projectType.dApp}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="dApp" className="ml-3 text-gray-700 dark:text-gray-300">
                        Decentralized Application (dApp)
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="nftMarketplace"
                        name="projectType.nftMarketplace"
                        checked={formData.projectType.nftMarketplace}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="nftMarketplace" className="ml-3 text-gray-700 dark:text-gray-300">
                        NFT Marketplace
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="smartContracts"
                        name="projectType.smartContracts"
                        checked={formData.projectType.smartContracts}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="smartContracts" className="ml-3 text-gray-700 dark:text-gray-300">
                        Smart Contracts
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="web3Integration"
                        name="projectType.web3Integration"
                        checked={formData.projectType.web3Integration}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="web3Integration" className="ml-3 text-gray-700 dark:text-gray-300">
                        Web3 Website Integration
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="blockchainDev"
                        name="projectType.blockchainDev"
                        checked={formData.projectType.blockchainDev}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="blockchainDev" className="ml-3 text-gray-700 dark:text-gray-300">
                        Blockchain Development
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="walletDev"
                        name="projectType.walletDev"
                        checked={formData.projectType.walletDev}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="walletDev" className="ml-3 text-gray-700 dark:text-gray-300">
                        Crypto Wallet Development
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="defiSolutions"
                        name="projectType.defiSolutions"
                        checked={formData.projectType.defiSolutions}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="defiSolutions" className="ml-3 text-gray-700 dark:text-gray-300">
                        DeFi Solutions
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="web3Social"
                        name="projectType.web3Social"
                        checked={formData.projectType.web3Social}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="web3Social" className="ml-3 text-gray-700 dark:text-gray-300">
                        Web3 Social Network
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="otherType"
                        name="projectType.otherType"
                        checked={formData.projectType.otherType}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="otherType" className="ml-3 text-gray-700 dark:text-gray-300">
                        Other
                      </label>
                    </div>
                    
                    {formData.projectType.otherType && (
                      <div className="md:col-span-2 mt-2">
                        <label htmlFor="otherTypeText" className="sr-only">
                          Specify Other Project Type
                        </label>
                        <input
                          type="text"
                          id="otherTypeText"
                          name="projectType.otherTypeText"
                          value={formData.projectType.otherTypeText}
                          onChange={handleChange}
                          placeholder="Please specify the project type"
                          className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                        />
                      </div>
                    )}
                  </div>
                </section>
                
                {/* Project Features Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Features</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Select all features that your project requires:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="walletAuth"
                        name="features.walletAuth"
                        checked={formData.features.walletAuth}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="walletAuth" className="ml-3 text-gray-700 dark:text-gray-300">
                        User Authentication (Wallet Connection)
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="smartContractIntegration"
                        name="features.smartContractIntegration"
                        checked={formData.features.smartContractIntegration}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="smartContractIntegration" className="ml-3 text-gray-700 dark:text-gray-300">
                        Smart Contract Integration
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="cryptoPayment"
                        name="features.cryptoPayment"
                        checked={formData.features.cryptoPayment}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="cryptoPayment" className="ml-3 text-gray-700 dark:text-gray-300">
                        Payment Gateway (Cryptocurrency Support)
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="nftMinting"
                        name="features.nftMinting"
                        checked={formData.features.nftMinting}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="nftMinting" className="ml-3 text-gray-700 dark:text-gray-300">
                        NFT Minting and Display
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="crossChain"
                        name="features.crossChain"
                        checked={formData.features.crossChain}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="crossChain" className="ml-3 text-gray-700 dark:text-gray-300">
                        Cross-chain Compatibility
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="transactionHistory"
                        name="features.transactionHistory"
                        checked={formData.features.transactionHistory}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="transactionHistory" className="ml-3 text-gray-700 dark:text-gray-300">
                        Transaction History and Analytics
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="mobileCompatibility"
                        name="features.mobileCompatibility"
                        checked={formData.features.mobileCompatibility}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="mobileCompatibility" className="ml-3 text-gray-700 dark:text-gray-300">
                        Mobile Compatibility
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="tokenCreation"
                        name="features.tokenCreation"
                        checked={formData.features.tokenCreation}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="tokenCreation" className="ml-3 text-gray-700 dark:text-gray-300">
                        Custom Token Creation
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="staking"
                        name="features.staking"
                        checked={formData.features.staking}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="staking" className="ml-3 text-gray-700 dark:text-gray-300">
                        Staking or Yield Farming
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="governance"
                        name="features.governance"
                        checked={formData.features.governance}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="governance" className="ml-3 text-gray-700 dark:text-gray-300">
                        Governance Mechanism
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="otherFeatures"
                        name="features.otherFeatures"
                        checked={formData.features.otherFeatures}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="otherFeatures" className="ml-3 text-gray-700 dark:text-gray-300">
                        Other Features
                      </label>
                    </div>
                    
                    {formData.features.otherFeatures && (
                      <div className="md:col-span-2 mt-2">
                        <label htmlFor="otherFeaturesText" className="sr-only">
                          Specify Other Features
                        </label>
                        <input
                          type="text"
                          id="otherFeaturesText"
                          name="features.otherFeaturesText"
                          value={formData.features.otherFeaturesText}
                          onChange={handleChange}
                          placeholder="Please specify other features"
                          className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                        />
                      </div>
                    )}
                  </div>
                </section>
                
                {/* Technology Stack Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technology Stack</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Select the technologies you&apos;d prefer for your project:</p>
                  
                  <div className="space-y-6">
                    {/* Blockchain Technologies */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Blockchain Technology</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Ethereum', 'Solana', 'Polygon', 'Binance Smart Chain', 'Avalanche', 'Near', 'Polkadot', 'Other'].map((tech) => (
                          <div key={tech} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`blockchain-${tech}`}
                              checked={formData.techStack.blockchain.includes(tech)}
                              onChange={(e) => handleArrayChange('techStack', 'blockchain', tech, e.target.checked)}
                              className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                            />
                            <label htmlFor={`blockchain-${tech}`} className="ml-3 text-gray-700 dark:text-gray-300">
                              {tech}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Smart Contract Languages */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Smart Contract Language</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Solidity', 'Rust', 'Vyper', 'Move', 'Other'].map((lang) => (
                          <div key={lang} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`smartContractLang-${lang}`}
                              checked={formData.techStack.smartContractLang.includes(lang)}
                              onChange={(e) => handleArrayChange('techStack', 'smartContractLang', lang, e.target.checked)}
                              className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                            />
                            <label htmlFor={`smartContractLang-${lang}`} className="ml-3 text-gray-700 dark:text-gray-300">
                              {lang}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Frontend Technologies */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Frontend Technology</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Other'].map((tech) => (
                          <div key={tech} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`frontend-${tech}`}
                              checked={formData.techStack.frontend.includes(tech)}
                              onChange={(e) => handleArrayChange('techStack', 'frontend', tech, e.target.checked)}
                              className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                            />
                            <label htmlFor={`frontend-${tech}`} className="ml-3 text-gray-700 dark:text-gray-300">
                              {tech}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Backend Technologies */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Backend Technology</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Node.js', 'Python', 'Java', 'Go', 'Ruby', 'Other'].map((tech) => (
                          <div key={tech} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`backend-${tech}`}
                              checked={formData.techStack.backend.includes(tech)}
                              onChange={(e) => handleArrayChange('techStack', 'backend', tech, e.target.checked)}
                              className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                            />
                            <label htmlFor={`backend-${tech}`} className="ml-3 text-gray-700 dark:text-gray-300">
                              {tech}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Storage Solutions */}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Storage Solution</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['IPFS', 'Arweave', 'Filecoin', 'Traditional DB', 'Other'].map((storage) => (
                          <div key={storage} className="flex items-start">
                            <input
                              type="checkbox"
                              id={`storage-${storage}`}
                              checked={formData.techStack.storage.includes(storage)}
                              onChange={(e) => handleArrayChange('techStack', 'storage', storage, e.target.checked)}
                              className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                            />
                            <label htmlFor={`storage-${storage}`} className="ml-3 text-gray-700 dark:text-gray-300">
                              {storage}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Responsive Design Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Responsive Design & Device Compatibility</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="mobileFriendly"
                        name="responsive.mobileFriendly"
                        checked={formData.responsive.mobileFriendly}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="mobileFriendly" className="ml-3 text-gray-700 dark:text-gray-300">
                        Mobile-friendly Website
                      </label>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="mobileApp"
                        name="responsive.mobileApp"
                        checked={formData.responsive.mobileApp}
                        onChange={handleChange}
                        className="h-5 w-5 text-primary border-gray-300 dark:border-gray-700 rounded focus:ring-primary mt-1"
                      />
                      <label htmlFor="mobileApp" className="ml-3 text-gray-700 dark:text-gray-300">
                        Mobile App Development
                      </label>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="customDeadline" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Custom Deadline (if any)
                    </label>
                    <input
                      type="text"
                      id="customDeadline"
                      name="responsive.customDeadline"
                      value={formData.responsive.customDeadline}
                      onChange={handleChange}
                      placeholder="e.g., By Q3 2023, Within 4 months, etc."
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                    />
                  </div>
                </section>
                
                {/* Budget & Timeline Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Budget & Timeline</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      >
                        <option value="">Select a budget range</option>
                        <option value="< $5,000">Less than $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                        <option value="custom">I have a specific budget</option>
                      </select>
                    </div>
                    
                    {formData.budget === 'custom' && (
                      <div>
                        <label htmlFor="customBudget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Custom Budget
                        </label>
                        <input
                          type="text"
                          id="customBudget"
                          name="customBudget"
                          value={formData.customBudget}
                          onChange={handleChange}
                          placeholder="Please specify your budget"
                          className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                        />
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Preferred Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      >
                        <option value="">Select a timeline</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                  </div>
                </section>
                
                {/* Additional Information Section */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Additional Information</h2>
                  
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Details & Requirements
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={5}
                      className="block w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-primary focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3"
                      placeholder="Please provide any additional information about your project, specific requirements, or questions you might have."
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Upload Documents (Optional)
                    </label>
                    <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                          >
                            <span>Upload files</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          PNG, JPG, PDF, DOC up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Submit Project Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 