import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project, featured = false }) {
  return (
    <div className={`project-card bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2 ${featured ? 'featured' : ''}`}>
      <div className="project-image relative h-48 overflow-hidden">
        {project.image && (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-transform duration-500 hover:scale-105 object-cover"
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <div className="project-tags mb-3 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex justify-between mt-auto">
          {project.codeUrl && (
            <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <FaGithub className="mr-2" /> GitHub
            </Link>
          )}
          
          {project.demoUrl && (
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-800">
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
