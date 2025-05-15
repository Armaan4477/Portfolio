"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaGithub } from 'react-icons/fa';
import AnimatedSection from '../../components/animations/AnimatedSection';
import { projectsData } from '../../data/projects';
import getImagePath from '../../utils/imageLoader';
import { useSearchParams } from 'next/navigation';

export default function Demos() {
  const [activeTab, setActiveTab] = useState(null);
  const searchParams = useSearchParams();
  
  // Filter projects that don't have a demoUrl
  const projectsWithoutDemo = projectsData.filter(project => !project.demoUrl);
  
  // Set the active project based on URL query parameter or default to first project
  useEffect(() => {
    const projectId = searchParams.get('projectId');
    
    if (projectId) {
      // Convert to number since IDs in projectsData are numbers
      const numericId = parseInt(projectId, 10);
      
      // Check if this project exists in our filtered list
      if (projectsWithoutDemo.some(p => p.id === numericId)) {
        setActiveTab(numericId);
      } else {
        // Fallback to first project if ID not found
        setActiveTab(projectsWithoutDemo.length > 0 ? projectsWithoutDemo[0].id : null);
      }
    } else if (projectsWithoutDemo.length > 0 && !activeTab) {
      setActiveTab(projectsWithoutDemo[0].id);
    }
  }, [searchParams, projectsWithoutDemo]);

  return (
    <div>
      <AnimatedSection animation="fadeIn">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/projects" className="flex items-center gap-2 text-primary hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            <FaArrowLeft /> Back to Projects
          </Link>
          <h1 className="page-title">Project Demos</h1>
        </div>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Download and explore demos of my projects that aren't hosted online.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Project Navigation Sidebar */}
        <AnimatedSection animation="slideUp" delay={0.1} className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
            <nav className="space-y-2">
              {projectsWithoutDemo.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(project.id)}
                  className={`w-full text-left p-3 rounded-md transition-colors flex items-center gap-2
                    ${activeTab === project.id 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                    }`}
                >
                  <span className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src={getImagePath(project.image)}
                      alt={project.title}
                      fill
                      className="rounded-full object-cover"
                      sizes="32px"
                    />
                  </span>
                  <span className="truncate">{project.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </AnimatedSection>

        {/* Project Details Section */}
        <AnimatedSection animation="slideUp" delay={0.2} className="lg:col-span-3">
          {activeTab && projectsWithoutDemo.map((project) => (
            project.id === activeTab && (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src={getImagePath(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Download & Resources</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`/demos/files/${project.title.toLowerCase().replace(/\s+/g, '-')}.zip`}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition"
                      download
                    >
                      <FaDownload /> Download Demo
                    </a>
                    
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                    >
                      <FaGithub /> View Source Code
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> Download files contain standalone executables or project files. 
                      Please read the included README file for installation and usage instructions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          ))}
          
          {projectsWithoutDemo.length === 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300">
                All projects have online demos available. Visit the projects page to check them out!
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
