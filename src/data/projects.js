export const projectsData = [
  {
      id: 1,
      title: "Automated ESP",
      description: "ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation", "ESP32"],
      codeUrl: "https://github.com/Armaan4477/Automated-ESP",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Automated-ESP-esp32.zip",
      note: "This is an ESP32 project. You'll need an ESP32 board and the Arduino IDE to compile and upload the code. The zip file includes detailed wiring diagrams and setup instructions.",
      featured: true,
      tags: ["iot", "automation"],
      year: "2025"
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
      tags: ["website", "firebase", "management"],
      year: "2025"
    },
    {
      id: 3,
      title: "DataDash",
      description: "A cross-platform application for sharing media and data between devices with real-time synchronization capabilities.",
      image: "/projects/datadash.png",
      technologies: ["Cross-Platform", "Java", "Python"],
      codeUrl: "https://github.com/Armaan4477/Cross-Platform-Media-Sharing",
      demoUrl: "https://datadashshare.vercel.app",
      featured: true,
      tags: ["java", "python"],
      year: "2024"
    },
    {
      id: 4,
      title: "Delicious Discoveries",
      description: "A web application that helps users discover new recipes from around the world with various search methods including AI-powered features, ingredient-based search, and country-based filtering.",
      image: "/projects/delicious-discoveries.png",
      technologies: ["Website", "Firebase"],
      codeUrl: "https://github.com/vrishab0105/Delicious-Discoveries",
      demoUrl: "https://deliciousdiscoveries.vercel.app",
      featured: false,
      tags: ["website", "firebase"],
      year: "2024"
    },
    {
      id: 5,
      title: "Enhanced E-HR Management System",
      description: "Comprehensive HR management system with multi-level access control for admins, HR personnel, managers, and employees with real-time database integration.",
      image: "/projects/ehr-system.png",
      technologies: ["Python", "Firebase", "Management"],
      codeUrl: "https://github.com/ChampionSamay1644/Enhanced-E-HR-Management-System",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["python", "firebase", "management"],
      year: "2024"
    },
    {
      id: 6,
      title: "Hangman",
      description: "Word guessing game with multiple categories and dictionary integration.",
      image: "/projects/hangman.png",
      technologies: ["Firebase", "Game", "Python"],
      codeUrl: "https://github.com/Armaan4477/Hangman",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["game", "firebase", "python"],
      year: "2024"
    },
    {
      id: 7,
      title: "Ollama UI",
      description: "A PyQt6-based GUI application for interacting with Ollama models through its API. Features include selecting from available models, chat-like interface with history, system instructions support, and uploading various file types including images, text files, and PDFs.",
      image: "/projects/ollama-ui.png",
      technologies: ["Python", "AI"],
      codeUrl: "https://github.com/Armaan4477/Ollama-UI",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["python", "ai"],
      year: "2025"
    },
    {
      id: 8,
      title: "Paint Application",
      description: "A painting application built with JavaFX that allows users to create digital artwork with various brushes, shapes, and text tools. Includes multiple brush types, text formatting, undo/redo functionality, and canvas operations.",
      image: "/projects/javafx-paint.png",
      technologies: ["Java", "JavaFX", "Graphics"],
      codeUrl: "https://github.com/Armaan4477/Paint-App",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["java"],
      year: "2023"
    },
    {
      id: 9,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS showcasing projects, skills, and professional information. Features include dark/light mode with system preference detection, interactive UI with smooth animations using Framer Motion, filterable project showcase, and GitHub contribution visualization.",
      image: "/projects/portfolio.png",
      technologies: ["website","Next.js", "Tailwind CSS"],
      codeUrl: "https://github.com/Armaan4477/portfolio",
      demoUrl: "https://armaan44.is-a.dev",
      featured: false,
      tags: ["website"],
      year: "2025"
    },
    {
      id: 10,
      title: "Quiz Game",
      description: "Interactive quiz application with score tracking and multiple question categories.",
      image: "/projects/quiz.png",
      technologies: ["Game", "Java", "firebase"],
      codeUrl: "https://github.com/Armaan4477/Quiz-Game-in-Java",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["game", "java", "firebase"],
      year: "2023"
    },
    {
      id: 11,
      title: "TicTacToe",
      description: "Classic tic-tac-toe game implementation with AI opponent and various difficulty levels.",
      image: "/projects/tictactoe.png",
      technologies: ["Game", "Java", "Android"],
      codeUrl: "https://github.com/Armaan4477/TicTacToe",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/TicTacToe.apk",
      note: "This is an Android APK file. You'll need to enable installation from unknown sources on your Android device to install it.",
      featured: false,
      tags: ["game", "java"],
      year: "2023"
    },
    {
      id: 12,
      title: "Voting System",
      description: "A JavaFX application for managing elections, allowing voters to cast votes and administrators to manage candidates, voters, and election settings. Features include voter verification, candidate management, voter registration, and real-time results with Firebase integration.",
      image: "/projects/election-voting.png",
      technologies: ["Java", "JavaFX", "Firebase"],
      codeUrl: "https://github.com/Armaan4477/Voting-System",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/",
      featured: false,
      tags: ["java", "firebase"],
      year: "2023"
    }
  ];

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};
