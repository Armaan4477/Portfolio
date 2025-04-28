export default function SkillCard({ name, icon, level }) {
  return (
    <div className="card flex flex-col items-center p-6">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <p className="text-sm text-gray-600">{level}% proficiency</p>
    </div>
  );
}
