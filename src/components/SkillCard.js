export default function SkillCard({ name, icon, level }) {
  return (
    <div className="card flex flex-col items-center p-6 dark:bg-gray-800 h-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-white">{name}</h3>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <div 
          className="bg-primary dark:bg-blue-500 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400">{level}% proficiency</p>
    </div>
  );
}
