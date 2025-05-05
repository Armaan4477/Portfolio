"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeYear, setActiveYear] = useState('2025');
  const [yearData, setYearData] = useState([]);
  const years = ['2023', '2024', '2025'];

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/Armaan4477');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub contributions');
        }
        const data = await response.json();
        setContributions(data);
        
        // Filter contributions for the active year
        filterContributionsByYear(data, activeYear);
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError('Failed to load GitHub contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    if (contributions) {
      filterContributionsByYear(contributions, activeYear);
    }
  }, [activeYear, contributions]);

  const filterContributionsByYear = (data, year) => {
    if (!data || !data.contributions) return;
    
    const yearContributions = data.contributions.filter(item => item.date.startsWith(year));
    setYearData(yearContributions);
  };

  const getTotalForYear = (year) => {
    if (!contributions || !contributions.total) return 0;
    return contributions.total[year] || 0;
  };

  const getColorByLevel = (level) => {
    const colors = {
      0: 'bg-gray-100 dark:bg-gray-700',
      1: 'bg-green-200 dark:bg-green-900',
      2: 'bg-green-400 dark:bg-green-700',
      3: 'bg-green-500 dark:bg-green-600',
      4: 'bg-green-700 dark:bg-green-500'
    };
    return colors[level] || colors[0];
  };

  // Group contributions by weeks for grid display
  const contributionsByWeek = [];
  if (yearData.length > 0) {
    const contributionsMap = new Map();
    yearData.forEach(contribution => {
      const date = new Date(contribution.date);
      const dayOfWeek = date.getDay(); // 0 for Sunday, 6 for Saturday
      const weekNumber = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
      
      if (!contributionsMap.has(weekNumber)) {
        contributionsMap.set(weekNumber, Array(7).fill(null));
      }
      
      const weekData = contributionsMap.get(weekNumber);
      weekData[dayOfWeek] = contribution;
    });
    
    // Convert map to array for rendering
    contributionsMap.forEach((week) => {
      contributionsByWeek.push(week);
    });
  }

  return (
    <div className="w-full">
      <div className="flex items-center mb-6 justify-between">
        <div className="flex items-center gap-2">
          <FaGithub size={24} className="text-gray-700 dark:text-gray-300" />
          <h3 className="text-xl font-semibold">GitHub Contributions</h3>
        </div>
        
        <div className="flex gap-2">
          {years.map((year) => (
            <button
              key={year}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeYear === year
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveYear(year)}
            >
              {year} ({getTotalForYear(year)})
            </button>
          ))}
        </div>
      </div>
      
      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}
      
      {error && (
        <div className="text-red-500 text-center py-4">
          {error}
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeYear}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="contributions-grid"
        >
          {!loading && !error && yearData.length > 0 && (
            <div className="relative overflow-x-auto">
              <div className="flex text-xs text-gray-500 dark:text-gray-400 mb-1 pl-8">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="w-3 mx-1 text-center">{day[0]}</div>
                ))}
              </div>
              
              <div className="flex flex-col">
                {contributionsByWeek.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex items-center mb-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 w-8 text-right pr-2">
                      {weekIndex % 4 === 0 && week.some(day => day) ? 
                        new Date(week.find(day => day)?.date).toLocaleDateString('en-US', {month: 'short'}) : ''}
                    </span>
                    <div className="flex">
                      {week.map((day, dayIndex) => (
                        <div 
                          key={dayIndex}
                          className={`w-3 h-3 m-[1px] rounded-sm ${day ? getColorByLevel(day.level) : 'bg-gray-100 dark:bg-gray-700'}`}
                          title={day ? `${day.date}: ${day.count} contributions` : 'No contributions'}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mt-2 justify-end">
                <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Contributions:</span>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div 
                      key={level} 
                      className={`w-3 h-3 m-[1px] rounded-sm ${getColorByLevel(level)}`}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">Less → More</span>
              </div>
            </div>
          )}
          
          {!loading && !error && yearData.length === 0 && (
            <div className="py-8 text-center text-gray-500 dark:text-gray-400">
              No contributions found for {activeYear}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GitHubContributions;
