import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma, FaJava, FaPython, FaGit } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiFirebase } from 'react-icons/si';
import SkillCard from '../../components/SkillCard';

export const metadata = {
  title: 'Skills | My Portfolio',
  description: 'My technical skills and competencies',
}

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
    }
  ];

  return (
    <div>
      <h1 className="page-title">My Skills</h1>
      <p className="text-lg text-gray-700 mb-8">
        These are the technologies and tools I specialize in. I'm constantly learning and adding new skills to my repertoire.
      </p>

      {skills.map((category, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-secondary">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {category.items.map((skill, skillIdx) => (
              <SkillCard 
                key={skillIdx} 
                name={skill.name} 
                icon={skill.icon} 
                level={skill.level} 
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-secondary">Always Learning</h2>
        <p className="text-gray-700">
          Technology is always evolving, and so am I. I'm currently improving my knowledge in:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
          <li>NextJS</li>
          <li>Tailwind</li>
          <li>AWS Services</li>
          <li>Docker</li>
        </ul>
      </section>
    </div>
  )
}
