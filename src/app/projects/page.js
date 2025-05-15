"use client";
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';
import { projectsData } from '../../data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSorting, setActiveSorting] = useState('none');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [projectsByYear, setProjectsByYear] = useState({});
  
  const projects = projectsData;

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI' },
    { id: 'firebase', label: 'Database' },
    { id: 'game', label: 'Game' },
    { id: 'iot', label: 'IoT' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'website', label: 'Web' }
  ];
  
  const sortOptions = [
    { id: 'none', label: 'Default' },
    { id: 'year-asc', label: 'Oldest First' },
    { id: 'year-desc', label: 'Newest First' }
  ];

  useEffect(() => {
    // Apply filtering and sorting
    const tagFilteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.tags.includes(activeFilter));
      
    const sortedProjects = sortProjects(tagFilteredProjects, activeSorting);
    setFilteredProjects(sortedProjects);
    
    // Organize projects by year
    const years = [...new Set(sortedProjects.map(project => project.year))].sort((a, b) => 
      activeSorting === 'year-asc' ? parseInt(a) - parseInt(b) : parseInt(b) - parseInt(a)
    );
    setUniqueYears(years);
    
    const byYear = years.reduce((acc, year) => {
      acc[year] = sortedProjects.filter(project => project.year === year);
      return acc;
    }, {});
    setProjectsByYear(byYear);
  }, [activeFilter, activeSorting, projects]);

  const sortProjects = (projects, sortOption) => {
    if (sortOption === 'none') return projects;
    
    return [...projects].sort((a, b) => {
      const yearA = parseInt(a.year);
      const yearB = parseInt(b.year);
      
      if (sortOption === 'year-asc') {
        return yearA - yearB;
      } else if (sortOption === 'year-desc') {
        return yearB - yearA;
      }
      return 0;
    });
  };

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  // Scroll to top on page load to ensure animations trigger
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AnimatedSection animation="fadeIn">
        <h1 className="page-title">My Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore my latest work and technical projects
        </p>
      </AnimatedSection>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <AnimatedSection animation="slideUp" className="filter-buttons flex flex-wrap gap-2 flex-grow">
          {filters.map((filter, index) => (
            <AnimatedCard key={filter.id} index={index} staggerDelay={0.05}>
              <button 
                className={`filter-btn px-4 py-2 rounded-md ${
                  activeFilter === filter.id 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            </AnimatedCard>
          ))}
        </AnimatedSection>
        
        <AnimatedSection animation="slideUp" delay={0.1} className="sort-options flex gap-2 flex-wrap md:justify-end">
          <span className="self-center text-gray-700 dark:text-gray-300 font-medium">Sort by year:</span>
          {sortOptions.map((option, index) => (
            <AnimatedCard key={option.id} index={index} staggerDelay={0.05}>
              <button 
                className={`sort-btn px-4 py-2 rounded-md ${
                  activeSorting === option.id 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveSorting(option.id)}
              >
                {option.label}
              </button>
            </AnimatedCard>
          ))}
        </AnimatedSection>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeFilter}-${activeSorting}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {featuredProjects.length > 0 && activeSorting === 'none' && (
            <AnimatedSection animation="slideUp" delay={0.2} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <AnimatedCard key={project.id} index={index} className="h-full">
                    <ProjectCard project={project} featured={true} />
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
          )}

          {activeSorting !== 'none' ? (
            <AnimatedSection animation="slideUp" delay={0.2}>
              {uniqueYears.map((year) => (
                <div key={year} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Projects from {year}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsByYear[year]?.map((project, index) => (
                      <AnimatedCard key={`${project.id}-${year}`} index={index} className="h-full">
                        <ProjectCard project={project} featured={project.featured} />
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          ) : (
            otherProjects.length > 0 && (
              <AnimatedSection animation="slideUp" delay={0.3} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <AnimatedCard key={`${project.id}-other`} index={index} className="h-full">
                      <ProjectCard project={project} />
                    </AnimatedCard>
                  ))}
                </div>
              </AnimatedSection>
            )
          )}

          {filteredProjects.length === 0 && (
            <AnimatedSection animation="fadeIn" delay={0.2} className="text-center py-16">
              <p className="text-xl text-gray-700 dark:text-gray-300">No projects found matching the selected filter.</p>
            </AnimatedSection>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
