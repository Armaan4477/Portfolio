'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: null,
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  // Use null as initial state to indicate theme is not determined yet
  const [theme, setTheme] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // On first render, check user's preference from localStorage or system preference
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light'); // Default to light if no preference is found
    }
    
    setMounted(true);
  }, []);
  
  useEffect(() => {
    // Apply theme class to document when theme changes, but only if theme is determined
    if (theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Save the theme preference to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
