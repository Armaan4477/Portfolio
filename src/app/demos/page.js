"use client";
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaGithub } from 'react-icons/fa';
import AnimatedSection from '../../components/animations/AnimatedSection';
import { projectsData } from '../../data/projects';
import getImagePath from '../../utils/imageLoader';
import { useSearchParams, useRouter } from 'next/navigation';

function DemoContent() {
  const [activeTab, setActiveTab] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const projectsWithDownloads = projectsData.filter(project => !project.demoUrl && project.downloadLink);
  
  useEffect(() => {
    const projectId = searchParams.get('projectId');
    
    if (projectId) {
      const numericId = parseInt(projectId, 10);
      
      if (projectsWithDownloads.some(p => p.id === numericId)) {
        setActiveTab(numericId);
      } else {
        setActiveTab(projectsWithDownloads.length > 0 ? projectsWithDownloads[0].id : null);
      }
    } else if (projectsWithDownloads.length > 0) {
      setActiveTab(projectsWithDownloads[0].id);
    }
  }, [searchParams, projectsWithDownloads]);

  const handleProjectSelect = (projectId) => {
    setActiveTab(projectId);
    router.push(`/demos?projectId=${projectId}`);
  };

  const activeProject = projectsWithDownloads.find(project => project.id === activeTab);

  return (
    <div>
      <AnimatedSection animation="fadeIn">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/projects" className="flex items-center gap-2 text-primary hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
        
        <h1 className="page-title mb-4">Project Demos</h1>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Download and explore demos of my projects that aren't hosted online.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          <strong>Note: Links to download each project are currently unavailable and will be added soon.</strong>
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Project Navigation Sidebar */}
        <AnimatedSection animation="slideUp" delay={0.1} className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
            <nav className="space-y-2">
              {projectsWithDownloads.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
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
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
                  <Image
                    src={getImagePath(activeProject.image)}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{activeProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">{activeProject.description}</p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Download & Resources</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={activeProject.downloadLink}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition"
                      download
                    >
                      <FaDownload /> Download Demo
                    </a>
                    
                    <a
                      href={activeProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                    >
                      <FaGithub /> View Source Code
                    </a>
                  </div>
                  
                  {activeProject.note && (
                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Note:</strong> {activeProject.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          
            {projectsWithDownloads.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                <p className="text-gray-700 dark:text-gray-300">
                  All projects have online demos available. Visit the projects page to check them out!
                </p>
              </div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default function Demos() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      <DemoContent />
    </Suspense>
  );
}