'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { ref, isInView } = useScrollAnimation({
    once,
    margin,
    amount,
  });

  useEffect(() => {
    if (window.scrollY < 100 || isInView) {
      setShouldAnimate(true);
      return;
    }
    
    setShouldAnimate(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={shouldAnimate 
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
