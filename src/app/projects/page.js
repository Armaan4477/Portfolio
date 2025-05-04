"use client";
import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Automated ESP",
      description: "ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation", "ESP32"],
      codeUrl: "https://github.com/Armaan4477/Automated-ESP",
      featured: true,
      tags: ["iot", "automation"]
    },
    {
      id: 2,
      title: "CommunityConnect",
      description: "CommunityConnect is a comprehensive society management application designed to streamline communication and management tasks for residential societies.",
      image: "/projects/communityconnect.png",
      technologies: ["Firebase", "Management", "Website"],
      codeUrl: "https://github.com/ura-dev04/CommunityConnect",
      demoUrl: "https://sharecommunityconnect.vercel.app",
      featured: false,
      tags: ["website", "firebase", "management"]
    },
    {
      id: 3,
      title: "Delicious Discoveries",
      description: "A web application that helps users discover new recipes from around the world with various search methods including AI-powered features, ingredient-based search, and country-based filtering.",
      image: "/projects/delicious-discoveries.jpeg",
      technologies: ["Website", "Firebase"],
      codeUrl: "https://github.com/vrishab0105/Delicious-Discoveries",
      demoUrl: "https://deliciousdiscoveries.vercel.app",
      featured: false,
      tags: ["website", "firebase"]
    },
    {
      id: 4,
      title: "DataDash",
      description: "A cross-platform application for sharing media and data between devices with real-time synchronization capabilities.",
      image: "/projects/datadash.png",
      technologies: ["Cross-Platform", "Java", "Python"],
      codeUrl: "https://github.com/Armaan4477/Cross-Platform-Media-Sharing",
      demoUrl: "https://datadashshare.vercel.app",
      featured: true,
      tags: ["java", "python"]
    },
    {
      id: 5,
      title: "Enhanced E-HR Management System",
      description: "Comprehensive HR management system with multi-level access control for admins, HR personnel, managers, and employees with real-time database integration.",
      image: "/projects/ehr-system.png",
      technologies: ["Python", "Firebase", "Management"],
      codeUrl: "https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System",
      featured: false,
      tags: ["python", "firebase", "management"]
    },
    {
      id: 6,
      title: "Hangman",
      description: "Word guessing game with multiple categories and dictionary integration.",
      image: "/projects/hangman.png",
      technologies: ["Firebase", "Game", "Python"],
      codeUrl: "https://github.com/Armaan4477/Hangman",
      featured: false,
      tags: ["game", "firebase", "python"]
    },
    {
      id: 7,
      title: "Quiz Game",
      description: "Interactive quiz application with score tracking and multiple question categories.",
      image: "/projects/quiz.png",
      technologies: ["Game", "Java"],
      codeUrl: "https://github.com/Armaan4477/Quiz-Game-in-Java",
      featured: false,
      tags: ["game", "java"]
    },
    {
      id: 8,
      title: "TicTacToe",
      description: "Classic tic-tac-toe game implementation with AI opponent and various difficulty levels.",
      image: "/projects/tictactoe.png",
      technologies: ["Game", "Java"],
      codeUrl: "https://github.com/Armaan4477/TicTacToe",
      featured: false,
      tags: ["game", "java"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'game', label: 'Game' },
    { id: 'website', label: 'Web' },
    { id: 'java', label: 'Java' },
    { id: 'python', label: 'Python' },
    { id: 'iot', label: 'IoT' },
    { id: 'firebase', label: 'Database' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div>
      <AnimatedSection animation="fadeIn">
        <h1 className="page-title">My Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Explore my latest work and technical projects
        </p>
      </AnimatedSection>

      <AnimatedSection animation="slideUp" className="filter-buttons mb-8 flex flex-wrap gap-2">
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

      {featuredProjects.length > 0 && (
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

      {otherProjects.length > 0 && (
        <AnimatedSection animation="slideUp" delay={0.3} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <AnimatedCard key={project.id} index={index} className="h-full">
                <ProjectCard project={project} />
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      )}

      {filteredProjects.length === 0 && (
        <AnimatedSection animation="fadeIn" delay={0.2} className="text-center py-16">
          <p className="text-xl text-gray-700 dark:text-gray-300">No projects found matching the selected filter.</p>
        </AnimatedSection>
      )}
    </div>
  )
}
