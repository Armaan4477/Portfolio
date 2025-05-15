'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ name, icon, level }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation after a small delay for a staggered effect
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="card flex flex-col items-center p-6 dark:bg-gray-800 h-full"
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-lg font-semibold mb-2 dark:text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {name}
      </motion.h3>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div 
          className="bg-primary dark:bg-blue-500 h-2.5 rounded-full" 
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        ></motion.div>
      </div>
      
      <motion.p 
        className="text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {level}% proficiency
      </motion.p>
    </motion.div>
  );
}
