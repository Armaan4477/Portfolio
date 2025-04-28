import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Handle hash linking for project direct access
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const projects = [
    {
      id: 'esp',
      title: 'Automated ESP',
      image: `${process.env.PUBLIC_URL}/assets/esp.png`,
      tags: ['iot', 'automation'],
      description: 'ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.',
      github: 'https://github.com/Armaan4477/Automated-ESP'
    },
    {
      id: 'communityconnect',
      title: 'CommunityConnect',
      image: `${process.env.PUBLIC_URL}/assets/communityconnect.png`,
      tags: ['firebase', 'management', 'website'],
      description: 'CommunityConnect is a comprehensive society management application designed to streamline communication and management tasks for residential societies.',
      github: 'https://github.com/ura-dev04/CommunityConnect'
    },
    {
      id: 'deliciousdiscoveries',
      title: 'Delicious Discoveries',
      image: `${process.env.PUBLIC_URL}/assets/delicious-discoveries.jpeg`,
      tags: ['website', 'firebase'],
      description: 'A web application that helps users discover new recipes from around the world with various search methods including AI-powered features, ingredient-based search, and country-based filtering.',
      github: 'https://github.com/Armaan4477/Delicious-Discoveries'
    },
    {
      id: 'datadash',
      title: 'DataDash',
      image: `${process.env.PUBLIC_URL}/assets/datadash.png`,
      tags: ['cross-platform', 'java', 'python'],
      description: 'A cross-platform application for sharing media and data between devices with real-time synchronization capabilities.',
      github: 'https://github.com/Armaan4477/Cross-Platform-Media-Sharing'
    },
    {
      id: 'ehr',
      title: 'Enhanced E-HR Management System',
      image: `${process.env.PUBLIC_URL}/assets/ehr-system.png`,
      tags: ['python', 'firebase', 'management'],
      description: 'Comprehensive HR management system with multi-level access control for admins, HR personnel, managers, and employees with real-time database integration.',
      github: 'https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System'
    },
    {
      id: 'hangman',
      title: 'Hangman',
      image: `${process.env.PUBLIC_URL}/assets/hangman.png`,
      tags: ['firebase', 'game', 'python'],
      description: 'Word guessing game with multiple categories and dictionary integration.',
      github: 'https://github.com/Armaan4477/Hangman'
    },
    {
      id: 'quiz',
      title: 'Quiz Game',
      image: `${process.env.PUBLIC_URL}/assets/quiz.png`,
      tags: ['game', 'java'],
      description: 'Interactive quiz application with score tracking and multiple question categories.',
      github: 'https://github.com/Armaan4477/Quiz-Game-in-Java'
    },
    {
      id: 'tictactoe',
      title: 'TicTacToe',
      image: `${process.env.PUBLIC_URL}/assets/tictactoe.png`,
      tags: ['game', 'java'],
      description: 'Classic tic-tac-toe game implementation with AI opponent and various difficulty levels.',
      github: 'https://github.com/Armaan4477/TicTacToe'
    }
  ];

  const filterButtons = [
    { id: 'all', name: 'All' },
    { id: 'game', name: 'Game' },
    { id: 'website', name: 'Web' },
    { id: 'java', name: 'Java' },
    { id: 'python', name: 'Python' },
    { id: 'iot', name: 'IoT' },
    { id: 'firebase', name: 'Database' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <>
      <PageHeader 
        title="My Projects" 
        subtitle="Explore my latest work and technical projects" 
      />

      <section className="projects-section">
        <div className="container">
          <div className="filter-buttons">
            {filterButtons.map(button => (
              <button 
                key={button.id}
                className={`filter-btn ${filter === button.id ? 'active' : ''}`}
                onClick={() => setFilter(button.id)}
              >
                {button.name}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card" 
                data-aos="fade-up" 
                id={project.id}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <a href={project.github} className="read-more">
                    View on GitHub <FaGithub />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
