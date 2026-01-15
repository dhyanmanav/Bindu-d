import { Play, Trophy, Heart, Award, Star } from 'lucide-react';

interface AchievementsViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function AchievementsView({ setCurrentlyPlaying }: AchievementsViewProps) {
  const achievements = [
    {
      title: 'IBM-Z Datathon Participated',
      category: 'Competition',
      description: 'Created Child Security System using Python in a data coding competition',
      date: '2025',
      icon: Trophy,
      color: 'from-yellow-600 to-yellow-900',
      impact: 'Developed innovative solution for child safety using data analytics',
      skills: ['Python', 'Data Analysis', 'Machine Learning', 'Problem Solving']
    },
    {
      title: 'Abstract Submission & Participation',
      category: 'Research',
      description: 'Successfully submitted and presented research abstract at technical conference',
      date: '2025',
      icon: Award,
      color: 'from-purple-600 to-purple-900',
      impact: 'Contributed to academic research and knowledge sharing',
      skills: ['Research', 'Technical Writing', 'Presentation', 'Communication']
    },
  ];

  const stats = [
    { label: 'Competitions Won', value: '1', icon: Trophy },
    { label: 'Conferences', value: '1+', icon: Star },
    { label: 'Projects Completed', value: '3', icon: Heart },
    { label: 'GPA', value: '9.0', icon: Award },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-pink-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-pink-400 to-pink-700 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <Heart size={64} className="lg:w-[100px] lg:h-[100px] text-white" fill="white" />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Liked Achievements</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Achievements</h1>
            <p className="text-sm lg:text-base text-gray-300">Bindu D • {achievements.length} major achievements • Competition winner</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="px-4 lg:px-8 mb-8 lg:mb-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-4 lg:p-6 rounded-lg text-center"
            >
              <stat.icon className="mx-auto mb-2 lg:mb-3 text-green-500" size={24} className="lg:w-8 lg:h-8" />
              <p className="text-2xl lg:text-4xl text-green-500 mb-1 lg:mb-2">{stat.value}</p>
              <p className="text-xs lg:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements List */}
      <div className="px-4 lg:px-8 space-y-4 lg:space-y-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            onClick={() => setCurrentlyPlaying({ 
              title: achievement.title, 
              artist: achievement.category, 
              type: 'achievement' 
            })}
            className="bg-gray-900/40 rounded-lg overflow-hidden hover:bg-gray-800/60 transition-all cursor-pointer group"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-8">
              <div className={`w-full lg:w-48 h-48 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0 relative`}>
                <achievement.icon size={64} className="lg:w-20 lg:h-20 text-white/80" />
                <button className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl">
                  <Play className="ml-0.5" fill="black" size={16} className="lg:w-5 lg:h-5" />
                </button>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-xs mb-3">
                      {achievement.category}
                    </span>
                    <h3 className="text-xl lg:text-3xl mb-1 lg:mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-xs lg:text-sm">{achievement.date}</p>
                  </div>
                  <Heart className="text-pink-500 flex-shrink-0" fill="currentColor" size={20} className="lg:w-6 lg:h-6" />
                </div>
                
                <p className="text-sm lg:text-lg text-gray-300 mb-4">{achievement.description}</p>
                
                <div className="bg-black/40 rounded-lg p-3 lg:p-4 mb-4">
                  <p className="text-xs lg:text-sm text-gray-400 mb-2">Impact:</p>
                  <p className="text-sm lg:text-base text-gray-200">{achievement.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recognition */}
      <div className="px-4 lg:px-8 mt-8 lg:mt-12">
        <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/40 rounded-lg p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl mb-3 lg:mb-4">Recognition & Awards</h2>
          <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-6">
            Recognized for excellence in competitive programming, data science, and research contributions. 
            Passionate about solving real-world problems through technology and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-500 rounded-full text-sm">
              <Trophy size={16} />
              Competition Winner
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-500 rounded-full text-sm">
              <Star size={16} />
              Research Contributor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
