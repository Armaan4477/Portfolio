'use client'

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted || !theme) {
    return <div className="p-2 h-10 w-10"></div>;
  }
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-700 text-lg" />
      ) : (
        <FaSun className="text-yellow-400 text-lg" />
      )}
    </button>
  );
}
