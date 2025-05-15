import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaGit, FaWindows, FaApple, FaLinux, FaDesktop, FaAndroid} from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiFirebase, SiIos } from 'react-icons/si';
import { GiSolderingIron } from 'react-icons/gi';
import SkillCard from '../../components/SkillCard';
import AnimatedSection from '../../components/animations/AnimatedSection';
import AnimatedCard from '../../components/animations/AnimatedCard';

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-red-600" size={40} />, level: 70 },
        { name: "Python", icon: <FaPython className="text-blue-500" size={40} />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={40} />, level: 35 },
        { name: "C/C++", icon: <SiCplusplus className="text-blue-600" size={40} />, level: 20 },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-800" size={40} />, level: 70 },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" size={40} />, level: 65 },
      ]
    },
    {
      category: "Tools & Frameworks",
      items: [
        { name: "Git", icon: <FaGit className="text-orange-600" size={40} />, level: 80 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" size={40} />, level: 55 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" size={40} />, level: 45 },
      ]
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Windows", icon: <FaWindows className="text-blue-500" size={40} />, level: 100 },
        { name: "macOS", icon: <FaApple className="text-gray-700 dark:text-gray-200" size={40} />, level: 100 },
        { name: "Linux", icon: <FaLinux className="text-yellow-600" size={40} />, level: 20 },
        { name: "IOS/IpadOS", icon: <SiIos className="text-gray-700 dark:text-gray-200" size={40} />, level: 100 },
        { name: "Android", icon: <FaAndroid className="text-green-500" size={40} />, level: 100 }
      ]
    },
    {
      category: "Hardware Skills",
      items: [
        { name: "Computer Building", icon: <FaDesktop className="text-gray-800 dark:text-gray-200" size={40} />, level: 100 },
        { name: "Soldering", icon: <GiSolderingIron className="text-gray-600 dark:text-gray-300" size={40} />, level: 60 },
      ]
    }
  ];

  return (
    <div>
      <AnimatedSection animation="fadeIn" amount={0.001} margin="0px 0px -5% 0px">
        <h1 className="page-title">My Skills</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          These are the technologies and tools I specialize in. I'm constantly learning and adding new skills to my skill set.
        </p>
      </AnimatedSection>

      {skills.map((category, index) => (
        <AnimatedSection 
          key={index} 
          animation="slideUp" 
          delay={index * 0.001} 
          className="mb-12" 
          amount={0.001}
          margin="0px 0px -5% 0px"
        >
          <h2 className="text-2xl font-bold mb-6 text-secondary dark:text-gray-200">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map((skill, skillIdx) => (
              <AnimatedCard 
                key={skillIdx} 
                index={skillIdx} 
                amount={0.001} 
                margin="0px 0px -5% 0px"
              >
                <SkillCard 
                  name={skill.name} 
                  icon={skill.icon} 
                  level={skill.level} 
                />
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection 
        animation="fadeIn" 
        delay={0.5} 
        className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg" 
        amount={0.001}
        margin="0px 0px -5% 0px"
      >
        <h2 className="text-2xl font-bold mb-4 text-secondary dark:text-gray-200">Always Learning</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Technology is always evolving, and so am I. I'm currently improving my knowledge in:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>NextJS</li>
          <li>Tailwind</li>
          <li>AWS Services</li>
          <li>Docker</li>
        </ul>
      </AnimatedSection>
    </div>
  )
}
