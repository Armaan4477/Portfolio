'use client'

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedCard({ 
  children, 
  className = '',
  index = 0, 
  staggerDelay = 0.1,
  ...props 
}) {
  const { ref, isInView } = useScrollAnimation();
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * staggerDelay 
      }}
      layout
      {...props}
    >
      {children}
    </motion.div>
  );
}
