import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import getImagePath from '../utils/imageLoader';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Automated ESP",
      description: "IoT solution for ESP automation with smart controls. Features include software toggles, hardware override switches, and temperature sensor integration with email status updates.",
      image: "/projects/esp.png",
      technologies: ["IoT", "Automation", "ESP8266"],
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

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m <span className="text-primary">Armaan N</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600">
            Software Developer
          </h2>
          <p className="text-lg text-gray-700">
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
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
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
        </div>
      </section>

      {/* About Me Section */}
      <section className="section bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
        <h2 className="page-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-gray-700 dark:text-gray-300">Hi there! I'm Armaan, I'm passionate about technology, F1 and cars. I have been interested in tech since I'm 5 years old, with skills of building computers and handling software tasks since then.</p>
            <p className="text-gray-700 dark:text-gray-300">Currently I'm building myself with knowledge in softwares and coding, with expertise in Java, Python and Firebase and basic knowledge of C/C++, HTML, CSS and JS, I focus on building efficient, user-friendly solutions.</p>
            <p className="text-gray-700 dark:text-gray-300">I'm constantly learning and expanding my skillset to stay at the forefront of technology.</p>
            <p className="text-gray-700 dark:text-gray-300">I'm fluent in both Windows and macOS operating systems, with basic knowledge of Linux systems for development and deployment.</p>
            <p className="text-gray-700 dark:text-gray-300">Beyond software, I have hands-on experience with electrical work including soldering, IoT device development, and hardware integration projects.</p>
            <p className="text-gray-700 dark:text-gray-300">In my free time, I enjoy working on personal projects and contributing to open-source initiatives.</p>
          </div>
          <div className="md:col-span-1">
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
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section">
        <h2 className="page-title">Featured Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p className="text-gray-600">Java, Python, C/C++, HTML, CSS, JavaScript</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Technologies</h3>
            <p className="text-gray-600">Firebase, IoT Development, Windows, macOS, Linux</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Hardware</h3>
            <p className="text-gray-600">Computer Building, Soldering, Hardware Integration</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/skills" className="inline-flex items-center text-primary font-medium hover:underline">
            See all skills <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <h2 className="page-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition">
            View All Projects <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Social Links */}
      <section className="section text-center">
        <h2 className="page-title">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Armaan4477" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaGithub className="text-gray-800" size={30} />
          </a>
          <a href="https://www.linkedin.com/in/armaan-nakhuda-756492235/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaLinkedin className="text-blue-600" size={30} />
          </a>
          <a href="mailto:nakhudaarmaan66@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-red-500" size={30} />
          </a>
        </div>
      </section>
    </div>
  )
}
