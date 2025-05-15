'use client'

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(currentProgress);
      
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 60,
            damping: 12
          }}
        >
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="relative p-3 rounded-full bg-primary text-white shadow-lg hover:bg-blue-700 focus:outline-hidden"
            whileHover={{ 
              scale: 1.15, 
              y: -8,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.92 }}
          >
            {/* Progress circle */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-20"
                cx="50" 
                cy="50" 
                r="45" 
                fill="none"
                stroke="currentColor" 
                strokeWidth="10"
              />
              <motion.circle
                cx="50" 
                cy="50" 
                r="45" 
                fill="none"
                stroke="currentColor" 
                strokeWidth="10"
                strokeDasharray="282.7"
                strokeDashoffset={282.7 * (1 - scrollProgress)}
                strokeLinecap="round"
              />
            </svg>
            <FaArrowUp size={20} className="relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
