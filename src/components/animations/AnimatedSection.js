'use client'

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeIn',
  duration = 0.6,
  delay = 0,
  ...props 
}) {
  const { ref, isInView } = useScrollAnimation();
  
  const animations = {
    fadeIn: {
      opacity: isInView ? 1 : 0,
      transition: { duration, delay }
    },
    slideUp: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 50,
      transition: { duration, delay }
    },
    scaleUp: {
      opacity: isInView ? 1 : 0,
      scale: isInView ? 1 : 0.9,
      transition: { duration, delay }
    },
    slideInLeft: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : -50,
      transition: { duration, delay }
    },
    slideInRight: {
      opacity: isInView ? 1 : 0,
      x: isInView ? 0 : 50,
      transition: { duration, delay }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={animations[animation]}
      initial={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
