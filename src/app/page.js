import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import getImagePath from '../utils/imageLoader';
import AnimatedSection from '../components/animations/AnimatedSection';
import AnimatedCard from '../components/animations/AnimatedCard';
import SequentialTypewriter from '../components/SequentialTypewriter';

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
      codeUrl: "https://github.com/Armaan4477/Cross-Platform-Media-Sharing"
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
      <AnimatedSection animation="slideInRight" delay={0.5} className="section bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
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
            <p className="text-gray-600 dark:text-gray-300">Java, Python, C/C++, HTML, CSS, JavaScript</p>
          </AnimatedCard>
          <AnimatedCard index={1} className="card">
            <h3 className="text-xl font-semibold mb-2">Technologies</h3>
            <p className="text-gray-600 dark:text-gray-300">Firebase, IoT Development, Windows, macOS, Linux</p>
          </AnimatedCard>
          <AnimatedCard index={2} className="card">
            <h3 className="text-xl font-semibold mb-2">Hardware</h3>
            <p className="text-gray-600 dark:text-gray-300">Computer Building, Soldering, Hardware Integration</p>
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

      {/* Social Links */}
      <AnimatedSection animation="slideUp" className="section text-center">
        <h2 className="page-title">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <AnimatedCard index={0}>
            <a href="https://github.com/Armaan4477" target="_blank" rel="noopener noreferrer" className="p-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center">
              <FaGithub className="text-gray-800 dark:text-white" size={30} />
            </a>
          </AnimatedCard>
          <AnimatedCard index={1}>
            <a href="https://www.linkedin.com/in/armaan-nakhuda-756492235/" target="_blank" rel="noopener noreferrer" className="p-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center">
              <FaLinkedin className="text-blue-600" size={30} />
            </a>
          </AnimatedCard>
          <AnimatedCard index={2}>
            <a href="mailto:nakhudaarmaan66@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex items-center justify-center">
              <FaEnvelope className="text-red-500" size={30} />
            </a>
          </AnimatedCard>
        </div>
      </AnimatedSection>
    </div>
  )
}
