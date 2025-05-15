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
    if (isInView) {
      setHasTriggered(true);
    }
  }, [isInView]);

  return { 
    ref, 
    isInView: options.once ? (hasTriggered || isInView) : isInView,
    hasBeenInView: hasTriggered 
  };
}
