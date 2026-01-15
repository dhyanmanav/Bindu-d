import { Play, GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EducationViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function EducationView({ setCurrentlyPlaying }: EducationViewProps) {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-cyan-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-cyan-400 to-cyan-700 rounded-lg shadow-2xl overflow-hidden flex-shrink-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjIxNzQ5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Education"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Education Track</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Education</h1>
            <p className="text-sm lg:text-base text-gray-300">Academic excellence • Top performer</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Education Details */}
      <div className="px-4 lg:px-8">
        <div
          onClick={() => setCurrentlyPlaying({ 
            title: 'B.E in Computer Science Engineering', 
            artist: 'Global Academy of Technology', 
            type: 'education' 
          })}
          className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-lg p-4 lg:p-8 cursor-pointer hover:from-cyan-800/40 hover:to-blue-800/40 transition-all"
        >
          <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400 to-cyan-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap size={48} className="lg:w-16 lg:h-16 text-white" />
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-xl lg:text-3xl mb-2 lg:mb-3">B.E in Computer Science Engineering</h2>
              <p className="text-base lg:text-xl text-green-500 mb-3 lg:mb-4">Global Academy of Technology</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base text-gray-300">
                  <MapPin size={16} className="lg:w-5 lg:h-5 text-gray-400" />
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base text-gray-300">
                  <Calendar size={16} className="lg:w-5 lg:h-5 text-gray-400" />
                  <span>September 2023 - July 2027</span>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-4 lg:p-6">
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <TrendingUp className="text-green-500" size={24} className="lg:w-8 lg:h-8" />
                  <div>
                    <p className="text-xs lg:text-sm text-gray-400">Current GPA</p>
                    <p className="text-3xl lg:text-5xl text-green-500">9.0/10</p>
                  </div>
                </div>
                <div className="w-full h-2 lg:h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-8 lg:mt-12">
          <h2 className="text-xl lg:text-3xl mb-4 lg:mb-6">Academic Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-gray-900/40 p-4 lg:p-6 rounded-lg">
              <div className="text-3xl lg:text-4xl text-green-500 mb-2 lg:mb-3">9.0</div>
              <p className="text-sm lg:text-base text-gray-300">Outstanding GPA</p>
              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">Top 10% of class</p>
            </div>
            <div className="bg-gray-900/40 p-4 lg:p-6 rounded-lg">
              <div className="text-3xl lg:text-4xl text-green-500 mb-2 lg:mb-3">3+</div>
              <p className="text-sm lg:text-base text-gray-300">Years of Study</p>
              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">2023 - 2027</p>
            </div>
            <div className="bg-gray-900/40 p-4 lg:p-6 rounded-lg">
              <div className="text-3xl lg:text-4xl text-green-500 mb-2 lg:mb-3">100+</div>
              <p className="text-sm lg:text-base text-gray-300">Projects Completed</p>
              <p className="text-xs lg:text-sm text-gray-500 mt-1 lg:mt-2">Academic & Personal</p>
            </div>
          </div>
        </div>

        {/* Core Subjects */}
        <div className="mt-8 lg:mt-12">
          <h2 className="text-xl lg:text-3xl mb-4 lg:mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'Database Management Systems',
              'Web Technologies',
              'Software Engineering',
              'Operating Systems',
              'Computer Networks',
              'Cloud Computing',
            ].map((subject, idx) => (
              <div
                key={idx}
                className="bg-gray-900/40 p-3 lg:p-4 rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm lg:text-base text-gray-300">{subject}</p>
                  <button className="w-7 h-7 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Play className="ml-0.5" fill="black" size={10} className="lg:w-3 lg:h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
