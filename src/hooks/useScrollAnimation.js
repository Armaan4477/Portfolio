'use client'

import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function useScrollAnimation(options = { 
  once: true, 
  margin: '0px 0px -150px 0px',
  amount: 0.4,
  triggerOnce: false 
}) {
  const ref = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  
  const isInView = useInView(ref, {
    once: options.once,
    margin: options.margin,
    amount: options.amount,
  });
  
  useEffect(() => {
    if (options.triggerOnce && !hasTriggered && isInView) {
      setHasTriggered(true);
    }
  }, [isInView, options.triggerOnce, hasTriggered]);
  
  return { 
    ref, 
    isInView: options.triggerOnce ? (hasTriggered || isInView) : isInView 
  };
}
