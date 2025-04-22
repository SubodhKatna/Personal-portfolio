import React from 'react';
import { motion } from 'framer-motion';
import { Code, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-dark-800 dark:bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <motion.div
              className="flex items-center gap-2 text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="text-primary-400" size={28} />
              <span>Subodh Katna</span>
            </motion.div>
            <p className="text-gray-400 max-w-md">
              A passionate MERN stack developer creating beautiful, functional, and scalable web applications.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  { name: 'GitHub', url: 'https://github.com/' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/' },
                  { name: 'Twitter', url: 'https://twitter.com/' },
                ].map((item) => (
                  <motion.li key={item.name} whileHover={{ x: 5 }}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Subodh Katna. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;