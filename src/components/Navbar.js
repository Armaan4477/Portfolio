'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-xs sticky top-0 z-10 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary dark:text-blue-400">
            Armaan N
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`${
                  isActive(link.path) 
                    ? 'text-primary dark:text-blue-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                } transition-colors`}
              >
                {link.name}
              </Link>
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
                <Link 
                  key={link.path} 
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
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
