import { Play, Briefcase, Award, Code, Heart } from 'lucide-react';

interface LibraryViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function LibraryView({ setCurrentlyPlaying }: LibraryViewProps) {
  const playlists = [
    {
      title: 'All Projects',
      count: '3 projects',
      icon: Briefcase,
      color: 'from-purple-600 to-purple-900',
      description: 'Complete collection of development work'
    },
    {
      title: 'Certifications',
      count: '2 certifications',
      icon: Award,
      color: 'from-yellow-600 to-yellow-900',
      description: 'Professional development achievements'
    },
    {
      title: 'Tech Stack',
      count: '24 skills',
      icon: Code,
      color: 'from-blue-600 to-blue-900',
      description: 'Technologies and frameworks mastered'
    },
    {
      title: 'Liked Achievements',
      count: '2 achievements',
      icon: Heart,
      color: 'from-pink-600 to-pink-900',
      description: 'Competition wins and recognitions'
    },
  ];

  const recentlyPlayed = [
    { title: 'Gaming Hub Event Platform', artist: 'React.js, Node.js', type: 'Project' },
    { title: 'React.js', artist: 'Frontend Framework', type: 'Skill' },
    { title: 'NPTEL Python Course', artist: 'NPTEL', type: 'Certification' },
    { title: 'IBM-Z Datathon', artist: 'Competition', type: 'Achievement' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="px-4 lg:px-8 pt-8 lg:pt-16 pb-6 lg:pb-8">
        <h1 className="text-4xl lg:text-6xl mb-3 lg:mb-4">Your Library</h1>
        <p className="text-sm lg:text-base text-gray-400">All your portfolio items in one place</p>
      </div>

      {/* Playlists Grid */}
      <div className="px-4 lg:px-8 mb-8 lg:mb-12">
        <h2 className="text-xl lg:text-2xl mb-4 lg:mb-6">Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              onClick={() => setCurrentlyPlaying({ 
                title: playlist.title, 
                artist: playlist.description, 
                type: 'playlist' 
              })}
              className="bg-gray-900/40 rounded-lg overflow-hidden hover:bg-gray-800/60 transition-all cursor-pointer group"
            >
              <div className="flex gap-3 lg:gap-4 p-4 lg:p-6">
                <div className={`w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br ${playlist.color} rounded-lg flex items-center justify-center flex-shrink-0 relative`}>
                  <playlist.icon size={32} className="lg:w-12 lg:h-12 text-white/80" />
                  <button className="absolute bottom-1 lg:bottom-2 right-1 lg:right-2 w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl">
                    <Play className="ml-0.5" fill="black" size={14} className="lg:w-4 lg:h-4" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base lg:text-xl mb-1 lg:mb-2">{playlist.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-400 mb-2 lg:mb-3 line-clamp-2">{playlist.description}</p>
                  <p className="text-xs lg:text-sm text-gray-500">{playlist.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div className="px-4 lg:px-8">
        <h2 className="text-xl lg:text-2xl mb-4 lg:mb-6">Recently Played</h2>
        <div className="space-y-2">
          {recentlyPlayed.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrentlyPlaying({ title: item.title, artist: item.artist, type: item.type.toLowerCase() })}
              className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center flex-shrink-0">
                <Play className="text-white" fill="white" size={16} className="lg:w-5 lg:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="mb-1 text-sm lg:text-base truncate">{item.title}</h3>
                <p className="text-xs lg:text-sm text-gray-400 truncate">{item.type} • {item.artist}</p>
              </div>
              <button className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all flex-shrink-0">
                <Play className="ml-0.5" fill="black" size={14} className="lg:w-4 lg:h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 lg:px-8 mt-8 lg:mt-12">
        <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 rounded-lg p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl mb-4 lg:mb-6">Portfolio Summary</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div>
              <p className="text-2xl lg:text-3xl text-green-500 mb-1 lg:mb-2">3</p>
              <p className="text-xs lg:text-sm text-gray-400">Major Projects</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl text-green-500 mb-1 lg:mb-2">24</p>
              <p className="text-xs lg:text-sm text-gray-400">Skills Mastered</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl text-green-500 mb-1 lg:mb-2">2</p>
              <p className="text-xs lg:text-sm text-gray-400">Certifications</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl text-green-500 mb-1 lg:mb-2">9.0</p>
              <p className="text-xs lg:text-sm text-gray-400">GPA Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
