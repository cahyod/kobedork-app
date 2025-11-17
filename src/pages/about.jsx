import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">KOBEDORK</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">About KOBEDORK</h1>
          
          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">What is KOBEDORK?</h2>
            <p className="mb-4">
              KOBEDORK is an Advanced Search Dorking Utility designed for security researchers 
              and bug bounty hunters. It helps you create, build, and execute search dorks on 
              Google, Bing, and DuckDuckGo to find potential security vulnerabilities and 
              exposed sensitive information.
            </p>
            <p>
              A "dork" is a search query that uses special operators to find specific types of 
              information on the internet, often used in security research to identify potential 
              vulnerabilities or exposed data.
            </p>
          </div>

          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Predefined dork categories for common vulnerability types</li>
              <li>Real-time query preview as you build your dork</li>
              <li>Support for multiple search engines (Google, Bing, DuckDuckGo)</li>
              <li>Favorites system to save useful dorks</li>
              <li>History tracking of executed queries</li>
              <li>Dark/light theme support</li>
              <li>Keyword and operator customization</li>
              <li>Site-specific searching</li>
            </ul>
          </div>

          <div className="card mb-6">
            <h2 className="text-xl font-semibold mb-4">How to Use</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Select a dork category from the dropdown</li>
              <li>Enter your search keyword</li>
              <li>(Optional) Select an operator and specify a site</li>
              <li>Choose your preferred search engine</li>
              <li>Preview your query and click "Run Query"</li>
              <li>Save useful queries to your favorites for later</li>
            </ol>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Legal Disclaimer</h2>
            <p className="mb-4">
              This tool is provided for educational and research purposes only. The developers 
              are not responsible for any misuse of this tool or any resulting damages. 
              Please ensure you have proper authorization before testing any systems and 
              always comply with applicable laws and regulations.
            </p>
            <p>
              Use responsibly and ethically. Remember that unauthorized access to computer 
              systems is illegal in many jurisdictions.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>KOBEDORK - Advanced Search Dorking Utility v1.0</p>
        <p className="mt-1">For security research and bug bounty purposes only</p>
      </footer>
    </div>
  );
};

export default AboutPage;