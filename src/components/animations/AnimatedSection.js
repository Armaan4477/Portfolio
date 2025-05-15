'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -10% 0px",
    amount: 0.2,
  });

  // Check if element is in initial viewport on mount
  useEffect(() => {
    // Start animation immediately if we're at the top of the page or viewing the section
    if (window.scrollY < 100 || isInView) {
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
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ 
        duration, 
        delay,
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
