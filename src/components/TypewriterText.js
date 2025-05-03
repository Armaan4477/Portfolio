'use client'

import { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 25, className = "", onComplete = () => {} }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      onComplete();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <p className={`${className} ${!isTypingComplete ? "after:content-['|'] after:ml-1 after:animate-pulse" : ""}`}>
      {displayedText}
    </p>
  );
};

export default TypewriterText;
