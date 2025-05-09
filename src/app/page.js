'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import GitHubContributions from '../components/GitHubContributions';
import getImagePath from '../utils/imageLoader';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import SequentialTypewriter from '../components/SequentialTypewriter';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Automated ESP",
      description: "ESP-based automation system that controls two relays with advanced scheduling capabilities. Features include software toggles, hardware override switches, and temperature sensor integration. The system sends status updates via email every 90 minutes and maintains persistent logs even during power outages.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation", "ESP32"],
      codeUrl: "https://github.com/Armaan4477/Automated-ESP"
    },
    {
      id: 2,
      title: "DataDash",
      description: "Cross platform data sharing app with real-time synchronization capabilities between devices.",
      image: "/projects/datadash.png",
      technologies: ["Cross-Platform", "Java", "Python"],
      codeUrl: "https://github.com/Armaan4477/Cross-Platform-Media-Sharing",
      demoUrl: "https://datadashshare.vercel.app"
    }
  ];

  const aboutMeText = [
    "Hi there! I'm Armaan, I'm passionate about technology, F1 and cars. I have been interested in tech since I'm 5 years old, with skills of building computers and handling software tasks since then.",
    "Currently I'm building myself with knowledge in softwares and coding, with expertise in Java, Python and Firebase and basic knowledge of C/C++, HTML, CSS and JS, I focus on building efficient, user-friendly solutions.",
    "I'm constantly learning and expanding my skillset to stay at the forefront of technology.",
    "I'm fluent in both Windows and macOS operating systems, with basic knowledge of Linux systems for development and deployment.",
    "Beyond software, I have hands-on experience with electrical work including soldering, IoT device development, and hardware integration projects.",
    "In my free time, I enjoy working on personal projects and contributing to open-source initiatives."
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <AnimatedSection animation="fadeIn" className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m <span className="text-primary">Armaan N</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            Software Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Passionate about technology, F1 and cars.
          </p>
          <div className="pt-4 flex gap-4">
            <Link href="/projects" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2">
              View Projects <FaArrowRight />
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-gray-100 transition">
              Contact Me
            </Link>
          </div>
        </div>
        <AnimatedSection animation="scaleUp" delay={0.3} className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
            <Image 
              src={getImagePath("/projects/arm.jpeg")}
              alt="Armaan N"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </AnimatedSection>

      {/* About Me Section */}
      <AnimatedSection animation="slideInRight" delay={0.5} className="section bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="page-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <SequentialTypewriter 
              paragraphs={aboutMeText}
              delay={20}
              className="text-gray-700 dark:text-gray-300"
            />
          </div>
          <AnimatedSection animation="slideInRight" delay={0.2} className="md:col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="card text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>
              <div className="card text-center py-8">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Skills</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Featured Skills */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">Featured Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard index={0} className="card">
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-600 dark:text-gray-300">Python, Java, Firebase, IoT Development</p>
          </AnimatedCard>
          <AnimatedCard index={1} className="card">
            <h3 className="text-xl font-semibold mb-2">Operating Systems</h3>
            <p className="text-gray-600 dark:text-gray-300">macOS, Windows</p>
          </AnimatedCard>
          <AnimatedCard index={2} className="card">
            <h3 className="text-xl font-semibold mb-2">Hardware</h3>
            <p className="text-gray-600 dark:text-gray-300">Computer Building, Soldering</p>
          </AnimatedCard>
        </div>
        <div className="mt-6 text-center">
          <Link href="/skills" className="inline-flex items-center text-primary font-medium hover:underline">
            See all skills <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </AnimatedSection>

      {/* Featured Projects */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedCard key={project.id} index={index} className="h-full">
              <ProjectCard project={project} />
            </AnimatedCard>
          ))}
        </div>
        <AnimatedSection animation="fadeIn" delay={0.5} className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition">
            View All Projects <FaArrowRight className="ml-2" />
          </Link>
        </AnimatedSection>
      </AnimatedSection>

      {/* GitHub Contributions */}
      <AnimatedSection animation="slideUp" className="section">
        <h2 className="page-title">
          <span className="flex items-center">
            <FaGithub size={28} className="text-gray-700 dark:text-gray-300 mr-2" />
            GitHub Activity
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Check out my GitHub contributions and activity.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <GitHubContributions />
        </div>
      </AnimatedSection>

      {/* Social Links */}
      <AnimatedCard index={3} className="section text-center">
        <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-blue-400">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <SocialButton 
            href="https://github.com/Armaan4477" 
            icon={<FaGithub size={24} />}
            label="GitHub"
            bgColor="bg-gray-800 dark:bg-gray-700"
            textColor="text-white" 
          />
          <SocialButton 
            href="https://www.linkedin.com/in/armaan-nakhuda-756492235/" 
            icon={<FaLinkedin size={24} />}
            label="LinkedIn"
            bgColor="bg-blue-600"
            textColor="text-white" 
          />
          <SocialButton 
            href="mailto:nakhudaarmaan66@gmail.com" 
            icon={<FaEnvelope size={24} />}
            label="Email"
            bgColor="bg-red-500"
            textColor="text-white" 
          />
        </div>
      </AnimatedCard>
    </div>
  )
}

// New component for animated social buttons
function SocialButton({ href, icon, label, bgColor, textColor }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const boxShadow = useMotionTemplate`0px 5px 15px rgba(0, 0, 0, ${useMotionValue(0)})`;

  // Check if this is the GitHub button to apply special styling in dark mode
  const isGitHub = href.includes('github.com');
  const finalBgColor = isGitHub ? `${bgColor} dark:bg-gray-700` : bgColor;

  return (
    <motion.a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className={`relative p-4 rounded-full shadow-md ${finalBgColor} ${textColor} overflow-hidden flex items-center justify-center`}
      style={{ boxShadow }}
      whileHover={{ 
        scale: 1.15,
        y: -5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      onMouseMove={(e) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        x.set((e.clientX - centerX) / 5);
        y.set((e.clientY - centerY) / 5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      aria-label={label}
    >
      {icon}
      <motion.span 
        className="absolute inset-0 bg-white dark:bg-gray-800 opacity-0"
        whileHover={{ opacity: 0.15 }}
        style={{ 
          filter: "blur(15px)",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "100%",
          height: "100%"
        }}
      />
    </motion.a>
  );
}
