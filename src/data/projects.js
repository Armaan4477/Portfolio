/**
 * Projects Showcase Banner Notification Configuration
 * Set `enabled: true` or `false` to show or hide the banner across the website.
 */
export const projectsBanner = {
  enabled: true,
  title: "Portfolio Update in Progress:",
  message: "Project entries are currently being updated — project icons and download links will be updated soon."
};

export const projectsData = [
  {
      id: 1,
      title: "Fish Tank Control",
      description: "ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation", "ESP32"],
      codeUrl: "https://github.com/Armaan4477/Smart-Aquarium-Control",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Fish%20Tank%20Control/Smart-Aquarium-Control.zip",
      note: "This is an ESP32 project. You'll need an ESP32 board and the Arduino IDE to compile and upload the code. The zip file includes detailed wiring diagrams and setup instructions.",
      featured: false,
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
      codeUrl: "https://github.com/Armaan4477/Enhanced-E-HR-Management-System",
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/E-HR%20Mgnt%20System/E-HR%20Mgnt%20System.exe" },
        { name: "macOS-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/E-HR%20Mgnt%20System/E-HR%20Mgnt%20System(macos-arm).dmg" },
        { name: "macOS-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/E-HR%20Mgnt%20System/E-HR%20Mgnt%20System(macos-x64).dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/E-HR%20Mgnt%20System/E-HR%20Mgnt%20System(linux%20x64)" },
        { name: "Linux-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/E-HR%20Mgnt%20System/E-HR%20Mgnt%20System(linux%20arm)" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x PaintApp-x64' or 'chmod +x PaintApp-arm64' in the terminal before running the application.",
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
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Hangman/Hangman.exe" },
        { name: "macOS-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Hangman/Hangman(macos-arm).dmg" },
        { name: "macOS-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Hangman/Hangman(macos-x64).dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Hangman/Hangman(linux%20x64)" },
        { name: "Linux-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Hangman/Hangman(linux%20arm)" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x PaintApp-x64' or 'chmod +x PaintApp-arm64' in the terminal before running the application.",
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
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Ollama%20UI/Ollama%20UI.exe" },
        { name: "macOS-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Ollama%20UI/Ollama%20UI(macos-arm).dmg" },
        { name: "macOS-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Ollama%20UI/Ollama%20UI(macos-x64).dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Ollama%20UI/Ollama%20UI(linux%20x64)" },
        { name: "Linux-arm", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Ollama%20UI/Ollama%20UI(linux%20arm)" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x PaintApp-x64' or 'chmod +x PaintApp-arm64' in the terminal before running the application.",
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
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Paint%20App/PaintApp.exe" },
        { name: "macOS", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Paint%20App/PaintApp.dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Paint%20App/PaintApp-x64" },
        { name: "Linux-arm64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Paint%20App/PaintApp-arm64" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x PaintApp-x64' or 'chmod +x PaintApp-arm64' in the terminal before running the application.",
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
      previewAvailable: true,
      previewAvailableReason: "This is the portfolio website itself.",
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
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Quiz%20Game/QuizMaster.exe" },
        { name: "macOS", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Quiz%20Game/QuizMaster.dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Quiz%20Game/QuizMaster-x64" },
        { name: "Linux-arm64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Quiz%20Game/QuizMaster-arm64" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x QuizMaster-x64' or 'chmod +x QuizMaster-arm64' in the terminal before running the application.",
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
      downloadLinks: [
        { name: "TicTacToe", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/TicTacToe/TicTacToe.apk" },
        { name: "Noughts and Crosses", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Noughts-and-Crosses/Noughts-and-Crosses.apk" }
      ],
      note: "There are 2 versions available: one with lottie animations(TicTacToe) and one with pre-rendered animations(Noughts and Crosses) due to requirements of 2 different project submissions. You'll need to enable installation from unknown sources on your Android device to install it.",
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
      downloadLinks: [
        { name: "Windows", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Voting%20System/VotingSystem.exe" },
        { name: "macOS", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Voting%20System/VotingSystem.dmg" },
        { name: "Linux-x64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Voting%20System/VotingSystem-x64" },
        { name: "Linux-arm64", url: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Voting%20System/VotingSystem-arm64" }
      ],
      note: "For macOS: As there is no developer ID, you may need to allow the app to run in System Preferences > Security & Privacy > General. For Linux: Make sure to give execute permissions using 'chmod +x VotingSystem' or 'chmod +x VotingSystem-arm64' in the terminal before running the application.",
      featured: false,
      tags: ["java", "firebase"],
      year: "2023"
    },
    {
      id: 13,
      title: "Store-It",
      description: "A secure cloud storage application for uploading, organizing, and managing files with a clean user experience.",
      image: "/projects/storeit.png",
      technologies: ["Website","Next.js", "Storage"],
      codeUrl: "https://github.com/Armaan4477/Store-It",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Store%20It/Store-It.zip",
      note: "You will need to link the AWS services and then host the website.",
      featured: false,
      tags: ["website", "storage"],
      year: "2026"
    },
    {
      id: 14,
      title: "Atomberg Fan Control",
      description: "An IoT-based fan control project for managing Atomberg fan behavior with smart automation and remote operations.",
      image: "/projects/atomberg.png",
      technologies: ["IoT","Python"],
      codeUrl: "https://github.com/Armaan4477/Atomberg-Fan-Control",
      downloadLink:"https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Atomberg%20Control/Atomberg-Fan-Control.zip",
      note: "Add the API key and refresh token from your atomberg account in the code and then build the application to use it",
      featured: false,
      tags: ["iot", "automation"],
      year: "2026"
    },
    {
      id: 15,
      title: "Smart Parking System",
      description: "An end-to-end, multi-tier IoT smart parking management system with distributed ESP8266 slave nodes using ultrasonic sensors, an ESP32 master gateway, and real-time Firebase synchronization. Features include advance bay reservations with dynamic grace periods, automated spot swapping, in-app digital wallet payments, a native Android driver application, and a Next.js administrative dashboard with live analytics and device management.",
      image: "/projects/smart-parking.png",
      technologies: ["IoT", "ESP32", "Firebase", "Android", "Next.js"],
      noPreview: true,
      noPreviewReason: "This project is patented; Design Patent filed with the Indian Patent Office. Demos, firmware, and proprietary source code are restricted.",
      featured: true,
      tags: ["iot", "firebase", "website", "java"],
      year: "2025"
    },
    {
      id: 16,
      title: "Decentralized Flood Monitoring & Emergency Mesh Network",
      description: "A decentralized, infrastructure-independent disaster management network combining distributed ESP32 nodes, local TinyML intelligence, multi-hop Wi-Fi mesh routing, and 4G cellular gateways. Designed to provide continuous autonomous flood monitoring, hazard detection, offline emergency SOS broadcasts, PTT voice messaging, survivor check-ins, and evacuation routing across pre-disaster, during-disaster, and post-disaster lifecycles even during total grid and internet blackouts.",
      image: "/projects/flood-mesh-network.png",
      technologies: ["IoT", "ESP32", "TinyML", "Mesh Networking", "AI"],
      noPreview: true,
      noPreviewReason: "This project is currently being worked upon; live preview and demo will be available once development is completed.",
      note: "Project is actively being worked upon. Hardware prototype and mesh networking field trials are currently in progress.",
      featured: false,
      tags: ["iot", "ai"],
      year: "2026"
    },
    {
      id: 17,
      title: "Blockchain Donation Tracker",
      description: "A decentralized, transparent donation tracking system powered by Solidity smart contracts on the Monad EVM Testnet. Features categorized donations with custom purpose allocation, an immutable on-chain public ledger, real-time metrics with Ethers.js, and cryptographic access controls (onlyOwner) with the Checks-Effects-Interactions pattern for secure admin withdrawals via a modern dark glassmorphic React dashboard.",
      image: "/projects/donation-tracker.png",
      technologies: ["Solidity", "Blockchain", "React", "Ethers.js", "Web3"],
      codeUrl: "https://github.com/Armaan4477/Blockchain-Based-DonationTracker",
      demoUrl: "https://bcproject2026.vercel.app",
      featured: false,
      tags: ["website"],
      year: "2026"
    },
    {
      id: 18,
      title: "Drishti Stick",
      description: "An integrated assistive navigation ecosystem developed for SIH 2026 to empower visually impaired individuals with independent mobility. Combines Raspberry Pi 5 edge computing running low-latency YOLOv8n spatial obstacle detection, multi-sensor telemetry (ultrasonic proximity, MPU-6050 IMU, NEO-6M GPS), an offline Bluetooth RFCOMM Android companion app with turn-by-turn voice guidance and fall detection, and a Next.js/Firebase real-time telemetry dashboard.",
      image: "/projects/drishti-stick.png",
      technologies: ["IoT", "AI", "Raspberry Pi", "Python", "Android", "Next.js"],
      codeUrl: "https://github.com/Armaan4477/IoT-smart-cane-system",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Drishti%20Stick/Drishti-Stick.zip",
      note: "Includes Raspberry Pi 5 edge vision code, YOLOv8n spatial model, Android companion application APK, and Next.js cloud telemetry dashboard configurations.",
      featured: false,
      tags: ["iot", "ai", "python", "java", "firebase", "website"],
      year: "2026"
    },
    {
      id: 19,
      title: "Sentiment Analysis Studio & Multilingual NLP Toolkit",
      description: "A production-grade Natural Language Processing (NLP) suite designed for high-accuracy sentiment analysis, contextual sarcasm reasoning, 6-dimension aspect extraction (ABSA), and multi-class emotion profiling. Implements a hybrid multi-tier pipeline combining Qwen 2.5-3B-Instruct (bfloat16 causal LLM) for zero-shot English analysis and situational irony detection, CardiffNLP Twitter XLM-RoBERTa for native Devanagari Hindi classification, Meta NLLB-200 (600M Seq2Seq) for 200+ language translation, and lexical explainability badges, wrapped in an asynchronous PyQt6 desktop studio with interactive CLI and standalone translator tooling.",
      image: "/projects/sentiment-studio.png",
      technologies: ["Python", "PyQt6", "PyTorch", "Transformers", "LLM", "NLP"],
      codeUrl: "https://github.com/Armaan4477/Sentiment-Studio",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/Sentiment%20Analysis%20Studio/Sentiment-Studio.zip",
      note: "Includes the asynchronous PyQt6 desktop studio, Qwen 2.5-3B-Instruct model pipeline, CardiffNLP XLM-RoBERTa Devanagari classifier, Meta NLLB-200 neural translation module, interactive CLI, and pre-configured offline NLTK lexicons.",
      featured: false,
      tags: ["python", "ai"],
      year: "2026"
    },
    {
      id: 20,
      title: "Wi-Fi Controlled RC Car & Device Controller",
      description: "An embedded systems and IoT robotics project powered by the ESP8266 microcontroller driving dual DC motors via an L298N dual H-bridge driver. Features an on-chip web server for direct browser-based vehicle driving, low-latency REST endpoints for GPIO pin actuation, a Python Tkinter keyboard driving interface, and an asynchronous PyQt6 UDP discovery and 4-channel relay management suite.",
      image: "/projects/rc-car.png",
      technologies: ["IoT", "ESP8266", "Python", "PyQt6", "C++", "Hardware"],
      codeUrl: "https://github.com/Armaan4477/RC-car",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/RC%20Car/RC-Car.zip",
      note: "Includes ESP8266 Arduino C++ firmware, Python Tkinter keyboard driving utility, PyQt6 UDP device discovery & relay manager, and circuit pinout schematics.",
      featured: false,
      tags: ["iot", "python"],
      year: "2024"
    },
    {
      id: 21,
      title: "AutoPredict AI — Indian Used Car Price Predictor",
      description: "An end-to-end Machine Learning web application designed to forecast Indian used car resale market valuations with high precision. Powered by a tuned Random Forest Regressor (MAE ₹1.19 Lakh, R² 0.816) trained on Cars24 data, a high-performance FastAPI backend, and a modern Next.js 16/Tailwind CSS v4 frontend featuring 5-year future depreciation forecasting, cascaded taxonomy filters (Brand → Model → Variant), and interactive market intelligence analytics.",
      image: "/projects/autopredict-ai.png",
      technologies: ["Machine Learning", "FastAPI", "Next.js", "scikit-learn", "Python", "Tailwind CSS"],
      codeUrl: "https://github.com/Armaan4477/Car-Price-Predictor-ML",
      downloadLink: "https://github.com/Armaan4477/Portfolio-downloads/raw/refs/heads/main/AutoPredict%20AI/AutoPredict-AI.zip",
      note: "Includes serialized Random Forest ML pipeline (joblib), FastAPI backend service with OpenAPI/Swagger docs, and Next.js 16 App Router frontend with Recharts visualization suite.",
      featured: false,
      tags: ["ai", "python", "website"],
      year: "2026"
    }
  ];

/**
 * Evaluates whether a project has a live demo, downloadable demo, preview available with notice,
 * or no preview available, along with the reason/information notice.
 *
 * Supported formats on a project object:
 * - Live Demo:
 *     demoUrl: "https://..."
 * - Downloadable Demo:
 *     downloadLink: "https://..." or downloadLinks: [{ name: "...", url: "..." }]
 * - No Preview Available (e.g. patented, NDA, proprietary, in-development, hardware-dependent):
 *     noPreview: true,
 *     noPreviewReason: "This project is patented. Specifics and demo cannot be shared publicly."
 *     (Or noPreview: "Reason string", or previewUnavailable: true, or tags: [..., "no-preview"])
 * - Preview Available (e.g. currently viewing the site itself, in-app preview notice):
 *     previewAvailable: true,
 *     previewAvailableReason: "This is the portfolio website itself."
 *     (Or previewAvailable: "Reason string", or previewNotice: "Reason string", or tags: [..., "preview-available"])
 */
export const getPreviewStatus = (project) => {
  if (!project) return { type: 'none', hasNoPreview: false, hasPreviewAvailable: false, reason: null };

  // 1. Check for explicit no-preview flag or reason
  const noPreviewReason =
    project.noPreviewReason ||
    (typeof project.noPreview === 'string' && project.noPreview.trim() !== '' ? project.noPreview : null) ||
    (project.noPreview && typeof project.noPreview === 'object' ? project.noPreview.reason : null) ||
    (typeof project.previewUnavailable === 'string' && project.previewUnavailable.trim() !== '' ? project.previewUnavailable : null) ||
    null;

  const isTaggedNoPreview =
    Boolean(project.noPreview) ||
    Boolean(project.previewUnavailable) ||
    Boolean(project.noPreviewReason) ||
    project.previewAvailable === false ||
    (Array.isArray(project.tags) &&
      project.tags.some(
        t =>
          typeof t === 'string' &&
          (t.toLowerCase() === 'no-preview' ||
            t.toLowerCase() === 'no preview' ||
            t.toLowerCase() === 'no-preview-available')
      ));

  if (isTaggedNoPreview || noPreviewReason) {
    return {
      type: 'no-preview',
      hasNoPreview: true,
      hasPreviewAvailable: false,
      reason: noPreviewReason || "Preview is currently unavailable for this project."
    };
  }

  // 2. Check for explicit preview-available flag with info/reason
  // (e.g. Portfolio Website: "This is the portfolio website itself.")
  const previewAvailableReason =
    project.previewAvailableReason ||
    (typeof project.previewAvailable === 'string' && project.previewAvailable.trim() !== '' ? project.previewAvailable : null) ||
    (project.previewAvailable && typeof project.previewAvailable === 'object' ? project.previewAvailable.reason : null) ||
    (typeof project.previewNotice === 'string' && project.previewNotice.trim() !== '' ? project.previewNotice : null) ||
    (typeof project.previewInfo === 'string' && project.previewInfo.trim() !== '' ? project.previewInfo : null) ||
    project.previewReason ||
    null;

  const isTaggedPreviewAvailable =
    project.previewAvailable === true ||
    Boolean(project.previewAvailableReason) ||
    Boolean(project.previewNotice) ||
    Boolean(project.previewInfo) ||
    (Array.isArray(project.tags) &&
      project.tags.some(
        t =>
          typeof t === 'string' &&
          (t.toLowerCase() === 'preview-available' ||
            t.toLowerCase() === 'preview available')
      ));

  if (isTaggedPreviewAvailable || previewAvailableReason) {
    return {
      type: 'preview-available',
      hasPreviewAvailable: true,
      hasNoPreview: false,
      reason: previewAvailableReason || "Preview is available for this project."
    };
  }

  // 3. Live Demo URL
  if (project.demoUrl) {
    return {
      type: 'demo',
      url: project.demoUrl,
      hasNoPreview: false,
      hasPreviewAvailable: true,
      reason: null
    };
  }

  // 4. Downloadable Demo
  const hasDownloads = Boolean(
    project.downloadLink || (Array.isArray(project.downloadLinks) && project.downloadLinks.length > 0)
  );

  if (hasDownloads) {
    return {
      type: 'download',
      downloadLink: project.downloadLink,
      downloadLinks: project.downloadLinks,
      hasNoPreview: false,
      hasPreviewAvailable: true,
      reason: null
    };
  }

  return {
    type: 'none',
    hasNoPreview: false,
    hasPreviewAvailable: false,
    reason: null
  };
};

// Sorts all projects alphabetically by title (character-by-character, locale-aware)
export const getSortedProjects = () => {
  return [...projectsData].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
  );
};

export const getFeaturedProjects = () => {
  return getSortedProjects().filter(project => project.featured);
};
