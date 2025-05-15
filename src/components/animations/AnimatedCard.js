'use client'

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedCard({ 
  children, 
  className = '',
  index = 0, 
  staggerDelay = 0.25,
  duration = 0.12,
  distance = 55,
  margin = "0px 0px -15% 0px",
  amount = 0.1,
  once = true,
  ...props 
}) {
  const { ref, isInView } = useScrollAnimation({
    once,
    margin,
    amount,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView 
        ? { opacity: 1, y: 0 } 
        : { opacity: 0, y: distance }
      }
      transition={{ 
        duration, 
        delay: index * staggerDelay,
        type: "spring",
        stiffness: 60, 
        damping: 12
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
