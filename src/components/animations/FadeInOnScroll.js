'use client'

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function FadeInOnScroll({ 
  children, 
  className = '', 
  duration = 0.8,  // Increased from 0.5
  delay = 0, 
  direction = null, 
  distance = 70,  // Increased from 50
  threshold = 0.1,  // Lower threshold
  margin = '0px 0px -150px 0px',  // Increased visibility margin
  once = true,
  ...props 
}) {
  const { ref, isInView } = useScrollAnimation({
    once,
    margin,
    amount: threshold
  });
  
  // Set initial animation values based on direction
  let initial = { opacity: 0 };
  if (direction === 'up') initial.y = distance;
  else if (direction === 'down') initial.y = -distance;
  else if (direction === 'left') initial.x = distance;
  else if (direction === 'right') initial.x = -distance;
  
  // Reset position when in view
  let animate = { opacity: 1 };
  if (direction === 'up' || direction === 'down') animate.y = 0;
  else if (direction === 'left' || direction === 'right') animate.x = 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",  // Added spring physics
        stiffness: 40,   // Lower stiffness for slower movement
        damping: 15      // Adjusted damping
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
