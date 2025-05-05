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
      3: 'bg-green-500 dark:bg-green-500',
      4: 'bg-green-700 dark:bg-green-300'
    };
    return colors[level] || colors[0];
  };

  const organizeContributionsByMonth = () => {
    if (!yearData.length) return [];
    
    const months = {};
    yearData.forEach(contrib => {
      const date = new Date(contrib.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      
      if (!months[monthKey]) {
        months[monthKey] = {
          name: date.toLocaleDateString('en-US', { month: 'short' }),
          year: date.getFullYear(),
          month: date.getMonth(),
          contributions: []
        };
      }
      
      months[monthKey].contributions.push(contrib);
    });
    
    return Object.values(months).sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      return a.month - b.month;
    });
  };
  
  const organizeMonthContributions = (monthData) => {
    if (!monthData.contributions.length) return { days: [] };
    
    const days = Array(7).fill().map(() => []);
    
    const sortedContributions = [...monthData.contributions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    
    const firstDate = new Date(sortedContributions[0].date);
    const lastDate = new Date(sortedContributions[sortedContributions.length - 1].date);
    
    const contributionMap = {};
    sortedContributions.forEach(contrib => {
      contributionMap[contrib.date] = contrib;
    });
    
    const currentDate = new Date(firstDate);
    currentDate.setDate(1);
    
    const endOfMonth = new Date(firstDate.getFullYear(), firstDate.getMonth() + 1, 0);
    
    while (currentDate <= endOfMonth) {
      const dayOfWeek = currentDate.getDay();
      const dateString = currentDate.toISOString().split('T')[0];
      const contribution = contributionMap[dateString] || { date: dateString, count: 0, level: 0 };
      
      days[dayOfWeek].push(contribution);
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return { days };
  };

  const monthlyGroups = organizeContributionsByMonth();

  const cellSize = 12; 
  const cellSpacing = 2;
  const rowSpacing = 10;
  const monthSpacing = 30;
  const totalCellWidth = cellSize + cellSpacing;

  const getMonthWidth = (month) => {
    if (!month || !month.contributions || !month.contributions.length) return 0;
    
    const dates = month.contributions.map(c => new Date(c.date));
    const firstDay = new Date(Math.min(...dates.map(d => d.getTime())));
    const lastDay = new Date(Math.max(...dates.map(d => d.getTime())));
    
    const daysInMonth = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();
    
    const columnsNeeded = Math.ceil(daysInMonth / 7);
    
    return columnsNeeded * totalCellWidth;
  };

  return (
    <div className="w-full">
      <div className="flex items-center mb-6 justify-center">
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
            <div className="relative overflow-x-auto pb-4">
              <div className="flex">
                {/* Day labels */}
                <div
                  className="flex flex-col mr-2"
                  style={{ marginTop: '44px' }}
                >
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div 
                      key={day} 
                      className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-end w-8 pr-1"
                      style={{ 
                        height: `${cellSize}px`, 
                        marginBottom: index === 6 ? '0px' : `${rowSpacing}px`,
                      }}
                    >
                      {day.substring(0, 2)}
                    </div>
                  ))}
                </div>
                
                {/* Contribution grid organized by months */}
                <div className="flex flex-col justify-start"> {}
                  {/* Month labels */}
                  <div className="flex mb-6 relative h-5">
                    {monthlyGroups.map((month, monthIndex) => {
                      let leftPosition = 0;
                      if (monthIndex > 0) {
                        leftPosition = monthlyGroups
                          .slice(0, monthIndex)
                          .reduce((acc, m) => acc + getMonthWidth(m) + monthSpacing, 0);
                      }
                      
                      const monthWidth = getMonthWidth(month);
                      
                      return (
                        <div 
                          key={monthIndex} 
                          className="text-xs text-gray-500 dark:text-gray-400 absolute"
                          style={{ 
                            left: `${leftPosition}px`,
                            width: `${monthWidth}px`,
                            textAlign: 'center'
                          }}
                        >
                          {month.name}
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Month groups with contribution cells */}
                  <div className="flex">
                    {monthlyGroups.map((month, monthIndex) => {
                      const { days } = organizeMonthContributions(month);
                      return (
                        <div
                          key={monthIndex}
                          className="flex flex-col"
                          style={{ 
                            marginRight: `${monthSpacing}px`
                          }}
                        >
                          {days.map((dayRow, rowIndex) => (
                            <div 
                              key={rowIndex} 
                              className="flex"
                              style={{ 
                                height: `${cellSize}px`, 
                                marginBottom: rowIndex === 6 ? '0px' : `${rowSpacing}px` 
                              }}
                            >
                              {dayRow.map((contribution, colIndex) => (
                                <div 
                                  key={colIndex}
                                  className={`rounded-sm ${getColorByLevel(contribution.level)}`}
                                  style={{ 
                                    width: `${cellSize}px`, 
                                    height: `${cellSize}px`, 
                                    margin: `0 ${cellSpacing/2}px` 
                                  }}
                                  title={`${new Date(contribution.date).toLocaleDateString()}: ${contribution.count} contributions`}
                                ></div>
                              ))}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mt-6 justify-end">
                <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Contributions:</span>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div 
                      key={level} 
                      className={`rounded-sm ${getColorByLevel(level)}`}
                      style={{ width: `${cellSize}px`, height: `${cellSize}px`, margin: `0 ${cellSpacing/2}px` }}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">Less → More</span>
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
