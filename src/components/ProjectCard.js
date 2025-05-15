"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProjectCard = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const { ref: cardRef, isInView } = useScrollAnimation({
    once: true,
    margin: '0px 0px 0px 0px',
    amount: 0.05
  });

  const MAX_CHARS = 120;
  const isLongDescription = project.description.length > MAX_CHARS;

  const displayDescription = isLongDescription && !expanded 
    ? `${project.description.substring(0, MAX_CHARS)}...` 
    : project.description;

  useEffect(() => {
    setExpanded(false);
  }, [project.id]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(expanded ? contentRef.current.scrollHeight : 0);
    }
  }, [expanded]);

  useEffect(() => {
    const handleResize = () => {
      if (expanded && contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [expanded]);

  return (
    <motion.div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${featured ? 'border-2 border-secondary' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        type: "spring", 
        stiffness: 400,
        damping: 20,
        duration: 0.5
      }}
      whileHover={expanded ? {} : { y: -5 }}
      layout="position"
      style={{ 
        minHeight: "500px", 
        position: "relative",
        height: expanded ? "auto" : "500px"
      }}
    >
      <div className="relative h-48">
        <Image 
          src={getImagePath(project.image)} 
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={featured}
        />
        {project.year && (
          <motion.div 
            className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
          >
            {project.year}
          </motion.div>
        )}
      </div>
      <div className="p-6 flex flex-col h-[calc(100%-192px)]">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        
        <div className="flex-grow overflow-hidden description-container">
          <div className="text-gray-700 dark:text-gray-300 mb-4">
            {!isLongDescription ? (
              <p>{project.description}</p>
            ) : (
              <>
                {expanded ? null : <p>{displayDescription}</p>}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: contentHeight }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div ref={contentRef}>
                        <p>{project.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setExpanded(!expanded)} 
                  className="text-secondary hover:text-secondary-dark dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline focus:outline-hidden transition-colors mt-2"
                >
                  {expanded ? 'Read Less' : 'Read More'}
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.05 * index + 0.3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-3">
            {project.codeUrl && (
              <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary dark:bg-blue-600 text-white rounded-md hover:bg-secondary-dark dark:hover:bg-blue-700 font-medium transition-colors">
                <FaCode size={16} /> View Code
              </Link>
            )}
            {project.demoUrl ? (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-800 font-medium transition-colors">
                <FaExternalLinkAlt size={14} /> View Demo
              </Link>
            ) : (
              <Link href={`/demos?project=${project.id}`} 
                className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-800 font-medium transition-colors">
                <FaDownload size={14} /> Get Demo
              </Link>
            )}
          </div>
          {featured && (
            <motion.span 
              className="bg-secondary text-white text-xs px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
            >
              Featured
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
