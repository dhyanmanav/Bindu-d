import { Play, Code2, Database, Wrench, Globe } from 'lucide-react';

interface SkillsViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function SkillsView({ setCurrentlyPlaying }: SkillsViewProps) {
  const skillCategories = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'from-red-600 to-red-900',
      skills: [
        { name: 'C', level: 90 },
        { name: 'C++', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 88 },
        { name: 'JavaScript', level: 92 },
      ]
    },
    {
      category: 'Frontend',
      icon: Globe,
      color: 'from-blue-600 to-blue-900',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 93 },
        { name: 'React.js', level: 90 },
        { name: 'Angular', level: 85 },
        { name: 'Vue.js', level: 82 },
        { name: 'Bootstrap', level: 88 },
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-600 to-green-900',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'REST APIs', level: 92 },
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'from-purple-600 to-purple-900',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 90 },
      ]
    },
    {
      category: 'Tools',
      icon: Wrench,
      color: 'from-orange-600 to-orange-900',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 78 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 82 },
      ]
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-blue-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <Code2 size={64} className="lg:w-[120px] lg:h-[120px] text-white/80" />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Skill Playlist</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Explore Skills</h1>
            <p className="text-sm lg:text-base text-gray-300">Master of multiple technologies • 5 categories • 24 skills</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Skill Categories */}
      <div className="px-4 lg:px-8 space-y-8 lg:space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                <category.icon size={24} className="lg:w-8 lg:h-8" />
              </div>
              <div>
                <h2 className="text-xl lg:text-3xl">{category.category}</h2>
                <p className="text-xs lg:text-sm text-gray-400">{category.skills.length} skills mastered</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              {category.skills.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  onClick={() => setCurrentlyPlaying({ title: skill.name, artist: category.category, type: 'skill' })}
                  className="bg-gray-900/40 p-4 lg:p-6 rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <h3 className="text-base lg:text-lg">{skill.name}</h3>
                    <button className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <Play className="ml-0.5" fill="black" size={14} className="lg:w-4 lg:h-4" />
                    </button>
                  </div>
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{skill.level}% proficiency</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
