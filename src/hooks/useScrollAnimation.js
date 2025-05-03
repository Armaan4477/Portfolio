'use client'

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options = { once: true, margin: '0px 0px -100px 0px' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once,
    margin: options.margin,
  });
  
  return { ref, isInView };
}
