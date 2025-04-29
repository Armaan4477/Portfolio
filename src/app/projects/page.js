"use client";
import { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Automated ESP",
      description: "ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation"],
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
      featured: false,
      tags: ["website", "firebase", "management"]
    },
    {
      id: 3,
      title: "Delicious Discoveries",
      description: "A web application that helps users discover new recipes from around the world with various search methods including AI-powered features, ingredient-based search, and country-based filtering.",
      image: "/projects/delicious-discoveries.jpeg",
      technologies: ["Website", "Firebase"],
      codeUrl: "https://github.com/Armaan4477/Delicious-Discoveries",
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
      <h1 className="page-title">My Projects</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Explore my latest work and technical projects
      </p>

      <div className="filter-buttons mb-8 flex flex-wrap gap-2">
        {filters.map(filter => (
          <button 
            key={filter.id}
            className={`filter-btn px-4 py-2 rounded-md ${
              activeFilter === filter.id 
                ? 'bg-secondary text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-secondary">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6 text-secondary">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">No projects found matching the selected filter.</p>
        </div>
      )}
    </div>
  )
}
