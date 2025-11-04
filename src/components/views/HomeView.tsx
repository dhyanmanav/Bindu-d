import { Play, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function HomeView({ setCurrentlyPlaying }: HomeViewProps) {
  const recentProjects = [
    {
      title: 'Gaming Hub Event Platform',
      tech: 'React.js, Node.js, MongoDB',
      color: 'from-purple-600 to-purple-900',
      description: 'Event creation & real-time scheduling',
      link: 'https://github.com/bindu-draj/gaming-hub'
    },
    {
      title: 'E-Commerce Platform',
      tech: 'Angular, Django, PostgreSQL',
      color: 'from-blue-600 to-blue-900',
      description: 'Secure payments & order tracking',
      link: 'https://github.com/bindu-draj/ecommerce-platform'
    },
    {
      title: 'Portfolio Website',
      tech: 'React.js, GitHub Actions',
      color: 'from-green-600 to-green-900',
      description: 'Responsive SPA with animations',
      link: 'https://github.com/bindu-draj/portfolio'
    },
  ];

  const topSkills = [
    { name: 'React.js', plays: '1.2M', img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400' },
    { name: 'Node.js', plays: '980K', img: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400' },
    { name: 'Python', plays: '850K', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400' },
    { name: 'MongoDB', plays: '720K', img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400' },
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="relative min-h-[300px] lg:h-96 bg-gradient-to-b from-green-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-green-400 to-green-700 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden flex-shrink-0">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzYyMTcwMzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Developer workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Portfolio</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Bindu D</h1>
            <p className="text-base lg:text-xl text-gray-300 mb-2 lg:mb-4">Full Stack Developer • GPA: 9/10</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-6 text-xs lg:text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="lg:w-4 lg:h-4" />
                Bangalore, Karnataka
              </span>
              <span className="hidden lg:inline">•</span>
              <span>15 Skills</span>
              <span className="hidden lg:inline">•</span>
              <span>3 Major Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="px-4 lg:px-8 py-4 lg:py-6 flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
        <a 
          href="mailto:bindukushi1621@gmail.com"
          className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:scale-105 transition-all"
        >
          <Mail size={18} className="lg:w-5 lg:h-5" />
        </a>
        <a 
          href="https://github.com/bindu-draj"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:scale-105 transition-all"
        >
          <Github size={18} className="lg:w-5 lg:h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:scale-105 transition-all"
        >
          <Linkedin size={18} className="lg:w-5 lg:h-5" />
        </a>
        <a 
          href="tel:+918088428745"
          className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-white hover:scale-105 transition-all"
        >
          <Phone size={18} className="lg:w-5 lg:h-5" />
        </a>
      </div>

      {/* Featured Projects */}
      <div className="px-4 lg:px-8 mt-6 lg:mt-8">
        <h2 className="text-xl lg:text-2xl mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {recentProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setCurrentlyPlaying({ title: project.title, artist: project.tech, type: 'project' })}
              className="bg-gray-900/40 p-4 lg:p-5 rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${project.color} rounded mb-3 lg:mb-4 shadow-lg flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <Play className="text-white/80" size={40} className="lg:w-12 lg:h-12" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-2 lg:bottom-3 right-2 lg:right-3 w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-xl"
                >
                  <Play className="ml-0.5" fill="black" size={18} className="lg:w-5 lg:h-5" />
                </a>
              </div>
              <h3 className="mb-1 lg:mb-2 text-sm lg:text-base">{project.title}</h3>
              <p className="text-xs lg:text-sm text-gray-400 line-clamp-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Skills */}
      <div className="px-4 lg:px-8 mt-8 lg:mt-12">
        <h2 className="text-xl lg:text-2xl mb-4">Top Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {topSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setCurrentlyPlaying({ title: skill.name, artist: 'Technology Stack', type: 'skill' })}
              className="bg-gray-900/40 p-3 lg:p-4 rounded-lg hover:bg-gray-800/60 transition-all cursor-pointer group"
            >
              <div className="relative">
                <ImageWithFallback
                  src={skill.img}
                  alt={skill.name}
                  className="w-full aspect-square object-cover rounded mb-2 lg:mb-3"
                />
                <button className="absolute bottom-1 lg:bottom-2 right-1 lg:right-2 w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-xl">
                  <Play className="ml-0.5" fill="black" size={14} className="lg:w-4 lg:h-4" />
                </button>
              </div>
              <h3 className="text-xs lg:text-sm mb-1">{skill.name}</h3>
              <p className="text-xs text-gray-400">{skill.plays} projects</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="px-4 lg:px-8 mt-8 lg:mt-12">
        <h2 className="text-xl lg:text-2xl mb-4">About</h2>
        <div className="bg-gray-900/40 p-4 lg:p-6 rounded-lg">
          <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
            Full Stack Developer with strong expertise in C, C++, Java, Python, and modern front-end frameworks. 
            Passionate about building scalable, user-focused applications, with hands-on experience in both frontend 
            and backend development. Currently pursuing B.E in Computer Science Engineering at Global Academy of Technology, 
            Bangalore with a GPA of 9/10.
          </p>
        </div>
      </div>
    </div>
  );
}
