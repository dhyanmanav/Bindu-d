import { Play, Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificationsViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function CertificationsView({ setCurrentlyPlaying }: CertificationsViewProps) {
  const certifications = [
    {
      title: 'Programming, Data Structures and Algorithms using Python',
      issuer: 'NPTEL',
      date: '2025',
      duration: '12 weeks',
      color: 'from-yellow-600 to-yellow-900',
      description: 'Comprehensive course covering advanced programming concepts, data structures, and algorithmic problem-solving using Python.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      verifyLink: 'https://nptel.ac.in/courses/verify'
    },
    {
      title: 'Full Stack Web Development Foundation',
      issuer: 'Infosys Spring Board',
      date: '2025',
      duration: '8 weeks',
      color: 'from-indigo-600 to-indigo-900',
      description: 'End-to-end web development training covering frontend, backend, databases, and deployment strategies.',
      skills: ['HTML/CSS', 'JavaScript', 'Backend Development', 'Databases'],
      verifyLink: 'https://infyspringboard.onwingspan.com/web/en/page/verify'
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-yellow-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <Award size={64} className="lg:w-[100px] lg:h-[100px] text-white" />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Certification Album</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Certifications</h1>
            <p className="text-sm lg:text-base text-gray-300">{certifications.length} professional certifications • Continuous learning journey</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Certifications Grid */}
      <div className="px-4 lg:px-8 grid gap-4 lg:gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            onClick={() => setCurrentlyPlaying({ title: cert.title, artist: cert.issuer, type: 'certification' })}
            className="bg-gray-900/40 rounded-lg overflow-hidden hover:bg-gray-800/60 transition-all cursor-pointer group"
          >
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6">
              <div className={`w-full lg:w-48 h-48 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0 relative`}>
                <Award size={64} className="lg:w-20 lg:h-20 text-white/80" />
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl"
                >
                  <Play className="ml-0.5" fill="black" size={16} className="lg:w-5 lg:h-5" />
                </a>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-3 gap-3">
                  <div>
                    <h3 className="text-lg lg:text-2xl mb-2">{cert.title}</h3>
                    <p className="text-green-500 text-sm lg:text-base mb-2">{cert.issuer}</p>
                  </div>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full hover:border-white transition-colors text-xs lg:text-sm"
                  >
                    <ExternalLink size={14} />
                    Verify
                  </a>
                </div>
                
                <p className="text-sm lg:text-base text-gray-300 mb-4">{cert.description}</p>
                
                <div className="flex items-center flex-wrap gap-3 lg:gap-6 text-xs lg:text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                  <span className="hidden lg:inline">•</span>
                  <span>{cert.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIdx) => (
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

      {/* Stats */}
      <div className="px-4 lg:px-8 mt-8 lg:mt-12">
        <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl mb-4 lg:mb-6">Learning Stats</h2>
          <div className="grid grid-cols-3 gap-4 lg:gap-8">
            <div>
              <p className="text-2xl lg:text-4xl text-green-500 mb-1 lg:mb-2">2</p>
              <p className="text-xs lg:text-base text-gray-400">Certifications Earned</p>
            </div>
            <div>
              <p className="text-2xl lg:text-4xl text-green-500 mb-1 lg:mb-2">20+</p>
              <p className="text-xs lg:text-base text-gray-400">Weeks of Learning</p>
            </div>
            <div>
              <p className="text-2xl lg:text-4xl text-green-500 mb-1 lg:mb-2">100%</p>
              <p className="text-xs lg:text-base text-gray-400">Completion Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
