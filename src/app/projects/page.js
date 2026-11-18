"use client";
import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';
import { getSortedProjects, projectsBanner } from '../../data/projects';

// Evaluated once at module load — stable reference, won't retrigger useEffect
const projects = getSortedProjects();
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyncAlt, FaTimes } from 'react-icons/fa';

export default function Projects() {
  const [dismissedBanner, setDismissedBanner] = useState(false);
  const showBanner = Boolean(projectsBanner?.enabled) && !dismissedBanner;

  const bannerTitle = projectsBanner?.title || "Portfolio Update in Progress:";
  const bannerMessage = projectsBanner?.message || "Project entries are currently being updated — project icons and download links will be updated soon.";

  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSorting, setActiveSorting] = useState('none');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [uniqueYears, setUniqueYears] = useState([]);
  const [projectsByYear, setProjectsByYear] = useState({});
  

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
    const tagFilteredProjects = activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.tags.includes(activeFilter));
      
    const sortedProjects = sortProjects(tagFilteredProjects, activeSorting);
    setFilteredProjects(sortedProjects);
    
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AnimatedSection animation="fadeIn" margin="0px" amount={0.005}>
        <h1 className="page-title">My Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Explore my latest work and technical projects
        </p>
      </AnimatedSection>

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
            transition={{ duration: 0.25 }}
            className="mb-8"
          >
            <div className="relative overflow-hidden rounded-xl border border-blue-200/80 dark:border-blue-900/50 bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-indigo-50/80 dark:from-blue-950/40 dark:via-gray-900/50 dark:to-indigo-950/30 p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0">
                    <FaSyncAlt className="text-xs animate-spin" style={{ animationDuration: '6s' }} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white mr-1.5">
                      {bannerTitle}
                    </span>
                    {bannerMessage}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setDismissedBanner(true)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-md transition-colors shrink-0 cursor-pointer"
                  aria-label="Dismiss banner"
                >
                  <FaTimes size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <AnimatedSection animation="slideUp" margin="0px" amount={0.005} className="filter-buttons flex flex-wrap gap-2 flex-grow">
          {filters.map((filter, index) => (
            <AnimatedCard key={filter.id} index={index} staggerDelay={0.03} margin="0px" amount={0.005}>
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
        
        <AnimatedSection animation="slideUp" delay={0.001} margin="0px" amount={0.005} className="sort-options flex gap-2 flex-wrap md:justify-end">
          <span className="self-center text-gray-700 dark:text-gray-300 font-medium">Sort by year:</span>
          {sortOptions.map((option, index) => (
            <AnimatedCard key={option.id} index={index} staggerDelay={0.001} margin="0px" amount={0.005}>
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
            <AnimatedSection animation="slideUp" delay={0.001} margin="0px 0px -5% 0px" amount={0.001} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <AnimatedCard key={project.id} index={index} staggerDelay={0.001} margin="0px" amount={0.005} className="h-full">
                    <ProjectCard project={project} featured={true} />
                  </AnimatedCard>
                ))}
              </div>
            </AnimatedSection>
          )}

          {activeSorting !== 'none' ? (
            <AnimatedSection animation="slideUp" delay={0.001} margin="0px 0px -5% 0px" amount={0.001}>
              {uniqueYears.map((year, yearIndex) => (
                <div key={year} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                    Projects from {year}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsByYear[year]?.map((project, index) => (
                      <AnimatedCard 
                        key={`${project.id}-${year}`} 
                        index={index} 
                        staggerDelay={0.07}
                        margin="0px" 
                        amount={0.005}
                        className="h-full"
                      >
                        <ProjectCard project={project} featured={project.featured} />
                      </AnimatedCard>
                    ))}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          ) : (
            otherProjects.length > 0 && (
              <AnimatedSection animation="slideUp" delay={0.001} margin="0px 0px -5% 0px" amount={0.001} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <AnimatedCard 
                      key={`${project.id}-other`} 
                      index={index} 
                      staggerDelay={0.07}
                      margin="0px" 
                      amount={0.001}
                      className="h-full"
                    >
                      <ProjectCard project={project} />
                    </AnimatedCard>
                  ))}
                </div>
              </AnimatedSection>
            )
          )}

          {filteredProjects.length === 0 && (
            <AnimatedSection animation="fadeIn" delay={0.2} margin="0px" amount={0.005} className="text-center py-16">
              <p className="text-xl text-gray-700 dark:text-gray-300">No projects found matching the selected filter.</p>
            </AnimatedSection>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
