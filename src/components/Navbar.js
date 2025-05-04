'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverDuration, setHoverDuration] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinSpeed, setSpinSpeed] = useState(0);
  const hoverTimerRef = useRef(null);
  
  // Add effect to trigger animation after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Handle hover duration and spin animation
  useEffect(() => {
    if (isHovering) {
      hoverTimerRef.current = setInterval(() => {
        setHoverDuration(prev => {
          const newDuration = prev + 0.1;
          
          // Start spinning after 5 seconds
          if (newDuration >= 5 && !isSpinning) {
            setIsSpinning(true);
          }
          
          // Increase spin speed the longer the hover
          if (newDuration >= 5) {
            // Calculate speed based on how long past 5 seconds 
            // (capped at a reasonable maximum speed)
            const newSpeed = Math.min(20, (newDuration - 5) / 2);
            setSpinSpeed(newSpeed);
          }
          
          return newDuration;
        });
      }, 100);
    } else {
      clearInterval(hoverTimerRef.current);
      setHoverDuration(0);
      setIsSpinning(false);
      setSpinSpeed(0);
    }
    
    return () => {
      clearInterval(hoverTimerRef.current);
    };
  }, [isHovering]);
  
  // Generate dynamic spin animation style
  const getSpinStyle = () => {
    if (!isSpinning) return {};
    
    return {
      animation: `spin ${Math.max(5 - spinSpeed * 0.2, 0.5)}s linear infinite`,
    };
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const isActive = (path) => pathname === path;

  return (
    <>
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      
      <nav className="bg-white dark:bg-gray-800 shadow-xs sticky top-0 z-10 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/" 
              className="flex items-center group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className={`transform transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                <Image
                  src="/projects/icon.png"
                  alt="Personal Icon"
                  width={32}
                  height={32}
                  className={`mr-2 transition-transform duration-300 ${!isSpinning ? 'group-hover:rotate-6 group-hover:scale-110' : ''}`}
                  style={getSpinStyle()}
                />
              </div>
              <span className={`text-xl font-bold text-primary dark:text-blue-400 transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} group-hover:text-blue-600 dark:group-hover:text-blue-300`}>
                Armaan N
                {isSpinning && <span className="text-xs ml-1">🌀</span>}
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <Link 
                    href={link.path}
                    className={`${
                      isActive(link.path) 
                        ? 'text-primary dark:text-blue-400 font-medium' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                    } transition-colors py-2`}
                  >
                    {link.name}
                  </Link>
                  <div 
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 origin-left transition-transform duration-300 ease-out
                      ${isActive(link.path) ? 'bg-primary dark:bg-blue-400 scale-x-100' : 'bg-primary dark:bg-blue-400 group-hover:scale-x-100'}`}
                  ></div>
                </div>
              ))}
              <ThemeToggle />
            </div>
            
            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 ml-4 focus:outline-hidden"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.path} className="relative group">
                    <Link 
                      href={link.path}
                      className={`${
                        isActive(link.path) 
                          ? 'text-primary dark:text-blue-400 font-medium' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                      } transition-colors block px-2 py-1`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <div 
                      className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ease-out
                        ${isActive(link.path) ? 'bg-primary dark:bg-blue-400 scale-x-100' : 'bg-primary dark:bg-blue-400 scale-x-0 group-hover:scale-x-100'}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
