"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaDownload, FaEye, FaEyeSlash, FaInfoCircle } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getPreviewStatus } from '../data/projects';

const ProjectCard = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const infoRef = useRef(null);
  const previewStatus = getPreviewStatus(project);
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
    setShowInfo(false);
  }, [project.id]);

  useEffect(() => {
    if (!showInfo) return;

    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setShowInfo(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showInfo]);

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
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${featured ? 'border-2 border-secondary' : ''}`}
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
      <div className="relative h-48 overflow-hidden rounded-t-lg">
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
          <div className="flex flex-wrap items-center gap-2">
            {project.codeUrl && (
              <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary dark:bg-blue-600 text-white rounded-md hover:bg-secondary-dark dark:hover:bg-blue-700 font-medium transition-colors text-sm">
                <FaCode size={16} /> View Code
              </Link>
            )}
            {previewStatus.type === 'demo' ? (
              <Link href={previewStatus.url} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-800 font-medium transition-colors text-sm">
                <FaExternalLinkAlt size={14} /> View Demo
              </Link>
            ) : previewStatus.type === 'download' ? (
              <Link href={`/demos?projectId=${project.id}`} 
                className="flex items-center gap-2 px-3 py-1.5 bg-purple-600 dark:bg-purple-700 text-white rounded-md hover:bg-purple-700 dark:hover:bg-purple-800 font-medium transition-colors text-sm">
                <FaDownload size={14} /> Get Demo
              </Link>
            ) : (previewStatus.type === 'no-preview' || previewStatus.type === 'preview-available') ? (
              <div 
                className="relative inline-block" 
                ref={infoRef}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowInfo(prev => !prev);
                  }}
                  onFocus={() => setShowInfo(true)}
                  onBlur={() => setShowInfo(false)}
                  className="group flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/80 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md border border-gray-300/80 dark:border-gray-600 font-medium text-xs sm:text-sm transition-all cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/40 select-none"
                  aria-label={`${previewStatus.type === 'no-preview' ? 'No preview available' : 'Preview available'}: ${previewStatus.reason}`}
                  aria-expanded={showInfo}
                >
                  {previewStatus.type === 'no-preview' ? (
                    <FaEyeSlash size={14} className="text-amber-500 dark:text-amber-400 shrink-0" />
                  ) : (
                    <FaEye size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                  )}
                  <span>{previewStatus.type === 'no-preview' ? 'No Preview Available' : 'Preview Available'}</span>
                  <FaInfoCircle 
                    size={13} 
                    className="text-gray-400 group-hover:text-primary dark:text-gray-400 dark:group-hover:text-blue-400 transition-colors shrink-0 ml-0.5" 
                  />
                </button>

                <AnimatePresence>
                  {showInfo && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute bottom-full mb-2 z-40 w-64 sm:w-72 p-3 bg-gray-900/95 dark:bg-gray-950/95 text-white rounded-lg shadow-xl border border-gray-700/80 backdrop-blur-xs text-xs pointer-events-auto ${
                        project.codeUrl ? 'sm:right-0 left-0 sm:left-auto' : 'left-0'
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-start gap-2">
                        <FaInfoCircle className="text-blue-400 mt-0.5 shrink-0" size={13} />
                        <div>
                          <p className="font-semibold text-gray-200 mb-1">Preview Notice</p>
                          <p className="text-gray-300 leading-relaxed font-normal">{previewStatus.reason}</p>
                        </div>
                      </div>
                      <div 
                        className={`absolute top-full -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900/95 dark:border-t-gray-950/95 ${
                          project.codeUrl ? 'sm:left-auto sm:right-6 left-6' : 'left-6'
                        }`} 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : null}
          </div>
          {featured && (
            <motion.span 
              className="bg-secondary text-white text-xs px-3 py-1 rounded-full shrink-0 ml-2"
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
