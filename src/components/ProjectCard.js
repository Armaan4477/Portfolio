"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);

  const MAX_CHARS = 120;
  const isLongDescription = project.description.length > MAX_CHARS;

  const displayDescription = isLongDescription && !expanded 
    ? `${project.description.substring(0, MAX_CHARS)}...` 
    : project.description;

  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${featured ? 'border-2 border-secondary' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48">
        <Image 
          src={getImagePath(project.image)} 
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {displayDescription}
          {isLongDescription && (
            <button 
              onClick={() => setExpanded(!expanded)} 
              className="text-secondary hover:text-secondary-dark dark:text-blue-400 dark:hover:text-blue-300 font-medium ml-2 hover:underline focus:outline-hidden transition-colors"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
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
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 bg-green-600 dark:bg-green-700 text-white rounded-md hover:bg-green-700 dark:hover:bg-green-800 font-medium transition-colors">
                <FaExternalLinkAlt size={14} /> View Demo
              </Link>
            )}
          </div>
          {featured && (
            <motion.span 
              className="bg-secondary text-white text-xs px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
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
