'use client'

import { motion } from 'framer-motion';

export default function AnimatedCard({ 
  children, 
  className = '',
  index = 0, 
  staggerDelay = 0.1,
  ...props 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * staggerDelay }}
      layout
      {...props}
    >
      {children}
    </motion.div>
  );
}
