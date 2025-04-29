"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getImagePath from '../utils/imageLoader';

const ProjectCard = ({ project, featured = false }) => {
  const [expanded, setExpanded] = useState(false);

  const MAX_CHARS = 120;
  const isLongDescription = project.description.length > MAX_CHARS;

  const displayDescription = isLongDescription && !expanded 
    ? `${project.description.substring(0, MAX_CHARS)}...` 
    : project.description;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${featured ? 'border-2 border-secondary' : ''}`}>
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
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          {project.codeUrl && (
            <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" 
              className="text-secondary hover:underline hover:text-secondary-dark dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors">
              View Code
            </Link>
          )}
          {featured && (
            <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
