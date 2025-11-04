import { Play, Calendar, ExternalLink, Github } from 'lucide-react';

interface ProjectsViewProps {
  setCurrentlyPlaying: (track: { title: string; artist: string; type: string }) => void;
}

export function ProjectsView({ setCurrentlyPlaying }: ProjectsViewProps) {
  const projects = [
    {
      title: 'Gaming Hub Event Platform',
      tech: 'React.js, Node.js, MongoDB',
      date: 'December 2025 - January 2026',
      duration: '3:45',
      color: 'from-purple-600 to-purple-900',
      features: [
        'Event creation, registration, and real-time scheduling',
        'Role-based authentication system',
        'Email notifications',
        'AWS deployment',
      ],
      plays: '1.2M',
      liveLink: 'https://gaming-hub-demo.netlify.app',
      githubLink: 'https://github.com/bindu-draj/gaming-hub'
    },
    {
      title: 'E-Commerce Platform',
      tech: 'Angular, Django, PostgreSQL',
      date: 'October 2025 - November 2025',
      duration: '4:20',
      color: 'from-blue-600 to-blue-900',
      features: [
        'Secure payment gateway integration',
        'Order tracking system',
        'AI-powered recommendation system',
        'REST APIs with scalable backend',
      ],
      plays: '980K',
      liveLink: 'https://ecommerce-platform-demo.netlify.app',
      githubLink: 'https://github.com/bindu-draj/ecommerce-platform'
    },
    {
      title: 'Portfolio Website',
      tech: 'React.js, GitHub Actions, Netlify',
      date: 'September 2025',
      duration: '2:30',
      color: 'from-green-600 to-green-900',
      features: [
        'Responsive single-page design',
        'Smooth animations and transitions',
        'Automated deployments with CI/CD',
        'Modern UI/UX principles',
      ],
      plays: '750K',
      liveLink: 'https://bindu-portfolio.netlify.app',
      githubLink: 'https://github.com/bindu-draj/portfolio'
    },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative min-h-[300px] lg:h-80 bg-gradient-to-b from-purple-900 to-gray-900 px-4 lg:px-8 pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
          <div className="w-32 h-32 lg:w-56 lg:h-56 bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <Play size={64} className="lg:w-20 lg:h-20 text-white" fill="white" />
          </div>
          <div className="flex-1 pb-4 lg:pb-6 text-center lg:text-left">
            <p className="text-xs lg:text-sm uppercase mb-1 lg:mb-2">Project Playlist</p>
            <h1 className="text-4xl lg:text-8xl mb-3 lg:mb-6">Projects</h1>
            <p className="text-sm lg:text-base text-gray-300">Bindu D • {projects.length} projects • 10 hrs 35 min</p>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-4 lg:py-6">
        <button className="w-12 h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 hover:scale-105 transition-all shadow-xl">
          <Play className="ml-1" fill="black" size={20} className="lg:w-6 lg:h-6" />
        </button>
      </div>

      {/* Projects List */}
      <div className="px-4 lg:px-8">
        <div className="hidden lg:grid grid-cols-12 gap-4 px-4 pb-2 text-sm text-gray-400 border-b border-gray-800">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Title</div>
          <div className="col-span-3">Technologies</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-1 text-right">Duration</div>
        </div>

        <div className="space-y-4 lg:space-y-2 mt-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900/40 lg:bg-transparent rounded-lg lg:rounded-none">
              {/* Desktop Layout */}
              <div
                onClick={() => setCurrentlyPlaying({ title: project.title, artist: project.tech, type: 'project' })}
                className="hidden lg:grid grid-cols-12 gap-4 px-4 py-3 rounded hover:bg-gray-800/60 transition-all cursor-pointer group"
              >
                <div className="col-span-1 flex items-center text-gray-400">
                  <span className="group-hover:hidden">{index + 1}</span>
                  <Play className="hidden group-hover:block" fill="white" size={16} />
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded flex-shrink-0`} />
                  <div>
                    <p className="text-white">{project.title}</p>
                    <p className="text-sm text-gray-400">{project.plays} views</p>
                  </div>
                </div>
                <div className="col-span-3 flex items-center text-gray-300 text-sm">
                  {project.tech}
                </div>
                <div className="col-span-2 flex items-center text-gray-400 text-sm">
                  {project.date}
                </div>
                <div className="col-span-1 flex items-center justify-end text-gray-400 text-sm">
                  {project.duration}
                </div>
              </div>

              {/* Mobile Layout */}
              <div
                onClick={() => setCurrentlyPlaying({ title: project.title, artist: project.tech, type: 'project' })}
                className="lg:hidden p-4 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white truncate">{project.title}</p>
                    <p className="text-xs text-gray-400">{project.plays} views</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-2">{project.tech}</p>
                <p className="text-xs text-gray-500">{project.date}</p>
              </div>

              {/* Expandable Details */}
              <div className="px-4 pb-4 pt-2 lg:ml-16 space-y-2">
                <h4 className="text-xs lg:text-sm text-gray-400 mb-2">Key Features:</h4>
                {project.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-2 text-xs lg:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                    {feature}
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 mt-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-black rounded-full hover:bg-green-400 transition-colors text-xs lg:text-sm"
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 rounded-full hover:border-white transition-colors text-xs lg:text-sm"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
