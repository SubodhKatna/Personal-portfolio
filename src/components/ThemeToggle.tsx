import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary-100 dark:bg-dark-700 text-primary-900 dark:text-primary-100 focus:outline-none"
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-dark-700" />
      ) : (
        <Sun size={20} className="text-primary-100" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;