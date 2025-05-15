'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function AnimatedCard({ 
  children, 
  className = '',
  index = 0, 
  staggerDelay = 0.1,
  ...props 
}) {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
    amount: 0.1,
  });

  // Check if element is in initial viewport on mount
  useEffect(() => {
    // Start animation immediately if we're at the top of the page
    if (window.scrollY < 100) {
      setShouldAnimate(true);
      return;
    }
    
    // Otherwise, use the scroll detection
    setShouldAnimate(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: index * staggerDelay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
