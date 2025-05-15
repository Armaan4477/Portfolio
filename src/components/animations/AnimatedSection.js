'use client'

import { motion } from 'framer-motion';

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
};

export default function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeIn',
  duration = 0.6,
  delay = 0,
  ...props 
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[animation]}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
