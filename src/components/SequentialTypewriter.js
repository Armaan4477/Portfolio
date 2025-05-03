'use client'

import { useState } from 'react';
import TypewriterText from './TypewriterText';

const SequentialTypewriter = ({ paragraphs, delay = 10, className = "" }) => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [displayedParagraphs, setDisplayedParagraphs] = useState([paragraphs[0]]);

  const handleParagraphComplete = () => {
    if (currentParagraphIndex < paragraphs.length - 1) {
      const nextIndex = currentParagraphIndex + 1;
      setCurrentParagraphIndex(nextIndex);
      setDisplayedParagraphs(prev => [...prev, paragraphs[nextIndex]]);
    }
  };

  return (
    <div className="space-y-4">
      {displayedParagraphs.map((paragraph, index) => (
        <TypewriterText
          key={index}
          text={paragraph}
          delay={delay}
          className={className}
          onComplete={index === currentParagraphIndex ? handleParagraphComplete : undefined}
        />
      ))}
    </div>
  );
};

export default SequentialTypewriter;
