import React from 'react';
import PageHeader from '../components/PageHeader';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { 
          name: 'Java', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          level: '70%' 
        },
        { 
          name: 'Python', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          level: '85%' 
        },
        { 
          name: 'JavaScript', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          level: '35%' 
        },
        { 
          name: 'C/C++', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
          level: '20%' 
        }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { 
          name: 'MySQL', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
          level: '70%' 
        },
        { 
          name: 'Firebase', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
          level: '65%' 
        }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { 
          name: 'Git', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          level: '80%' 
        },
        { 
          name: 'HTML5', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          level: '55%' 
        },
        { 
          name: 'CSS3', 
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          level: '45%' 
        }
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="My Skills" 
        subtitle="Technologies and tools I work with" 
      />

      <section className="skills-section">
        <div className="container">
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="skill-category" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <h2>{category.title}</h2>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-card">
                      <img src={skill.image} alt={skill.name} />
                      <h3>{skill.name}</h3>
                      <div className="skill-level">
                        <div className="progress-bar">
                          <div 
                            className="progress" 
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                        <span>{skill.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
